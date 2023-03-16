
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
//eviter les espaces dans les champs

//refaire une partie (restet timer, restet le score, reset le plateau de jeu)

//créer dynamiquement un plateau en JS

// trouver la balance nous permet d'afficher les coordonnées de la ruche 

//col = $(this).parent().children().index($(this));

var nbCol = 8;
var nbRow = 7;
var colRuche = Math.floor(Math.random()*nbCol);
var rowRuche = Math.floor(Math.random()*nbRow);
var win = false;

var userEmail;
var userPseudo;
var score = 0;

function distanceRuche (colClick , rowClick){

  diffCol = Math.abs(colRuche - colClick);
  diffRow = Math.abs(rowRuche - rowClick);
  var res = (diffCol + diffRow);
  console.log("distance avec la ruche: " + res);
  return res;

}

function clickCheck(element) {

  var distance = document.getElementById("distance-ruche");

  col = element.cellIndex;
  row = element.parentNode.rowIndex;
  distance.innerHTML = distanceRuche(col, row);

  console.log("colRuche = " + colRuche +" rowRuche = "+ rowRuche); 
  console.log("coordonnées du click : col = " + col + " row = " + row);

  if(col == colRuche && row == rowRuche){
    //remplacer la source de l'image par celle de la ruche
    win = true;
    console.log(win);
    alert('gagné');
  }else {
    //alert('croix');
    //mettre une croix à la place du buisson 
  }

}

function saveUserData(){
  userEmail = document.getElementById("input-email").value; 
  userPseudo = document.getElementById("input-pseudo").value;

  setLocalStorage(userEmail,userPseudo,score);

  var exportStorage = localStorage.getItem("userData");
  storageData = JSON.parse(exportStorage);

  sendDataToServer(storageData);
}

function setLocalStorage(email, pseudo, score){
  var data = {
    email: email,
    pseudo: pseudo,
    score: score
  }
  var jsonData = JSON.stringify(data);
  localStorage.setItem("userData", jsonData);
}


function sendDataToServer(data){
  // readJSON = data => {
    var email = data.email;
    var pseudo = data.pseudo;
    var score = data.score;
    console.log("data=" + email);
    url = "http://localhost:2000/pages/classement.php?email="+email+"&pseudo="+pseudo+"&score="+score;
    console.log("url =", url);
    fetch(url)
    .then((response) => response.json())
    .then((d) => readJSON(d))
    .catch((error) => console.error(error));
  }
  





