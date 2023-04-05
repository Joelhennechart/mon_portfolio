window.onload = init;

function init() {
    // Je récupère ma balise main afin de pouvoir créer du contenu 
    // dynamiquement (sans rechargement de page) avec JS qui manipule le DOM
    var DoMain = document.getElementById('baliseMain');
    
    //
    var domP = document.createElement('p');
    domP.innerHTML = "Bienvenu sur mon portfolio!!";

    // Une fois la balise bien préparée, je la rajoute dans domMain
    domMain.appendChild(domP);
}