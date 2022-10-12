---
language: it
layout: default
title: "Spazio di lavoro per il corso"
permalink: /it/workspace
---


{%include pageglobal.html %}


## Suggerimenti per la creazione di uno *spazio di lavoro* per il corso

*Versione {{ ryear }}*


Nel nostro corso utilizzeremo tre software principali:
- Netbeans (<https://netbeans.apache.org/>),l'IDE per lo sviluppo,
- Tomcat (<https://tomcat.apache.org/>), il web server Java,
- la JDK (<https://jdk.java.net/>), su cui gireranno entrambi i programmi di cui sopra.

Purtroppo questi tre software, soprattutto la JDK, sono soggetti a continui aggiornamenti, che oltre a
correggere problemi e aggiungere funzionalità possono, talvolta, introdurre nuovi bug
e incompatibilità rispetto agli esempi presentati durante il corso, che si basano
su una precisa combinazione di versioni testata e "certificata" *prima*
dell'avvio del corso stesso.

Per ridurre al minimo i problemi,
quindi, vi consiglio di **installare le stesse versioni che vi sono state segnalate
all'inizio del corso** (anche se non sono le ultimissime disponibili). Ancor
meglio, vi consiglio di **creare uno spazio di lavoro "privato" dedicato ai
tool del nostro corso** che sia influenzato il meno possibile dall'assetto
software della macchina su cui lavorerete. Questo è molto utile soprattutto se
sulla vostra macchina avete già installate altre versioni dei software di cui
sopra. La procedura è la seguente.

Le versioni del software utilizzate **per l'anno accademico {{ryear}}/{{ryear | plus: 1}}** sono indicate nella sezione 
[Software](/it/risorse#software).

**Attenzione** : **Tomcat 9 e Tomcat 10 (o superiori) non possono eseguire le stesse applicazioni web**: mentre Tomcat 9
utilizza la JEE 8 Web, Tomcat 10 usa la Jakarta EE 9 Web, il che rende
necessario intervenire manualmente modificando i package di molte classi
utilizzate dalle web applications. Nel corso di Web Engineering mostreremo come adattare 
le applicazioni per l'esecuzione su entrambe le versioni.

**Attenzione: alcuni plugin Maven** utilizzati normalmente da Netbeans non sono compatibili con le ultime
versioni della JDK. Durante il corso mostreremo come modificare i progetti
standard generati dall'IDE per renderli di nuovo funzionanti. In ogni caso,
tutti i progetti messi online saranno sempre corretti e, essendo basati su
Maven, potranno essere usati come ponto di partenza per le vostre applicazioni,
anche su altri IDE.

*Nota: se siete sufficientemente esperti nell'uso di un altro IDE, potete utilizzare quello che
avete già a disposizione al posto di Netbeans, ma ovviamente in tal caso dovrete
gestire da soli i vari aspetti di connessione al web server e la corretta
configurazione dell'ambiente.*

## Scaricamento e Installazione del Software

1. **Create una nuova cartella** nella vostra *home utente*
(ad esempio Documenti per chi usa Windows). Di seguito indicheremo tale cartella con "\<D\>"
(dove \<D\> è un percorso assoluto, ad esempio C:\\Users\\pippo\\Documents\\workspace
o /home/pippo/workspace).
2. Nella cartella \<D\> **create tre sotto-cartelle** denominate
\<D\>/nb_userdir, \<D\>/nb_cachedir e \<D\>/tomcat_base
3. **Scaricate gli archivi zip** (*niente installer!* ) della JDK,
di Netbeans e di Tomcat con le versioni consigliate nel corso. Se non si tratta
delle ultimissime versioni, potreste doverle prelevare da pagine "archivio"
come <https://jdk.java.net/archive/>, <https://netbeans.apache.org/download/archive/> (o <https://netbeans.apache.org/download>) e <https://tomcat.apache.org/whichversion.html>.
4. **Espandete gli archivi** nella cartella \<D\>. Otterrete quindi
tre cartelle, ad esempio (*il nome reale dipenderà dalle versioni*) \<D\>/jdk-JV,
\<D\>/netbeans-NV e \<D\>/apache-tomcat-TV.
5. Nella cartella in cui è stato espanso Netbeans, nel nostro esempio \<D\>/netbeans-NV,
troverete il file **etc/netbeans.conf** . All'interno di questo file,
modificate le chiavi seguenti come indicato.   
   Notate che *il path della JDK va definito sulla base della cartella in cui è
stata effettivamente espansa al punto 4*. Se necessario, eliminate il
commento (#) prima delle righe contenenti queste chiavi per abilitarle.
Ricordate di salvare il file netbeans.conf al termine delle modifiche.
   - netbeans_default_userdir="\<D\>/nb_userdir"
   - netbeans_default_cachedir="\<D\>/nb_cachedir"
   - netbeans_jdkhome="\<D\>/jdk-JV"

## Primo Avvio dell'IDE

6. A questo punto, potete **lanciare Netbeans** usando i launcher
presenti nella cartella *bin* . Se lavorate su Windows, usate l'eseguibile
"netbeans64.exe" se avete scaricato una JDK a 64bit, altrimenti usate
l'eseguibile "netbeans.exe". Su sistemi Unix e Mac, usate lo script shell
"netbeans".   
   Se all'avvio l'IDE vi chiede di importare la configurazione già presente sulla
vostra macchina (magari di una versione precedente) rispondete no.

7. Selezionate la voce di menu **Tools \> Java Platforms** e
verificate che la JDK che avete installato sia presente nella lista e marcata
come "Default" (il relativo "Platform folder" dovrà essere quello specificato
nella chiave *netbeans_jdkhome*, e quindi situato all'interno di \<D\>).

## Configurazione di Tomcat

A questo punto potete procedere a **connettere Netbeans a Tomcat**.   
   1. Selezionate la voce di menu **Tool \> Servers** e di seguito il
bottone "*Add Server...*".
   2. Nel successivo wizard selezionate "*Apache Tomcat or TomEE* " e come
"*Server location* " specificate la cartella \<D\>/apache-tomcat-TV (*anche
qui il nome effettivo cambierà al variare della versione, ovviamente*).
   3. Opzionalmente, spuntate la casella "*use private configuration folder* "
e immettete come "*Catalina base*" la cartella \<D\>/tomcat_base. Questa
operazione non è necessaria se avete decompresso Tomcat nella vostra home
utente, mentre lo è nel caso in cui lo abbiate installato in altre posizioni sulla
vostra macchina (ad esempio nella cartella Programmi di Windows).
   4. Inserite delle credenziali semplici nelle caselle "*Username* " e "*Password* "
(l'IDE potrebbe richiedervele più volte in futuro) e assicuratevi che la
casella "*Create user if if does not exist*" sia spuntata.
   5. Terminate il processo. A questo punto dovreste vedere il server appena
istallato nella lista "Servers" del box di dialogo. Controllate che nella
linguetta "*Platform* " relativa al nuovo server la "*Java Platform*"
sia la stessa JDK di default usata dall'IDE.

## Test della Configurazione

Per **testare la nuova configurazione**,
   1. Provate prima di tutto ad **avviare Tomcat** cliccando col tasto
destro sulla relativa sotto-voce del nodo "*Servers* " presente nella
linguetta/box "*Services* " dell'IDE e selezionando "*Start* ". Se vi
vengono chieste le credenziali per la "*Tomcat Manager Application* ",
inserite quelle definite nella sezione precedente. Se tutto va bene, vedrete i log del
server mostrati dall'IDE elencare una serie di informazioni che termineranno
con una riga del tipo "*Server startup in \[...\] milliseconds*". Questo vuol
dire che il server si è avviato con successo.
   2. **Create una semplice web application** , aggiungetevi una servlet e
provate ad eseguire il tutto. Se il browser web si apre mostrando la pagina di
benvenuto di default dell'applicazione (index), provate ad accedere alla URL
della servlet che avete creato. Se anche la servlet vi risponde col suo
messaggio di default, l'ambiente è configurato correttamente. Nota: potreste
dover configurare quale browser aprire automaticamente selezionandolo dalla
voce di menu **Tools \> Options.**
