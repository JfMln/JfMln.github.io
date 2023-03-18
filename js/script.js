//Scroll animation

const revealElements = document.querySelectorAll("[data-reveal]");
const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementsOnScreen) {
      revealElements[i].classList.add("revealed")
    } else {
      revealElements[i].classList.remove("revealed")
    }
  }
}
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);


//Fonction pour les compétences:
var valeur;

function card1() {
  valeur = "1";
  desactive();
  active();
  setTimeout(function () {
    desactive();
  }, 60000);
}

function card2() {
  valeur = "2";
  desactive();
  active();
  setTimeout(function () {
    desactive();
  }, 60000);
}

function card3() {
  valeur = "3";
  desactive();
  active();
  setTimeout(function () {
    desactive();
  }, 60000);
}

function active() {
  const texte = document.getElementById("texte" + valeur);
  const face = document.getElementById("face" + valeur);
  const content = document.getElementById("content" + valeur);
  texte.style.transform = "translateY(0)";
  face.style.background = "var(--c-red)";
  face.style.transform = "translateY(0)";
  content.style.opacity = "1";
  content.style.transition = "0.5s";
}

function desactive() {
  const liste = ["1", "2", "3"];
  for (var i = 0; i < 3; i++) {
    const texte = document.getElementById("texte" + liste[i]);
    const face = document.getElementById("face" + liste[i]);
    const content = document.getElementById("content" + liste[i]);
    console.log("Valeur" + i + "effectué");
    texte.style.transform = "translateY(-100px)";
    face.style.background = "#333";
    face.style.transform = "translateY(100px)";
    content.style.opacity = "0.2";
    content.style.transition = "0.5s";
  }
}



//Bandeau

const Ap = document.getElementById('AP');
const St = document.getElementById('Stage');
const Pr = document.getElementById('Prod');




function AP() {
  valeur = "AP";
  v = "AP";
  desactiveBandeau();
  bandeau();
}

function ST() {
  valeur = "sta";
  v = "Stage";
  desactiveBandeau();
  bandeau();
}

function PR() {
  valeur = "prod";
  v = "Prod";
  desactiveBandeau();
  bandeau();
}


function bandeau() {
  document.getElementById(valeur + '-visu').style.display = "flex";
  document.getElementById(valeur + '-visu').style.transition = "all 0.5s ease";
  document.getElementById(v).style.backgroundColor = "var(--c-red)";
  document.getElementById(v).style.borderTopLeftRadius ="5px";
  document.getElementById(v).style.borderTopRightRadius ="5px";
}

function desactiveBandeau() {
  const liste2 = ["AP", "sta", "prod"];
  const vlist = ["AP", "Stage", "Prod"];
  for (var i = 0; i < 3; i++) {
    const activer = document.getElementById(liste2[i] + "-visu");
    const color = document.getElementById(vlist[i]);
    color.style.backgroundColor = "#333";
    color.style.transition = "all 0.5s ease";
    color.style.borderRadius="0";
    activer.style.display = "none";
  }
}
function lien(){
  window.open('https://saintluc.btssio.fr', '_blank');

}