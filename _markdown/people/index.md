---
layout: "regular.html"
title: People
subtitle: /people
edited: August 15, 2025
---

# People
---

<ul class="box">
{%- for post in collections.people -%}
    <div id="people-box">
        <img src={{post.data.image}} alt="{{post.data.alt}}" class="pfp-list">
        <h1 class="name" style="display: inline;"><a href="{{post.url}}">{{post.data.title}}</a></h1>
    </div>
    <br>
    <br>
{%- endfor -%}
</ul>