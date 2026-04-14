---
title: blog
layout: regular.html
---

<h1> Blog </h1>

{%- for post in collections.blog -%}
<li><a href={{post.url}}>{{post.data.title}}</a> by {{post.data.by-name}}&ensp;&mdash;&ensp;<em>{{post.data.edited}}</em></li>
{%- endfor -%}
<br>