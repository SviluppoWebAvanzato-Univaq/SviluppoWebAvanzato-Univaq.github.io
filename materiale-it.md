---
language: it
layout: default
title: "Materiale didattico"
permalink: /it/materiale.html
---

{%include pageglobal.html %}

## Materiale Didattico

> Questo materiale, mostrato o sviluppato durante le lezioni, è dedicato agli studenti di questo corso.
Visto che la conoscenza *deve* essere considerata un patrimonio di tutti, il mio materiale didattico è a disposizione di
chiunque voglia servirsene per studiare la materia. Tuttavia, il materiale *non può essere usato, neppure in parte, per altri scopi o in altri corsi* senza il mio esplicito consenso e senza citare la provenienza del materiale stesso. 

### Slides e Dispense  {#slides}

{% if materialinfo.slides %}
<ul>
{% for s in materialinfo.slides %}<li> 
<a href="{{ s.url }}">{% if s.nome[language] %}{{ s.nome[language] }}
{% elsif s.nome['all'] %}{{ s.nome['all'] }}{% endif %}</a>
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>
{% endif %}

### Progetti di Fine Corso  {#progetti}

{% if materialinfo.projects %}
<ul>
{% for s in materialinfo.projects %}<li> 
<a href="{{ s.url }}">{% if s.nome[language] %}{{ s.nome[language] }}
{% elsif s.nome['all'] %}{{ s.nome['all'] }}{% endif %}</a>
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>
{% endif %}

### Esempi  {#esempi}

> Prima di eseguire o modificare questi esempi, consultate la sezione [Software](/it/risorse#software)
e installate tutto il software necessario

{% if materialinfo.examples %}
<ul>
{% for s in materialinfo.examples %}<li> 
<a href="{{ s.url }}">{% if s.nome[language] %}{{ s.nome[language] }}
{% elsif s.nome['all'] %}{{ s.nome['all'] }}{% endif %}</a>
{% if s.commento[language] %}   <br/><em>{{ s.commento[language] }}</em>
{% elsif s.commento['all'] %}   <br/><em>{{ s.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>
{% endif %}
  

{% if courseinfo.testi %}
## Libri di Testo  {#testi}
{% assign a =  courseinfo.testi | where_exp: "testo","testo.lingua == language" %}
<ul>
{% for testo in a %}<li> <em>{{ testo.autori }}</em>, {{ testo.titolo }}, {{ testo.editore }}   
{% if testo.commento[language] %}   <br/><em>{{ testo.commento[language] }}</em>
{% elsif testo.commento['all'] %}   <br/><em>{{ testo.commento['all'] }}</em> 
{% endif %}</li>{% endfor %}
</ul>
{% endif %}
