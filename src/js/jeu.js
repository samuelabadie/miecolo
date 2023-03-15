
// qu'est ce qu'une variuale : c'est une valeurs qui peut changer 
// pourquoi on fait des fonctions : pour qu'un calcul marche avec des valeurs aléatoires
// comment on définit une fonciton : 
// comment on appel une fonction : en utilisant le nom qu'on lui a donné dans le script
// comment on passe un parametre à une fonction (qu'est ce qu'un parametre)
// la différence entre une addition et une concaténation 
// comment calculer la valeur absolue d'un nombre
// dans la fonction distanceRuche afficher dans une popup la distance calculée entre la postion de la ruche et celle du click


//afficher des croix quand perdu
//afficher ruche quand gagné et calculer le score = (temps max de la partie) - (temps écoulé depuis le début de la partie) et killer le timer
//ajouter un temps max de la partie (settimeOut)
//mesurer le temps + afficher (afficher score)
//envoyer le temps sur le serv ajax
//en cas de victoire: saisir ou confirmer son nom, le sauvegarder dans le cache du client et l'envoyer avec son score au serveur ajax
//récuperer le classsment ajax et l'afficher

//refaire une partie (restet timer, restet le score, reset le plateau de jeu)

//créer dynamiquement un plateau en JS

// trouver la balance nous permet d'afficher les coordonnées de la ruche 

//col = $(this).parent().children().index($(this));
var ruche = document.getElementById("ruche");
var nbCol = 8;
var nbRow = 7;
var colRuche = Math.floor(Math.random()*nbCol);
var rowRuche = Math.floor(Math.random()*nbRow);


function distanceRuche (colClick , rowClick){
    diffCol = Math.abs(colRuche - colClick);
    diffRow = Math.abs(rowRuche - rowClick);
    var res = (diffCol + diffRow);
    console.log("distance avec la ruche:" + res);
    return "la distance entre la ruche et le click est de : " + res;
}


function myFunction(element) {

  col = element.cellIndex;
  row = element.parentNode.rowIndex;
  tab = [col, row];

  console.log("distance ruche :" + distanceRuche(col,row));
  console.log("colRuche = " + colRuche +" rowRuche = "+ rowRuche); 
  console.log("coordonnées du click = " + tab);

  if(col == colRuche && row == rowRuche){
    alert('gagné');
  }else {
    alert('croix');
  }
  return tab;
}

function changeImage(img) {
  document.getElementById("img").src = img.src.replace("_t", "_b");
}

function showHive(image) {
  console.log("je montre la ruche");
  ruche.classList.remove('opacity-0');
  ruche.classList.add('opacity-100');
}

function showCross() {
  console.log("je mets une croix");
  ruche.classList.remove('opacity-0');
  ruche.classList.add('opacity-100');
}