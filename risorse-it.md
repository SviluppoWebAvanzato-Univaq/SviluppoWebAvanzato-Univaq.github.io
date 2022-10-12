---
language: it
layout: default
title: "Risorse del corso"
year: 2022
permalink: /it/risorse.html
---

{%include pageglobal.html %}


## Risorse online

### Software  {#software}

> Applicazioni utili legate agli argomenti del corso. Per facilitare lo sviluppo, prima di installare il software **leggete la guida sulla [creazione di un workspace software privato](/it/workspace)**

<ul>
{% for s in softwareinfo %}<li> 
<a href="{{ s.url }}">{{ s.nome }}</a>
{% if s.versione %}  <em>(versione consigliata per l'a.a. {{ryear}}/{{ryear | plus: 1}}: {{ s.versione }})</em>{% endif %}
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>

### Contenuti di Approfondimento {#links}

> Raccolta non ordinata e spesso anche poco aggiornata di link utili per studiare e approfondire gli argomenti del corso

<ul>
{% for s in linkinfo %}<li> 
<a href="{{ s.url }}">{% if s.nome[language] %}{{ s.nome[language] }}
{% elsif s.nome['all'] %}{{ s.nome['all'] }}{% endif %}</a>
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>

