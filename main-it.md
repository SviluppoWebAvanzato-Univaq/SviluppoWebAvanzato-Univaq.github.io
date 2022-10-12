---
language: it
layout: default
title: "Informazioni sul corso"
permalink: /it/info.html
---

{%include pageglobal.html %}



## Sillabo {#sillabo}

{% assign a =  courseinfo.sillabo  %}
<ol>
{% for credito in a %} <li> {% for argomento in credito %}
{% if argomento[language] %}   {{ argomento[language] }}{% elsif argomento['all'] %}   {{ argomento['all'] }}{% endif %}. {% endfor %}</li>{% endfor %}
</ol>


## Libri di Testo  {#testi}
{% if courseinfo.testi %}
{% assign a =  courseinfo.testi | where_exp: "testo","testo.lingua == language" %}
<ul>
{% for testo in a %}<li> <em>{{ testo.autori }}</em>, {{ testo.titolo }}, {{ testo.editore }}   
{% if testo.commento[language] %}   <br/><em>{{ testo.commento[language] }}</em>
{% elsif testo.commento['all'] %}   <br/><em>{{ testo.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>
{% endif %}
