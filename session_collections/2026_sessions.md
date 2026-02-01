---
title: Session Reports 2026
---
# Session Reports 2026

<hr>

All session reports from 2026

<ul>
    {% for report in collections.reports_2026 | reverse %}
        <li><a href="{{ report.url }}">{{ report.data.title }}</a> - {{ report.data.date | formatDate }}</li>
    {% endfor %}
</ul>