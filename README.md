# ES-6 FireBase
application avec firebase

##https://projet1-bb086.firebaseapp.com/
    
Ce Projet Est un projet d'etudes , son objectif et d'envoyer des messages et les consultés en se basant sur la technologie Firebase et L'ajax , avec EcmaScript6 et POO

---------------------------------------------------------------------------------------------------------------------------------------------------------


##Prerequisites

Clone with HTTPS 
Use Git or checkout with SVN using the web URL.
https://github.com/abdotaouala/ES-6.git

    
---------------------------------------------------------------------------------------------------------------------------------------------------------


##arborescence
    
database.rules.json  - la configuration de la base de données JSON de FIREBASE
firebase.json        - HOSTING & DESTINATION & SOURCE FIREBASE ....
README.md            - Ce Fichier ;) (Informations)


Public (Dossier)     - Il Contient les elements accessible par les clients 
    - INDEX.HTML     - Master Page ou la page d'index
    - app(DOSSIER)   - Il Contient les elements de configuration du site web
            - css    - Il contient les elements css specialement (Bootstrap) car j'ai utilisé un Css Inline 
            - img    - Il contient les images utilisés
            - js     - Il contient les elements JS  (##LE CORPS DU SITE)
                     -(...) /*LES AUTRES FICHIERS JE VAIS VOUS PARLER D'EUX ULTERIEUREMENT*/
                
Je vais vous parles du dossier Js qui contient le fonctionnement du site ce dossier contient des fichiers avec EcmaScript6 qui jouent un Rôle 
Important au developpement du site  je vais commençer avec : 

!!!!!!!!!!!! (TOUS SES FICHIERS SONT DES CLASSES Sauf Jquery ) !!!!!!!!!!

##MESSAGE   :
   
@class nom : message fonction : est un objet de message contient les attrs :
* @attr : id : identifiant de message
* @attr : titre titre de message
* @attr : objet objet de message
* @attr : etat etat de message
* @attr : date date d'ajout le message
* @attr email email de user entrer le message
* @constructor
* *@param id
* @param titre
* ...
 

##DriverManager

   
@class nom : drivermanager fonction : implement les fonction de gestion des messages
* @function getMessage
* @function addMessage
* @function removemessgae
* @functionupdatemessage
 
  
##Firebasejs :
    
@class nom : firebasejs enfant de driver fonction : permet de connecter et gerer les message par des fonctions firebase .
* @constructor
* @function addMessage ajouter un nouveau message
* *@param message
* @function removemessage supprimer un message
* *@param idMess identifiant de message
* @functoon updatemessage mise a jour des messages
 
##Ajax      :
@class  classe nom : ajax  fonction : enfant de super classe driver contient les fonction de gestion de message par ajax
 * @function getMessage
 * @function addMessage
 * @function removemessgae
 * @functionupdatemessage
 
 ##UserManager
 
 @class nom : usermanager fonction : gestion des utilisateur contient les fonctions :
* @function createuser : ecrire user par un mot de passe et un email
* *@param user
* @function connect : connecter par un mot de passe et un email
* @function signin : ecrire une session par le mot de passe et un email
* *@param user
* @function getuserfromform : ecrire un objet user qui apartir de la formulaire d'inscription
* @function signout : fonction permet de femer la session
* @function facebookconnect ecrire une compte directement on utilise facebook
* @function googleconnect la meme chose que la dernniere mais on a avec google plus
* pas des attrs
 
##User
  
@class nom : user fonction : est un objet de l'utlisateur contient les attr :
* @attr email email d'utilisateur
* @attr password  password d'utilisateur
* @constructor
* *@paarm email
* *@param password
 
##Driver

@class nom : user fonction : est un objet de l'utlisateur contient les attr :
* @attr email email d'utilisateur
* @attr password  password d'utilisateur
* @constructor
* *@paarm email
* *@param password
 
 ## Diagramme de classe :
 
 ![alt tag](https://github.com/abdotaouala/ES-6/blob/master/diagramme%20de%20classe%20mail.png)

##Jquery
    Ils contient les fonctions jquery que j'ai utilisé de temps en temps ( des fois j'utilise EcmasCript5 et Ecmascript6 document.querySelector .....)
    Jquery.min.js : version minifié de Jquery
    Jquery        : Version développement
##Configuration
    Ces Fonctions Décident avec quelle Technologie Travailler (FIREBASE ou AJAX)
    
     STATIC @getMethod(method) RETURN AFirebase (class) || Ajax (Class) en se basant sur la valeur de method ( "AJAX" || "FIREBASE")
     STATIC @getDate()         RETURN new Date() (cette fonction m'aide a formater le retour avec un format  EXEMPLE (27 Janvier 2017 # Temps 4 H : 2 Min)
    

---------------------------------------------------------------------------------------------------------------------------------------------------------


##Temps Total pour le DEV

Environ 36 Heures
    

---------------------------------------------------------------------------------------------------------------------------------------------------------


##Built With

FIREBASE - Api used
Ecmascript6 - Dependency Management
HTML5/CSS3 - 
JQUERY
BOOTSTRAP
    

---------------------------------------------------------------------------------------------------------------------------------------------------------


##Versioning


comme j'ai déja dit ce Projet est juste pour les etudes je n'ai utilisé aucun Versionneur , si je changerai L'idée je vais utilisé SemVer for versioning..
    

---------------------------------------------------------------------------------------------------------------------------------------------------------


##Authors

Abdelfatah Taouala
  



---------------------------------------------------------------------------------------------------------------------------------------------------------


##License

ce projet est développé avec des technologies OpenSource 

 ![alt tag](http://www.techweekeurope.co.uk/wp-content/uploads/2014/04/opensource.jpeg)
 <center>
  ![alt tag](https://avatars2.githubusercontent.com/u/16292164?v=3&u=08cba6b74f39aec11d1aa440dceee6eb9275928b&s=400)
  </center>
<div style="text-align:center"><img src ="https://avatars2.githubusercontent.com/u/16292164?v=3&u=08cba6b74f39aec11d1aa440dceee6eb9275928b&s=400" /></div>
