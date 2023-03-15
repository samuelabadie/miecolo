
// qu'est ce qu'une variuale : c'est une valeurs qui peut changer 
// pourquoi on fait des fonctions : pour qu'un calcul marche avec des valeurs aléatoires
// comment on définit une fonciton : 
// comment on appel une fonction : en utilisant le nom qu'on lui a donné dans le script
// comment on passe un parametre à une fonction (qu'est ce qu'un parametre)
// la différence entre une addition et une concaténation 
// comment calculer la valeur absolue d'un nombre
// dans la fonction distanceRuche afficher dans une popup la distance calculée entre la postion de la ruche et celle du click


var ColRuche = 5;
var RowRuche = 2;


function distanceRuche (colClick , rowClick){
    // alert( ColRuche )
    colClick=colClick + 1
    //alert ("colClick="+colClick);
    //alert ("rowClick="+rowClick);
    diffCol = Math.abs(ColRuche - colClick);
    diffRow = Math.abs(RowRuche - rowClick);
    //alert (diffCol);
    //alert (diffRow);
    var res = diffCol + diffRow
    return "la distance entre la ruche et le click est de : " + res
    

    // var maPetiteVariable = 4;
    // var maValAbs = Math.abs(maPetiteVariable);
    // alert ("maPetiteVariable="+maPetiteVariable);
    // alert ("maValAbs="+maValAbs);
}

console.log(distanceRuche(10,2));

//col = $(this).parent().children().index($(this));
const ruche = document.getElementById("ruche");


function myFunction(element) {
  //alert("index col="+element.cellIndex+" et index row du parent="+element.parentNode.rowIndex );
  col = element.cellIndex;
  row = element.parentNode.rowIndex;
  tab = [col, row]; // ex: [3, 6]
  console.log("coordonnées du click : " + tab);
  return tab;
}


function m2(toto) {
  alert("index ligne="+toto.rowIndex);
}

function clickruche (ruche) {
    alert("youwin")
    appear()
}

function appear() {
    ruche.classList.add('appear');
    ruche.classList.remove('ruche');
}