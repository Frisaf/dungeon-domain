---
title: Sessions
eleventyExcludeFromCollections: true
---
# Sessions

<hr>

All session reports. A summary of the start can be found [here](/start_summary/).

## Session reports

<hr>

Last session report:

<ul>
    {% for post in collections.session_collections %}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {% endfor %}
</ul>