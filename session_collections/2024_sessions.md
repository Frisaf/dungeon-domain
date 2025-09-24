---
title: Session Reports 2024
---
# Session Reports 2024

<hr>

All session reports from 2024.

<ul>
    {% for report in collections.reports_2024 | reverse %}
        <li><a href="{{ report.url }}">{{ report.data.title }}</a> - {{ report.data.date | formatDate }}</li>
    {% endfor %}
</ul>