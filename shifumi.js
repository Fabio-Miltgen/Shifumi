
let scoreJoueur = 0, scoreRobot = 0, joueur = "", robot = "", resultat = "";
affichage();

const reset = document.querySelector(".reset");

reset.onclick = function() {

    scoreJoueur = 0, scoreRobot = 0, joueur = "", robot = "", resultat = "";
    affichage();
}

const boutons = document.querySelectorAll(".button");

for (let i = 0; i < 3; i++) {
    boutons[i].addEventListener("click", function() {
        
        
        if (i === 0) joueur = "Pierre";
            else if (i === 1) joueur = "Feuille";
                else if (i === 2) joueur = "Ciseaux";
                    

        robot = Math.floor(Math.random() * 3);
        if (robot === 0) robot = "Pierre";
            else if (robot === 1) robot = "Feuille";
                else if (robot === 2) robot = "Ciseaux";
                    
        
        

        if (joueur === robot) resultat = "Match nul";
            else if (joueur === "Pierre" && robot === "Ciseaux" ||
                joueur === "Feuille" && robot === "Pierre" ||
                joueur === "Ciseaux" && robot === "Feuille" ) {
                    resultat = "vous avez gagné";
                    scoreJoueur ++;
                } else { 
                    resultat = "vous avez perdu";
                    scoreRobot ++;
            }
        
            affichage();
        

             

    })
}

function affichage() {
        
    document.querySelector(".joueur").innerHTML = `Vous avez joué : ${joueur}`;
    document.querySelector(".robot").innerHTML = `Le Robot a joué : ${robot}`;
    document.querySelector(".scoreJoueur").innerHTML = `Votre score   : ${scoreJoueur}`;
    document.querySelector(".scoreRobot").innerHTML = `Score du Robot : ${scoreRobot}`;
    document.querySelector(".resultat").innerHTML = `Résultat : ${resultat}`;
    }
    