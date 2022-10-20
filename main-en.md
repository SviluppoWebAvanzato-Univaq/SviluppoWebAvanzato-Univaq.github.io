---
language: en
layout: default
title: "Course info"
permalink: /en/info.html
redirect_from:
  - /
---

{%include pageglobal.html %}

{% if courseinfo.obiettivi[language] or courseinfo.obiettivi['all'] %}
<blockquote class="mt-2 mt-sm-5">
{% if courseinfo.obiettivi[language] %}{{ courseinfo.obiettivi[language] }}{% elsif courseinfo.obiettivi['all'] %}<blockquote>{{ courseinfo.obiettivi['all'] }}</blockquote>{% endif %}
</blockquote>
{% endif %}

## Syllabus {#sillabo}

{% assign a =  courseinfo.sillabo  %}
<ol>
{% for credito in a %} <li> {% for argomento in credito.argomenti %}
{% if argomento[language] %}   {{ argomento[language] }}{% elsif argomento['all'] %}   {{ argomento['all'] }}{% endif %}. {% endfor %}
{% if credito.peso %} <em>(about {{credito.peso}} teaching hours)</em>{% endif %}
</li>{% endfor %}
</ol>


{% if courseinfo.prerequisiti[language] or courseinfo.prerequisiti['all'] %}
## Prerequisites
{% if courseinfo.prerequisiti[language] %}{{ courseinfo.prerequisiti[language] }}{% elsif courseinfo.prerequisiti['all'] %}{{ courseinfo.prerequisiti['all'] }}{% endif %}
{% endif %}


{% if courseinfo.lezioni[language] or courseinfo.lezioni['all'] %}
## Teaching methods
{% if courseinfo.lezioni[language] %}{{ courseinfo.lezioni[language] }}{% elsif courseinfo.lezioni['all'] %}{{ courseinfo.lezioni['all'] }}{% endif %}
{% endif %}


{% if courseinfo.esame[language] or courseinfo.esame['all']  %}
## Assessment methods
{% if courseinfo.esame[language] %}{{ courseinfo.esame[language] }}{% elsif courseinfo.esame['all'] %}{{ courseinfo.esame['all'] }}{% endif %}
{% endif %}

