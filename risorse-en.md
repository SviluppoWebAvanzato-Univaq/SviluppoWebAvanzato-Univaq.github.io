---
language: en
layout: default
title: "Course resources"
permalink: /en/risorse.html
---

{%include pageglobal.html %}

## Online Resources

### Software  {#software}

> Useful applications related to the course topics. To ease the development, before installing any software **please read the guide about the [creation of a private software workspace](/en/workspace)**

<ul>
{% for s in softwareinfo %}<li> 
<a href="{{ s.url }}">{{ s.nome }}</a>
{% if s.versione %}  <em>(suggested version for a.y. {{ryear}}/{{ryear | plus: 1}}: {{ s.versione }})</em>{% endif %}
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>

### Other Resources {#links}

> Unordered and often not updated collection of useful links to study and deepen your knowledge about the course topics

<ul>
{% for s in linkinfo %}<li> 
<a href="{{ s.url }}">{% if s.nome[language] %}{{ s.nome[language] }}
{% elsif s.nome['all'] %}{{ s.nome['all'] }}{% endif %}</a>
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>

