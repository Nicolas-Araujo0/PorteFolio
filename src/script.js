let blurElement = false;
let index
const minigames = [
    {
        src: "tictac.webp",
        text: `
        <h4>Tic Tac Toe</h4>
        <p>Il s'agit d'un jeu crée lors d'une semaine de compréhension du Javascript. Ma version contient une IA et une aide aux joueurs.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Vérifier si l'un des joueurs a fait une ligne avec 3 cases possédant le même symbole sans écrire toutes les conditions à la mains.</p>
        <h5>Solution</h5>
        <p>Créez deux boucles, une vérifiant les lignes et l'autres les colonnes en les incrémentants différament pour que chacune gère leur cas.</p>
        <nav>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/Tic-tac-toe' target='_blank'>https://github.com/Nicolas-Araujo0/Tic-tac-toe</a></span>
        <span>Projet: <a href='https://nicolas-araujo0.github.io/Tic-tac-toe/' target='_blank'>https://nicolas-araujo0.github.io/Tic-tac-toe/</a></span>
        </nav>
        `
    },
    {
        src: "snake.webp",
        text: `
        <h4>Snake</h4>
        <p>Ce jeu a été codé en utilisant un tableau à deux dimensions pour gérer le plateau, les élèments dessus et les déplacements.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>La création du plateau était une problématique intéressante, au départ j'ai essayé de positionner les éléments en leur donnant une position absolue mais mais il y avait quelque soucis avec cette méthode.</p>
        <h5>Solution</h5>
        <p>La solution était d'utiliser un tableau à deux dimensions ( représentant un plateau ) pour avoir déjà chaque éléments placés et il restait just à les afficher.</p>
        <nav>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/Snake-projet-6-' target='_blank'>https://github.com/Nicolas-Araujo0/Snake-projet-6-</a></span>
        <span>Projet: <a href='https://nicolas-araujo0.github.io/Snake-projet-6-/' target='_blank'>https://nicolas-araujo0.github.io/Snake-projet-6-/</a></span>
        </nav>
        `,
    },
    {
        src: "tetris1.png",
        text: `
        <h4>Tetris</h4>
        <p>Il s'agit d'un jeu crée lors d'une semaine de compréhension du Javascript. C'est une version basique du jeu.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Faire en sorte de vérifier si une ligne est complète et faire descendre toutes les pièces se trouvant au dessus de celle-ci.</p>
        <h5>Solution</h5>
        <p>J'ai créé deux boucles que j'ai imbriqué, une pour vérifier chaque colonne et une autre pour vérifier chaque ligne. Si le contenu d'une case n'est pas vide alors j'incrémente une variable,elle est remise à 0 à chaque nouvelle ligne, si elle atteint 10 alors ça veut dire que la rangée est complète je peux donc utiliser l'index de la boucle qui vérifie les colonnes pour savoir laquelle je dois supprimer.</p>
        <nav>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/Tetris' target='_blank'>https://github.com/Nicolas-Araujo0/Tetris</a></span>
        <span>Projet: <a href='https://nicolas-araujo0.github.io/Tetris/' target='_blank'>https://nicolas-araujo0.github.io/Tetris/</a></span>
        </nav>`
    }
]
const frontOffice = [
    {
        src: "login.webp",
        text: `
        <h4>Connexion</h4>
        <p>Il s'agit de la page de connexion designer en mobile first permettant à des employés d'acheter divers snacks.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>npm</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Faire la liaison entre le front et le back en envoyant les données de connexion.</p>
        <h5>Solution</h5>
        <p>Utiliser <b>Axios</b> depuis Vue.js pour l'envoi du formulaire de connexion du front au back, en lui passant comme argument l'adresse à utiliser et le contenu du formulaire. En fonction de la réponse récupéré l'utilisateur sera redirigé sur la page suivante ou non.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/OnlineSnacks' target='_blank'>https://github.com/Nicolas-Araujo0/OnlineSnacks</a></span>
        `,
        url: "",
        urlG: ""
    },
    {
        src: "produits.webp",
        text: `
        <h4>Liste des produits</h4>
        <p>Cette page concerne la liste des produits disponibles à l'achat par l'utilisateur, ils sont regroupés par genres.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>npm</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Afficher les produits en fonctions de leur catégories sans avoir de doublon.</p>
        <h5>Solution</h5>
        <p>Créer une boucle créant chaque catégorie et une seconde boucle imbriqué créant les différents articles de cette catégorie. Une fonction nécessitant l'une des catégorie de produits en paramètres est utilisé pour retourner la liste des articles filtrées par la fonction filter de Javascript selon la catégorie. Par la suite seuls les produits appartenant à cette catégorie sont dans la liste et sont donc crées côté utilisateur.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/OnlineSnacks' target='_blank'>https://github.com/Nicolas-Araujo0/OnlineSnacks</a></span>
        `,
        url: ""
    },
    {
        src: "favored.webp",
        text: `
        <h4>Favoris</h4>
        <p>Cette page à pour but d'afficher les produits que l'utilisateur à mis en favoris.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>npm</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Permettre à l'utilisateur d'ajouter et de retirer les produits en favoris sans recharger la page.</p>
        <h5>Solution</h5>
        <p>Grâce à Vue.js, on peut définir une règle vérifiant si une propriété vaut une certaine valeur. L'image utilisé pour montrer si le produit est en favoris ou non est donc changé en fonction de la propriété fav de chaque produit. Une requête est ensuite faite en base de donnée pour soit enlever ou ajouter un certain produit en fonction de l'état de base.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/OnlineSnacks' target='_blank'>https://github.com/Nicolas-Araujo0/OnlineSnacks</a></span>
        `,
        url: ""
    },
    {
        src: "cart.webp",
        text: `
        <h4>Panier</h4>
        <p>Il s'agit de la page affichant le panier de l'utilisateur.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>npm</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Garder en 'mémoire' les différents produits que l'utilisateur veut acheter pour les afficher sur la page comportant le panier.</p>
        <h5>Solution</h5>
        <p>Utilisation de Piñia pour créer un 'store' qu'il suffit d'importer sur chaque page pour les lier entre elles. J'ai ensuite crée une fonction pour ajouter un produit dans une variable contenant un tableau avec la fonction push de Javascript. Je peux par la suite récupérer les données de cette variable sur la page gérant l'affichage du panier. Si le panier est vide alors une image indiquant un panier vide pour prévenir l'utilisateur sera chargée.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/OnlineSnacks' target='_blank'>https://github.com/Nicolas-Araujo0/OnlineSnacks</a></span>
        `,
        url: ""
    },
    {
        src: "empty.webp",
        text: `
        <h4>Panier vide</h4>
        <p>Il s'agit de la page affichant le panier de l'utilisateur.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>npm</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Garder en 'mémoire' les différents produits que l'utilisateur veut acheter pour les afficher sur la page comportant le panier.</p>
        <h5>Solution</h5>
        <p>Utilisation de Piñia pour créer un 'store' qu'il suffit d'importer sur chaque page pour les lier entre elles. J'ai ensuite crée une fonction pour ajouter un produit dans une variable contenant un tableau avec la fonction push de Javascript. Je peux par la suite récupérer les données de cette variable sur la page gérant l'affichage du panier. Si le panier est vide alors une image indiquant un panier vide pour prévenir l'utilisateur sera chargée.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/OnlineSnacks' target='_blank'>https://github.com/Nicolas-Araujo0/OnlineSnacks</a></span>
        `,
        url: ""
    }
]
const BackOffice = [
    {
        src: "user.webp",
        text: `
        <h4>Utilisateurs</h4>
        <p>Il s'agit de la page affichant les divers utilisateurs enregistrés en base de donnés.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>PHP</li>
            <li>Twig</li>
            <li>Javascript</li>
            <li>CSS</li>
        </ul>
        <h5>Récapitulatif</h5>
        <p>En arrivant sur cet URL une requête SQL est faite pour récupérer la liste des utilisateurs, celle-ci est passé en argument à un méthode en utilisant twig, cela permet ensuite de charger la vue correspondante et d'afficher le contenu passé en argument ici les différents utilisateurs.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/projetMVC' target='_blank'>https://github.com/Nicolas-Araujo0/projetMVC</a></span>
        `
    },
    {
        src: "userModify.webp",
        text: `
        <h4>Modification de l'utilisateur</h4>
        <p>En cliquant sur l'une des propriétés d'un des utilisateurs celle-ci peut être modifier.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>PHP</li>
            <li>Twig</li>
            <li>Javascript</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Permettre la modification d'un seul champ de l'utilisateur, en évitant d'envoyer des données qui ne seront pas modifiées.</p>
        <h5>Solution</h5>
        <p>Lorsqu'un champ est cliqué, le contenu de l'input devient modifiable et un boutton permettant de valider apparaît. En utilisant des dataset on peut stocker certaines données voulu sur chaque input, ici l'id et l'utiliser dans une requête pour demander a modifier spécifiquement le chan pour l'utilisateur ciblé.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/projetMVC' target='_blank'>https://github.com/Nicolas-Araujo0/projetMVC</a></span>
        `
    },
    {
        src: "addUser.webp",
        text: `
        <h4>Ajouter un utilisateur</h4>
        <p>Cette page permet d'ajouter un utilisateur avec les informations nécessaires pour celui-ci.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>PHP</li>
            <li>Twig</li>
            <li>Javascript</li>
            <li>CSS</li>
        </ul>
        <h5>Récapitulatif</h5>
        <p>Un formulaire comportant divers input est utilisés, quand le boutton "Ajouter utilisateur" est cliqué le formulaire est envoyé à une certaine URL, ceci-déclenche une méthode préparant une requête SQL créant un nouvel utilisateur en base de données en utilisant les informations récupérées sur les divers champs. Une notification est envoyée en fonction de si l'ajout a réussi ou non.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/projetMVC' target='_blank'>https://github.com/Nicolas-Araujo0/projetMVC</a></span>
        `
    },
    {
        src: "restock.webp",
        text: `
        <h4>Restockage</h4>
        <p>Cette page permet de restocker les produits disponibles en base de donnée.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>PHP</li>
            <li>Twig</li>
            <li>Javascript</li>
            <li>CSS</li>
        </ul>
        <h5>Récapitulatif</h5>
        <p>Deux selecteurs sont disponibles, un pour choisir un produit, l'autre pour choisir la quanité à restocker. Une fois le boutton "Restocker" cliqué une requête, l'utilisateur est envoyé sur l'URL gérant le restock, cela prépare une requête SQL prenant en paramètre l'id du produit choisi, la quantité a restocker et cela est mis à jour en base de donnée.</p>
        <span>Github: <a href='https://github.com/Nicolas-Araujo0/projetMVC' target='_blank'>https://github.com/Nicolas-Araujo0/projetMVC</a></span>
        `
    }
]

function changeImgSrc(number) {
    const imgSelect = document.querySelector(".mainPic");
    const textContent = document.querySelector(".textContent")
    if (number == 1) {
        if (index >= imgSrc.length - 1) {
            index = 0;
        } else {
            index++;
        }
    } else if (number == 2) {
        if (index <= 0) {
            index = imgSrc.length - 1;
        } else {
            index--
        }
    }
    imgSelect.src = url + imgSrc[index].src;
    textContent.innerHTML = imgSrc[index].text;
    if (url == "assets/img/games/" && index == 2) {
        imgSelect.classList.remove("wider")
        imgSelect.classList.add("tetris")
        wider = false;
    } else if (url == "assets/img/games/" && !wider) {
        imgSelect.classList.add("wider")
        if (imgSelect.classList.contains('tetris')) {
            imgSelect.classList.remove("tetris")
        }
    }
    let back = document.querySelector(".back")
    if (url == "assets/img/back/") {
        imgSelect.classList.add("back")
        console.log("hey")
    } else if (back) {
        imgSelect.classList.remove("back")
    }
}
let url;
let imgSrc;
let wider;
const mainSelect = document.querySelector("#main");
const clickedElement = document.querySelectorAll("#main-projectsDone article")
clickedElement.forEach((element) => {
    element.addEventListener("click", event => {
        if (!blurElement) {
            wider = false
            let projectTargeted = element.className;
            if (projectTargeted == "projet1") {
                imgSrc = minigames;
                url = "assets/img/games/";
                wider = true
            } else if (projectTargeted == "projet2") {
                imgSrc = frontOffice;
                url = "assets/img/front/";
            } else {
                imgSrc = BackOffice;
                url = "assets/img/back/";
            }
            index = 0
            let newDiv = document.createElement("div");
            newDiv.classList.add("blur")
            newDiv.addEventListener("click", (event) => {
                if (event.target.className == "blur") {
                    removeBlur()
                }
            })
            newDiv.innerHTML = `
            <div class="blur-projRecap">
                <div>
                    <h3>Projet</h3>
                    <button class="close">X</button>
                </div>
                <div>
                    <div class="img">
                        <img src="assets/img/left-arrow.webp" alt="" onclick='changeImgSrc(2)'>
                        <img src="${url + imgSrc[index].src}" alt="" class="mainPic">
                        <img src="assets/img/right-arrow.webp" alt="" onclick='changeImgSrc(1)'>
                    </div>
                    <div class='textContent'>${imgSrc[index].text}</div>
                </div>
            </div>`;
            mainSelect.append(newDiv)
            blurElement = !blurElement;
            if (wider) {
                document.querySelector(".mainPic").classList.add("wider");
            }
            if (url == "assets/img/back/") {
                document.querySelector(".mainPic").classList.add("back")
                console.log("hey")
            }
            const buttonClose = document.querySelector(".close")
            buttonClose.addEventListener("click", () => {
                if (blurElement) {
                    removeBlur()
                }
            })
        }
    });
})


function removeBlur(){
    const enlargedElement = document.querySelector(".blur")
    enlargedElement.remove();
    blurElement = !blurElement;
}
let btnMenu = document.querySelector(".menuToggle")
btnMenu.addEventListener("click", () => {
    const asideSelect = document.querySelector("aside")
    let timeout = 1000;

    if (!blurElement) {
        let slideR = document.querySelector(".slideRight")
        if (slideR) {
            asideSelect.classList.remove("slideRight")
        }
        const main = document.querySelector("main")
        const blur = document.createElement("div")
        blur.classList.add("blur");
        main.append(blur)
        blurElement = true
        asideSelect.style.display = "block"
        asideSelect.classList.add("slideLeft")
    } else {
        let slideL = document.querySelector(".slideLeft")
        if (slideL) {
            asideSelect.classList.remove("slideLeft")
        }
        blurElement = !blurElement
        let blurSelect = document.querySelector(".blur")
        blurSelect.remove()
        asideSelect.classList.add("slideRight")
        setTimeout(() => {
            asideSelect.style.display = "none"
        }, timeout);
    }
})


/*
let blurSelect = document.querySelector(".blur")
if
blurSelect.addEventListener("click",(event)=>{
    console.log(event)
})
*/