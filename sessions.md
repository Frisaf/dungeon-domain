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
    {% if "session-report" in post.data.tags %}
        <a href="{{ post.url }}">{{ post.data.title }}</a>
    {% endif %}
{% endfor %}