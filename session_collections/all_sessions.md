---
title: Sessions
eleventyExcludeFromCollections: true
---
# Sessions

<hr>

All session reports. A summary of the start can be found [here](/start_summary/).

## Session reports

<hr>

{% for session in collections.session_reports | reverse | itemLimit(1) %}
    <p>Last session report: <a href="{{ session.url }}">{{ session.data.title }}</a></p>
{% endfor %}

<ul>
    {% for post in collections.session_collections %}
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {% endfor %}
</ul>