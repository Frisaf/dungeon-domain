---
title: Session Reports 2025
---
# Session Reports 2025

<hr>

All session reports from 2025

<ul>
    {% for report in collections.reports_2025 | reverse %}
        <li><a href="{{ report.url }}">{{ report.data.title }}</a> - {{ report.data.date | formatDate }}</li>
    {% endfor %}
</ul>