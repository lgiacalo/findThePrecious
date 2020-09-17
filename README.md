# [findThePrecious](https://lgiacalo.github.io/findThePrecious/)

# Integration Finale : Tome 1
## Structure findThePrecious

Le périple de findThePrecious.com s'approche de sa fin !
1. Dans ton éditeur de code préféré, crée un fichier index.html et un fichier style.css.
2. Crée le version desktop de l'application web : utilise Boostrap pour construire tes fichiers de manière à créer une page conforme à [cette maquette](http://images.innoveduc.fr//integration_parcours/css/css_bootstrap/maquette-with-annotations.png) (les components Boostrap à utiliser sont indiqués en marge à gauche de la maquette).

    NB : Le but de cette quête est uniquement de mettre en place la mise-en-page et les éléments liés à Boostrap, et non de coller au design précis de la maquette. Tu peux utiliser les images de ton choix. La partie ayant trait au rendu graphique final viendra dans une prochaine quête.
    1. Utilise le système de grille de Bootstrap de manière à ce que ta page soit responsive (affichage d'un design mobile-friendly sur les petits écrans, affichage conforme à la maquette donnée sur les écrans larges).
    2. Pour le carrousel, fais défiler 3 images.
    3. Sur les cards, utilise la pseudo-classe hover afin de créer un effet de survol pour afficher les textes Reward 1000 gold coins et Reward 250 gold coins.
    4. Héberge tes fichiers sur ton repository Github. Pour poster le résultat, utilise le service [pages](https://pages.github.com/) de Github et poste le lien vers ta version de findThePrecious.com.

---
## Critères de validation

 1. Un fichier index.html et un fichier style.css sont présents.
 2. Le code HTML passe le [validateur W3C](https://validator.w3.org/) (les warnings peuvent être tolérés du fait du caractère work in progress de la mise-en-page, mais il ne doit pas y avoir d'erreur).
 3. Bootstrap et ses dépendances sont correctement appelés (CSS et JS) via les CDN dans le fichier index.html.
 4. La mise-en-page est obtenue grâce à l'utilisation du système de grilles de Bootstrap.
 5. Le site est responsive (affichage d'un design mobile-friendly sur les petits écrans, affichage conforme à la maquette donnée sur les écrans larges).
 6. Le site intègre les bons composants de Bootstrap aux bons endroits (comme indiqué en marge sur la maquette).
 7. Le carrousel fait défiler 3 images.
 8. Les textes (Reward 1000 gold coins et Reward 250 gold coins) des cards s'affichent au survol de la souris.

---

# Preprocessueur CSS - SCSS

## Challenge

Afin de donner plus de style au site findThePrecious, Sauron veut être en mesure d'ajouter des anneaux sur ses pages.
Plein d'anneaux, des grands, des petits, avec plein de couleurs différentes !
Tu devras donc, à l'aide de SCSS, créer une mixin appelée ring qui permet de dessiner un anneau.

Cette mixin doit te permettre :

1. De choisir une taille et une couleur pour l'anneau
2. Une ombre colorée doit apparaître (en fonction de la taille et de la couleur choisie)
3. L'épaisseur de l'anneau doit être fonction de la taille choisie

Une fois cette mixin créée, réalise une simple page HTML, appelée precious.html, correspondant à l'image ci-dessous et reprenant le header (et optionnellement le footer) réalisé dans la quête intégration finale.

    Hint : Utilise une boucle for en SCSS pour afficher la succession de 6 anneaux horizontaux imbriqués, de plus en plus grands.

![drawing](img/integration_precious_scss.png)


Poste le résultat sur une page github. Tu peux reprendre et compléter ton projet findThePrecious posté lors de la quête "intégration finale", et y ajouter cette nouvelle page HTML.

---

## Critères de validation

1. Le projet contient les fichiers SCSS et les fichiers CSS compilés à partir du SCSS.
2. La page precious.html charge ce CSS et le résultat obtenu correspond à la maquette.
3. Ce code SCSS suit les bonnes pratiques (nesting, variables...)
4. Une mixin permet de dessiner facilement des anneaux.
5. Une boucle for est utilisée pour générer les 6 anneaux imbriqués.



## View Website : [findThePrecious](https://lgiacalo.github.io/findThePrecious/)
