import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
	eleventyConfig.ignores.add("**blog/drafts/**");

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
}


export const config = {
  dir: {
		output: "../docs",
  }
};
