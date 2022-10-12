---
language: en
layout: default
title: "Course workspace"
permalink: /en/workspace
---


{%include pageglobal.html %}

## Tips for creating a *course workspace* 

*Version {{ryear}}*

In our course, we will make use of three main software applications:
- Netbeans (<https://netbeans.apache.org/>), the development IDE,
- Tomcat (<https://tomcat.apache.org/>), the Java web server,
- the JDK (<https://jdk.java.net/>), on which both the above programs will run.

Unfortunately, these three softwares, especially the JDK, are subject to continuous updates, which in addition to
fixing bugs and adding features can sometimes introduce new bugs
and incompatibilities with the examples shown during the lactures that are based
on a specific combination of versions, tested and "certified" *before*
the course begins.

To minimize problems, I recommend you **install the same versions indicated at the beginning of the course** 
(even if they are not the latest available). Even
better, I suggest you to **create a "private" workspace dedicated to the course tools** 
that is influenced as little as possible by the actual software set-up of the machine you will be working on. 
This is very useful especially if on your machine you have already installed other versions of the mentioned softwares. 
The procedure is as follows.

The software versions **for the academic year {{ryear}} / {{ryear | plus: 1}}** are indicated in the [Software](/en/risorse#software) section.


**Warning**: **Tomcat 9 and Tomcat 10 (or higher) cannot run the same web applications**: while Tomcat 9
uses the JEE 8 Web, Tomcat 10 uses the Jakarta EE 9 Web, which requires to manually modify the packages of many classes
used by the web applications. In the Web Engineering course we will show how to adapt
applications to run on both versions.

**Warning: some Maven plugins** normally used by Netbeans are not compatible with the latest 
JDK versions. During the course we will show how to edit the standard projects
generated by the IDE to make them work again. In any case,
all projects published online are fixed and, being based on
Maven, can be used as a starting point for your applications,
also on other IDEs.

*Note: If you are sufficiently skilled in using another IDE, you can use the one that
you already have available instead of Netbeans, but obviously in that case you will have to
manage by yourself the configuration required by your IDE to deploy a web application.*

## Download and Install the Software

1. **Create a new folder** in your *user home*
(e.g., Documents for Windows users). Below we will indicate this folder with "\<D \>"
(where \<D\> is an absolute path, for example C:\\Users\\foo\\Documents\\workspace
or /home/foo/workspace).
2. In the \<D\> folder, **create three sub-folders** named
\<D\>/nb_userdir, \<D\>/nb_cachedir and \<D\>/tomcat_base
3. **Download the zip archives** (*no installers!*) of the JDK,
Netbeans and Tomcat with the recommended versions. You may have to download them from "archive" pages
such as <https://jdk.java.net/archive/>, <https://netbeans.apache.org/download/archive/> (or <https://netbeans.apache.org/download>) 
and < https://tomcat.apache.org/whichversion.html>.
4. **Expand archives** in the \<D\> folder. You will get 
three folders, for example (*real name will depend on versions*) \<D\>/jdk-JV,
\<D\>/netbeans-NV and \<D\>/apache-tomcat-TV.
5. In the folder where Netbeans was expanded, in our example \<D\>/netbeans-NV,
you will find the file **etc/netbeans.conf**. Within this file,
modify the following keys as indicated.   
   Note that *the JDK path must be defined based on the folder it is in
was actually expanded to point 4*. If necessary, delete the
comment (#) before the lines containing these keys to enable them.
Remember to save the netbeans.conf file when you are done making changes.
   - netbeans_default_userdir = "\<D\>/nb_userdir"
   - netbeans_default_cachedir = "\<D\>/nb_cachedir"
   - netbeans_jdkhome = "\<D\>/jdk-JV"

## First Launch of the IDE

6. At this point, you can **run Netbeans** using the launchers
present in the *bin* folder. If you work on Windows, use the executable
"netbeans64.exe" if you downloaded a 64bit JDK, otherwise use
the "netbeans.exe" executable. On Unix and Mac systems, use the shell script
"netbeans".  
   If the IDE asks you to import the configuration already present on 
your machine (maybe from an older version) answer no.

7. Select the **Tools \> Java Platforms** menu item and
verify that the JDK you have installed is present in the list and marked
as "Default" (the relative "Platform folder" must be the one specified
in the *netbeans_jdkhome* key, and therefore located inside \<D\>).

## Tomcat configuration

At this point you can proceed and **connect Netbeans to Tomcat**.
   1. Select the **Tools \> Servers** menu item and then the
"*Add Server...*" button.
   2. In the next wizard select "*Apache Tomcat or TomEE*" and specify as
"*Server location*" the folder \<D\>/apache-tomcat-TV (*also
here the actual name will change as the version changes*).
   3. Optionally, check the "*use private configuration folder*" box
and enter the \<D\>/tomcat_base folder as "*Catalina base*". This
this is not necessary if you have unzipped Tomcat in your home
directory, while it is required if you have installed it in other locations on
your machine (for example in the Windows Program Files folder).
   4. Enter simple credentials in the "*Username*" and "*Password*" boxes
(the IDE may ask you for them several times in the future) and make sure that the
The "*Create user if if does not exist*" box is checked.
   5. Finish the process. At this point you should see the server just
installed in the "Servers" list of the dialog box. Check that in the
"*Platform*" tab for the new server the "*Java Platform*"
is the same default JDK used by the IDE.

## Configuration Test

To **test the new configuration**,
   1. First try to **start Tomcat** by clicking with the right mouse button
on the corresponding sub-entry of the "*Servers*" node shown in the
tab/box "*Services*" of the IDE and selecting "*Start*". If you
you are prompted for credentials for the "*Tomcat Manager Application*",
type the ones defined in the previous section. Hopefully, you will see the server logs
shown by the IDE listing a number of information lines that will end
with a line like "*Server startup in \[...\] milliseconds*". This will
confirm that the server started successfully.
   2. **Create a simple web application**, add a servlet to it and
try to run it. If the web browser opens showing the defaulw application welcome page (index), 
try to access the URL of the servlet you created. If the servlet also answers with its own
default message, the environment is configured correctly. Note: you might
having to configure which browser to open automatically by selecting it from
**Tools \> Options** menu item.