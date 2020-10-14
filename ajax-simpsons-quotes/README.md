# [WebSite Simpsons Quotes](https://lgiacalo.github.io/findThePrecious/ajax-simpsons-quotes/)

## Challenge - Citations des Simpsons

![Simpson](https://images.innoveduc.fr/js_parcours/ajax-requests/homer-simpson-woohoo.jpg)

L'API Simpsons Quotes va te fournir tout ce qu'il faut pour épater tes amis, en leur présentant ta propre application de citation des Simpsons ! Elle te donnera des citations obtenues aléatoirement :). Cela rappellera quelque chose aux wilders apprenant React !

Il va s'agir d'adapter le dernier exemple avec axios, pour aller interroger cette API.


1. Télécharge ce template, et sauvegarde-le dans un nouveau dossier.

2. Initialise un repo Git dans ce dossier, et crée un repository sur GitHub (par exemple ajax-simpsons-quotes).

3. Récupère le code d'exemple utilisant [axios](https://github.com/axios/axios#axios) avec l'API Pokémon,

4. Adapte le code pour :
    * Appeler la bonne URL ("Get one quote" dans la documentation),

    * Tenir compte du fait que response.data sera un tableau d'objets, n'en contenant qu'un seul, contrairement aux API Pokémon et Chuck Norris qui ne renvoient qu'un objet ! Il faut donc utiliser le premier élément de ce tableau (même syntaxe en JS qu'en PHP, Java, C#, Python...)

    * Générer le HTML contenant le nom et l'avatar du personnage des Simpsons, et le texte de la citation, à partir de l'objet à partir de l'objet récupéré,

    * afficher ce bloc HTML dans la div appropriée.

5. Commit et push

6. Dans l'onglet "Settings" de ton repo GitHub, active GitHub Pages sur la branche master.

7. Poste l'URL de la page sur GitHub Pages.

## Bonus (plutôt pour les élèves JS !)

Si tu souhaites te challenger, tu peux ajouter un bouton permettant, sur un clic, de charger une nouvelle citation, au lieu d'avoir à recharger la page (voir ou revoir la façon de gérer un clic)


## Critères de validation

* La page est accessible via GitHub Pages

* Une citation des Simpsons apparaît, avec le nom, l'avatar et le texte