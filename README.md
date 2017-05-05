# structure du repertoires pour le clients
```
├── _README.md
├── _client/
|	├── _package.json
|	├── _node_modules/...
|	├── _partie_clients/
|	|   ├──clients.html
|	|   ├──_js/
|	|   |   └──_app.js
|	|   └──_css/
|	|      └──_style.css
|	├── _partie_commandes
|	|   ├──_js/
|	|   |  └──_app.js
|	|   └──_css/
|	|      └──_style.css
|	├── _partie_produits
|	|   ├──_js/
|	|   |   └──_app.js
|	|   └──_css/
|	|      └──_style.css
|	├── _index.html
|	├── _js
|	├── _style.css
|	└── Admin.ico
|
|
├── server ??
|
└─
```



# Convention de nommages (pour l'instant)

* object client:
	*	gender
	*	firstName
	*	name
	*	birthdate
	*	city
	*	address
	*	zipCode
	*	phoneNumber
	*	registrationDate








Cahier des charges pour la création d’un logiciel web de relation clientèle
(CRM - Customer Relationship Management)


Besoin

Créer un logiciel de gestion de relation commerciale (CRM) possédant les caractéristiques suivantes :
gestion d’une liste de prospects/clients
gestion d’une liste de produits
enregistrement des commandes et ventes

Base de données
La base de données est stockée sous forme de fichiers JSON dans le serveur. Elle est composée de trois tables (trois fichiers donc), dont les champs sont les suivants :

Table clients :
titre
prénom
nom
date de naissance
ville
adresse
code postal
numéro de téléphone
date d’inscription

Table produits :
nom
prix
stock
lieu
description (rich text)
taille
poids
référence


Table commandes :
client
produits
quantités
prix
réductions
frais de port
prix total
TVA
adresse de livraison
adresse de facturation
dates


Contraintes techniques

Serveur
Nodejs / Expressjs
NodeFS pour enregistrement/lecture dans des fichiers json.
Momentjs pour la gestion dates
Stockage des données sous forme de fichiers JSON.

Interface
L’interface doit être réalisée en HTML et javascript.
L’interface doit être responsive design.
Tout les tableaux doivent être triables en cliquant sur les colonnes.
Les clients doivent être majeurs et résider en Europe.
Les champs suivants sont obligatoires : nom/prénom/adresse/téléphone.
Les formulaires d’ajout sont en pur HTML (balise form).
L’interface ne doit pas contenir de turquoise.
Le menu doit être composé de menus déroulants.
Framework CSS interdit.
Attention à l’UI et à l’UX.
Le champ description est WYSIWYG (CKEditor, TinyMCE, etc...)

Code
Le code doit posséder une indentation parfaite.
Les noms de variables doivent être clairs et en anglais (pas de franglais)
Les fonctions doivent être commentées.

Gestion du projet
Travailler OBLIGATOIREMENT sur le Github : https://github.com/SimplonAuch/Projet-CRM
Tous les contributeurs doivent poster leurs travaux depuis leur comptes github personnels.
La moitié de l’équipe travaille sur l’interface web, l’autre moitié sur le serveur.

Tenir un journal de bord de l’organisation du projet, dans lequel sont reportés :
le kanban (todo, planned, progress, test, done)
le planning prévisionnel (par tâche)
les ressources (personnes) affectées à chaque tâche
les délais de réalisation, et difficultés rencontrées

Livrables
Le logiciel doit être fourni prêt à l’emploi, avec des données fictives complètes (dont on ne risque pas d’avoir honte) Fakerjs pour simuler les données.
