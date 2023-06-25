let blurElement = false;
let index
const minigames = [
    {
        src: "pong.webp",
        text: "<h3>Pong</h3>",
        /*
        text: "<b>(Pong)</b> <br> Une fonction récursive est appelé pour lancer le déplacement de la balle et requestAnimationFrame est utilisé pour animer celle-ci. Le déplacement de la balle se fait en vérifiant si la balle doit se déplacer gauche / droite / haut / bas, sa position X/Y sont par la suite incrémentés en fonction. Lorsque la balle rentre en contact avec l'une des raquettes ou l'une des bordures ses directions X/Y sont modifier (si la balle touche le haut de l'écran celle-ci va rebondir vers le bas , etc ). <br> Le déplacement des raquettes se fait lui en appuyant sur des touches prédéterminé ( Z/S - ↑/↓ ), cela modifie directement la position de celles-ci en. Lorsque la balle sort de l'écran, c'est considéré comme un but, le score du joueur ayant marqué augmente de 1 ( ou plus en fonction de l'avancement de la partie ), une animation est lancée et les éléments retourne à leur position de départ.",
        */
        url: ""
    },
    {
        src: "tictac.webp",
        text: `
        <h4>Tic Tac Toe</h4>
        <p></p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>JavaScript</li>
            <li>html</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>Vérifier si l'un des joueurs a fait une ligne avec 3 cases possédant le même symbole sans écrire toutes les conditions à la mains.</p>
        <h5>Solution</h5>
        <p>Créez deux boucles pour vérifier </p>
        
        `,
        text: "<b>(Tic Tac Toe)</b><br>Lorsque l'une des cases est cliqués le contenu de celle-ci est vérifier, si elle est vide un symbole ( X / O ) apparait pour indiquer qu'elle est occupé par l'un des joueurs, si la case est occupé une alerte se lance est affiche un message indiquant que celle-ci est déjà occupé. Un booléen est utilisé pour faire joueur les joueurs de façon alterner. Le plateau est vérifié après que chaque joueur ai joué, la vérification est constitue d'une boucle qui vérifie les rangés et les diagonales pour voir si trois même symboles sont alignées, si c'est le cas alors que le joueur correspondant voit son socre augmenté de 1 et le plateau de jeu est réinitialisé.",
        url: ""
    },
    {
        src: "snake.webp",
        text: `
        <h4>Snake</h4>
        <p>Ce jeux a était codé en utilisant un tableau à deux dimensions pour gérer le plateau, les élèments dessus et les déplacements.</p>
        <h5>Techno utilisées</h5>
        <ul>
            <li>JavaScript</li>
            <li>html</li>
            <li>CSS</li>
        </ul>
        <h5>Une problématique</h5>
        <p>La création du plateau était une problématique intéressante, au départ j'ai essayé de positionner les éléments en leur donnant une position absolue mais mais il y avait quelque soucis avec cette méthode.</p>
        <h5>Solution</h5>
        <p>La solution était d'utiliser un tableau à deux dimensions ( représentant un plateau ) pour avoir déjà chaque éléments placés et il restait just à les afficher.</p>
        `,
        url: ""
    },
    {
        src: "tetris1.png",
        text: "<b>(Tetris)</b><br>Le plateau est crée à partir d'un tableau à deux dimensions. Chaque nouvelle pièce apparait en haut du plateau et on chacune des parties différentes selon les pièces dont elle font parties, Il y a aussi une couleur associé à chaque pièces. Pour que les pièces descende leur position en Y est modifié à chaque animation. Les pièces descende automatiquement jusqu'a ce qu'elles rencontrent un obstacle (autre pièce ou bas du plateau). Une vérification est effectué après chaque déplacement pour voir si une ligne est complète si c'est le cas elle disparait ou si une pièce atteint le sommet de l'écran la partie s'arrête. Les pièces peuvent être tourné en appuyant sur ← →.",
        url: ""
    }]
const frontOffice = [
    {
        src: "login.webp",
        text: "La partie connexion du projet à était faite en créant un formulaire, une fois celui-ci validé une requête Axios va être éxecuter. Cela va envoyer les données à l'api servant de relation entre le front et black et  va faire appel à une méthode qui va vérifier si l'utilisateur à bien envoyé des données (avec isset pour vérfier si les champs ne sont pas vides et trim() pour enlever les possibles espaces en début et fin d'input.<br>  Une requête est ensuite faite avec SQL cherchant si il y a un utilisateur ayant un mail correspondant à celui entrée par l'utilisateur. Si oui alors le mot de passe envoyé par l'utilisateur est comparé avec celui de la base de donnée avec password_verify, si c'est le cas alors la connexion ce fait, les informations telles que le nom / prenom /solde de l'utilisateur sont stocké en localstorage pour les afficher sur le site et l'utilisateur est redirigé sur une autre page. Dans le cas ou les informations sont incorrectes il est renvoyé sur le formulaire de connexion.",
        url: ""
    },
    {
        src: "produits.webp",
        text: "Pour cette partie, une requête à l'API est faite demandant la liste des produits et leurs informations est faite en arrivant sur la page. Une fois celle-ci obtenu, les produits sont filtrer et gardant uniquement sont ayant un stock supérieur à 0. Une boucle est ensuite exécuté sur le tableau contenant les produits triés pour crée un article avec leurs informations ( ici l'image du produit, le nom, le prix, une étoile selon si l'utilisateur a mit le produits en favoris). Les produits sont placés en utilisant grid.",
        url: ""
    },
    {
        src: "search.webp",
        text: "La barre de recherche fait un tri sur la liste des produits disponibles en fonction des inputs de l'utilisateur. Grâce à vue.js l'affichage des produits se fait dynamiquement car la boucle générant les produits se base sur la même référence.",
        url: ""
    },
    {
        src: "favored.webp",
        text: "Au chargement de la page l'id de l'utilisateur est utilisé pour faire une requête SQL au back, comportant une jointure entre la table favoris et celle utilisateur pour récupérer seulement les produits en favoris pour l'utilisateur en question. Une fois récupéré le tableau est encodé avec json est renvoyé au front. Une boucle est ensuite utilisée sur le tableau d'objet qui a était reçu pour générer les articles en utilisant les propriétés de chaque objet ( image / nom / prix / favoris ).",
        url: ""
    },
    {
        src: "cart.webp",
        text: "J'ai fait un cart pour le site en utilisant pinia. Au moment de cliquer sur un produits dans la liste celui-ci sera ajouter à un tableau d'objet crée par piñia pour l'afficher sur une page dédié. Dans la page du cart une boucle est faite sur le cart et celle-ci crée un article avec les propriétés de chaque objet ( image / nom / prix / favoris )",
        url: ""
    },
    {
        src: "empty.webp",
        text: "La page affichant le cart pouvant être accéder même lorsque celui-ci est vide, une image indiquant que le cart est vide est donc affichée pour l'indiquer à l'utilisateur.",
        url: ""
    }
]
const BackOffice = []
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
    if (url == "assets/img/games/" && index == 3) {
        imgSelect.classList.remove("wider")
        imgSelect.classList.add("tetris")
        wider = false;
    } else if (url == "assets/img/games/" && !wider) {
        imgSelect.classList.add("wider")
        if (imgSelect.classList.contains('tetris')) {
            imgSelect.classList.remove("tetris")
        }
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
            const buttonClose = document.querySelector(".close")
            buttonClose.addEventListener("click", () => {
                if (blurElement) {
                    const enlargedElement = document.querySelector(".blur")
                    enlargedElement.remove();
                    blurElement = !blurElement;
                }
            })
        }
    });
})

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

        setTimeout(() => {
            console.log(asideSelect.offsetLeft)
        }, timeout);
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