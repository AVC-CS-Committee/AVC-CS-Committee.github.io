import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import footnote_plugin from 'markdown-it-footnote';

export default function (eleventyConfig) {
	eleventyConfig.ignores.add("**blog/drafts/**");

	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/blog/feed.xml",
		collection: {
			name: "blog", // iterate over `collections.post`
			limit: 20,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "AVC CS Club Blog",
			subtitle: "A blog discussing the activities going on in the Computer Science club at AVC",
			base: "https://avc-cs-committee.github.io/blog/",
			author: {
				name: "CS Club",
				email: "", // Optional
			}
		}
	});

	// What is this? It's a shortcode! Basically, you can call {% box "box1" %} ... {% endbox %}
	// with markdown content in between. The markdown is saved to this.page[id], in the
	// case of our example, our id = "box1", so this.page["box1"] stores our content.
	// Nothing is returned, we will use this saved content in the renderBox shortcode below.
	eleventyConfig.addPairedShortcode("box", function(content, id) {
		this.page[id] = content;
		return "";
	});


	// Shortcode to render a captured box anywhere in your layout
	// Usage in layout: {% renderBox "[id]" %}, replacing [id] but keeping the quotes.
	// You can use this just like {{ content }} or {{ title }} or anything else.
	eleventyConfig.addShortcode("renderBox", function(id) {
		return this.page[id] || ""; // Outputs stored content, or empty string if undefined
	});

	//get a markdown engine, call it md
	let md = markdownIt({html:true});

	// paired shortcode: {% markdown %}## Hi{% endmarkdown %}
	eleventyConfig.addPairedShortcode("markdown", (content) => {
		return `<div class="md-block">${md.render(content)}</div>`;
	});
}

export const config = {
  dir: {
		output: "../docs",
  }
};
