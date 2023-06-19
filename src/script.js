let blurElement = false;
let index
const minigames = ["pong.webp", "shifumi.webp", "snake.webp", "tetris.webp"]
const frontOffice = ["login.webp", "produits.webp", "search.webp", "favored.webp", "cart.webp", "empty.webp"]
const BackOffice = []
function changeImgSrc(number) {
    const imgSelect = document.querySelector(".mainPic");
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
    imgSelect.src = url + imgSrc[index];
    if (url == "assets/img/games/" && index == 3) {
        imgSelect.classList.remove("wider")
        console.log("wut1")
        wider = false;
    } else if (url == "assets/img/games/" && !wider){
        imgSelect.classList.add("wider")
        console.log("wut2")
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
                            <img src="${url + imgSrc[index]}" alt="" class="mainPic">
                            <img src="assets/img/right-arrow.webp" alt="" onclick='changeImgSrc(1)'>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus dignissimos at fuga
                            voluptate accusantium. A reiciendis eos sequi incidunt!</p>
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
