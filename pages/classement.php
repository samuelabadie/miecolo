<?php

// http://localhost:2000/pages/classement.php?email=oui@gmail.com&pseudo=yessir&score=33
// http://localhost:2000/pages/classement.php?email=coucou@gmail.com&pseudo=yessir&score=33

try {
  $db = new PDO('mysql:host=localhost;dbname=miecolo_db;charset=utf8', 'root', 'root');

  //à faire
  $request = "";

} catch (Exception $e) {
  die('Erreur : ' . $e->getMessage());
}

?>