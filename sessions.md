---
title: Sessions
layout: layout.html
---
# Sessions

<hr>

All session reports. A summary of the start can be found [here](/start_summary/).

## Session reports

<hr>

Last session report:

{% for post in collections.posts %}
    <ul>
        {% if "session-collection" in post.data.tags %}
            <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
        {% endif %}
    </ul>
{% endfor %}