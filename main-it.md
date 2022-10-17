---
language: it
layout: default
title: "Informazioni sul corso"
permalink: /it/info.html
---

{%include pageglobal.html %}

{% if courseinfo.obiettivi[language] or courseinfo.obiettivi['all'] %}
<blockquote class="mt-2 mt-sm-5">
{% if courseinfo.obiettivi[language] %}{{ courseinfo.obiettivi[language] }}{% elsif courseinfo.obiettivi['all'] %}<blockquote>{{ courseinfo.obiettivi['all'] }}</blockquote>{% endif %}
</blockquote>
{% endif %}

## Sillabo {#sillabo}

{% assign a =  courseinfo.sillabo  %}
<ol>
{% for credito in a %} <li> {% for argomento in credito %}
{% if argomento[language] %}   {{ argomento[language] }}{% elsif argomento['all'] %}   {{ argomento['all'] }}{% endif %}. {% endfor %}</li>{% endfor %}
</ol>


{% if courseinfo.prerequisiti[language] or courseinfo.prerequisiti['all'] %}
## Prerequisiti
> I prerequisiti indicano le conoscenze necessarie a una corretta fuizione del corso. Non si tratta di propedeuticità formali, in quanto le conoscenze qui elencate potrebbero provenire da insegnamenti diversi e anche dall'esperienza personale.

{% if courseinfo.prerequisiti[language] %}{{ courseinfo.prerequisiti[language] }}{% elsif courseinfo.prerequisiti['all'] %}{{ courseinfo.prerequisiti['all'] }}{% endif %}
{% endif %}


{% if courseinfo.lezioni[language] or courseinfo.lezioni['all'] %}
## Metodi didattici
{% if courseinfo.lezioni[language] %}{{ courseinfo.lezioni[language] }}{% elsif courseinfo.lezioni['all'] %}{{ courseinfo.lezioni['all'] }}{% endif %}
{% endif %}


{% if courseinfo.esame[language] or courseinfo.esame['all']  %}
## Verifica dell'apprendimento
{% if courseinfo.esame[language] %}{{ courseinfo.esame[language] }}{% elsif courseinfo.esame['all'] %}{{ courseinfo.esame['all'] }}{% endif %}
{% endif %}