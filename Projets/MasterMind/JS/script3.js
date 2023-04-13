var dif = 13;
let code;
let acode;
var color;
var div = 1;
let couleur = [];
var etat;
var partie = 0;

//Charge la fonction rdmcolor au démarage de la page
window.onload = rdmcolor();

function rdmcolor() {
    // Définir les couleurs possibles pour le jeu
    const colors = ["rouge", "vert", "bleu", "orange"];
    // Générer une combinaison aléatoire de 4 couleurs
    let generateCode = () => {
        let code = [];
        for (let i = 0; i < 4; i++) {
            code.push(colors[Math.floor(Math.random() * colors.length)]);
        }
        return code;
    };
    //Renvoie le code dans une variable
    acode = generateCode();
    return acode;
}

//Permet de remplir une bulle avec la couleur bleue
function btnblue() {
    if (partie == 0) {
        document.getElementById(div + "").style.backgroundColor = "blue";
        couleur.push("bleu");
        div += 1;
        diffe();
        verif();
    }
}

//Permet de remplir une bulle avec la couleur rouge
function btnred() {
    if (partie == 0) {
        document.getElementById(div + "").style.backgroundColor = "red";
        couleur.push("rouge");
        div += 1;
        diffe();
        verif();
    }
}
//Permet de remplir une bulle avec la couleur orange
function btnorange() {
    if (partie == 0) {
        document.getElementById(div + "").style.backgroundColor = "orange";
        couleur.push("orange");
        div += 1;
        diffe();
        verif();
    }
}
//Permet de remplir une bulle avec la couleur verte
function btngreen() {
    if (partie == 0) {
        document.getElementById(div + "").style.backgroundColor = "green";
        couleur.push("vert");
        div += 1;
        diffe();
        verif();
    }
}

//La fonction renvoie la combinaison en cas de défaite
function diffe() {
    if (div == dif) {
        document.getElementById('etat').insertAdjacentHTML('afterend', '<div class="lose">Perdu la combinaison était : ' + acode +' </div> ');
        partie = 1;
    }
}
//Permet de tester les couleurs proposé avec celles chargé dans RdmColor
function isEqual(couleur, acode) {
    return couleur.every((value, index) => value === acode[index])
}

//Permet de vérifié chaque couleur, il renvoit le nombre de couleur bien placées. , en cas de victoire il renvoie un message. 
function verif() {
    if (couleur.length > 3) {
        let resultat = isEqual(couleur, acode);
        var i;
        var bon = 0;
        if (resultat == false) {
            for (let i = 0; i < couleur.length; i++) {
                if (couleur[i] == acode[i]) {
                    bon += 1;
                }

            }
            if (bon == 0) {
                etat = "Il n'y a aucune couleurs de bien placées";

            }
            else if (bon == 1) {
                etat = "Il y a une couleur bien placée";
            }
            else {
                etat = "Il y a " + bon + " couleurs bien placées";
            }
            couleur.length = 0;
            document.getElementById('etat').insertAdjacentHTML('afterend', '<div class="resul">' + etat + '</div>');
        }
        else if (resultat == true) {
            document.getElementById('etat').insertAdjacentHTML('afterend', '<div class="win">  Gagné ! Bien joué à Toi !</div> ');
            partie = 1;
        }


    }

}
//Permet de rénitialiser le jeu
function reset(){
    location.reload();
}

//Permet de renvoyer vers le menu 
function menu(){
    Header(Location('./index.html'));
}































