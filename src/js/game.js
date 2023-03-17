
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
//créer du html avec JS (les arbres)

//refaire une partie (restet timer, restet le score, reset le plateau de jeu)

//créer dynamiquement un plateau en JS

// trouver la balance nous permet d'afficher les coordonnées de la ruche 

//col = $(this).parent().children().index($(this));

var nbCol = 8;
var nbRow = 7;
var colRuche = Math.floor(Math.random()*nbCol);
var rowRuche = Math.floor(Math.random()*nbRow);
var win = false;
var playing = true;

var userEmail;
var userPseudo;
var score = 3000;

function distanceRuche (colClick , rowClick){
  
  diffCol = Math.abs(colRuche - colClick);
  diffRow = Math.abs(rowRuche - rowClick);
  var res = (diffCol + diffRow);
  console.log("distance avec la ruche: " + res);
  return res;
  
}

// Set the target time for the timer
var targetTime = new Date().getTime() + (1 * 30 * 1000); // 5 minutes from now


function reloadGame(){
  location.reload();

  var loseScreen = document.getElementById("lose");
  loseScreen.classList.add("translate-y-full");
  loseScreen.classList.add("opacity-0");  
  loseScreen.classList.remove("opacity-100");
}

function updateTimerDisplay() {
  
  var currentTime = new Date().getTime();
  var remainingTime = targetTime - currentTime;
  var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  var timer = document.getElementById("timer");
  //timer.innerHTML = remainingMinutes + ":" + remainingSeconds;
  
  console.log(remainingMinutes + ":" + remainingSeconds);
  console.log(score);
  
  if(score <= 0){
    endGame(); 
  }
  
  // appel toutes les secondes
  if (remainingTime > 0 && playing == true) {
    setTimeout(updateTimerDisplay, 1000);
    score = score - 100;
  }else if (win = true){
    endGame();
  }

}

// Call the updateTimerDisplay function for the first time
if (playing = true){
  updateTimerDisplay();
}

function endGame(){
  playing = false;
  console.log("partie finie");
  var loseScreen = document.getElementById("lose");
  var winInput = document.getElementById("win-input");
  var reloadBtn = document.getElementById("reload-button");
  
  loseScreen.classList.remove("bottom-0");
  loseScreen.classList.remove("opacity-0");  
  loseScreen.classList.add("opacity-100");

  winInput.classList.remove("translate-y-full");
  winInput.classList.add("-translate-y-full");

  reloadBtn.classList.remove("opacity-0");
  reloadBtn.classList.add("opacity-100");
}




function clickCheck(element) {
  
  var distance = document.getElementById("distance-ruche");
  var dist = document.getElementById("distance");

  dist.classList.add("opacity-100");
  
  col = element.cellIndex;
  row = element.parentNode.rowIndex;
  distance.innerHTML = distanceRuche(col, row);
  
  console.log("colRuche = " + colRuche +" rowRuche = "+ rowRuche); 
  console.log("coordonnées du click : col = " + col + " row = " + row);
  
  if(col == colRuche && row == rowRuche){
    //remplacer la source de l'image par celle de la ruche
    win = true;
    console.log(win);
    console.log("la vache qui rieeeee");

    var winInput = document.getElementById("win-input");
    //lose.classList.add("top-0");

    winInput.classList.remove("translate-y-full");
    winInput.classList.remove("opacity-0");  
    winInput.classList.add("opacity-100");

  }else {
    score = score - 142;
    //mettre une croix à la place du buisson 
  }
  
}


function saveUserData(){
  userEmail = document.getElementById("input-email").value; 
  userPseudo = document.getElementById("input-pseudo").value;
  
  setLocalStorage(userEmail,userPseudo,score);
  
  var exportStorage = localStorage.getItem("userData");
  storageData = JSON.parse(exportStorage);

  reloadGame();
  
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

function readJSON(data){
  // readJSON = data => {
    // get values of (key) idbalise
    console.log("data=", data); // [Object,Object,Object]
    console.log("first idbalise=" + data[0]['email']); // 83
    console.log("first idbalise=" + data[0].email); // 83
  }

function sendDataToServer(data){
  url = "http://localhost:2000/pages/database.php?email="+data.email+"&pseudo="+data.pseudo+"&score="+data.score;
  console.log("url =", url);
  fetch(url)
  .then((response) => response.json())
  .then((d) => readJSON(d))
  .catch((error) => console.error(error));
}







