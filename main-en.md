---
language: en
layout: default
title: "Course info"
permalink: /en/info.html
redirect_from:
  - /
---

{%include pageglobal.html %}

## Syllabus {#sillabo}

{% assign a =  courseinfo.sillabo  %}
<ol>
{% for credito in a %} <li> {% for argomento in credito %}
{% if argomento[language] %}   {{ argomento[language] }}{% elsif argomento['all'] %}   {{ argomento['all'] }}{% endif %}. {% endfor %}</li>{% endfor %}
 </ol>


## Textbooks  {#testi}
{% if courseinfo.testi %}
{% assign a =  courseinfo.testi | where_exp: "testo","testo.lingua == language" %}
<ul>
{% for testo in a %}<li> <em>{{ testo.autori }}</em>, {{ testo.titolo }}, {{ testo.editore }}   
{% if testo.commento[language] %}   <br/><em>{{ testo.commento[language] }}</em>
{% elsif testo.commento['all'] %}   <br/><em>{{ testo.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>
{% endif %}