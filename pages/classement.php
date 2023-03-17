<?php

// http://localhost:2000/pages/classement.php?email=oui@gmail.com&pseudo=yessir&score=33
// http://localhost:2000/pages/classement.php?email=coucou@gmail.com&pseudo=yessir&score=33

try {
  $db = new PDO('mysql:host=localhost;dbname=miecolo_db;charset=utf8', 'root', 'root');


  $request = "SELECT pseudo, score FROM classement ORDER BY score DESC";
  $stmt = $db->query($request);

  $started = false;
  $json_str = '{ scoreboard : [';
  while ($row = $stmt->fetch()) {
    if ($started == true)
    {
      $json_str .= ",";
    }else
    {
      $started = true;
    }
    $json_str .= '{"pseudo" : ';
    $json_str .= "'".$row['pseudo']."', ";

    $json_str .= '"score" : ';
    $json_str .= "".$row['score']."} ";
  }
  $json_str .= "] }";
  
  echo $json_str;


} catch (Exception $e) {
  die('Erreur : ' . $e->getMessage());
}

?>


