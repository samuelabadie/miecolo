<?php


// http://localhost:2000/pages/classement.php?email=oui@gmail.com&pseudo=yessir&score=33
// http://localhost:2000/pages/classement.php?email=coucou@gmail.com&pseudo=yessir&score=33

try {
  $db = new PDO('mysql:host=localhost;dbname=miecolo_db;charset=utf8', 'root', 'root');

  //on récupère les valeurs
  $email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);
  $pseudo = filter_input(INPUT_GET, 'pseudo', FILTER_SANITIZE_STRING);
  $score = filter_input(INPUT_GET, 'score', FILTER_SANITIZE_NUMBER_INT);

  //afficher les données
  // $stmt = $db->query("SELECT * FROM classement ");
  $classmentRequest = "SELECT * FROM classement";
  $emailRequest = "SELECT * FROM classement WHERE email ='".$email."'";
  $createRequest = "INSERT INTO `classement` (`email`, `pseudo`, `score`) VALUES ('".$email."', '".$pseudo."', '".$score."')";
  
  $found = false;
  $stmt = $db->query($classmentRequest);
  // while ($row = $stmt->fetch()) {
  //   echo $row['email']."    \n";
  //   echo $row['pseudo']."    \n";
  //   echo $row['score']."<br>   \n";
  // }

  $stmt = $db->query($emailRequest);
  $userData = $stmt->fetch();
  $previewScore = $userData['score'];
  
  // si le score de l'utilisateur est supérieur à celui dans la base alors MAJ du score
  if ($stmt->rowCount() == 1 && $previewScore < $score){
    $updateRequest = "UPDATE classement SET score = REPLACE(score, ".$previewScore.", ".$score.") WHERE email = '".$email."'";
    $stmt = $db->query($updateRequest);

  }elseif ($stmt->rowCount() == 0){
    
    echo('deux petits noirs ça fait un blanc');
    $stmt = $db->query($createRequest);
  }
  //ajouter des valeurs en base de données



  //RETOURNE LE CLASSEMENT EN JSON
  $request = "SELECT pseudo, score FROM classement ORDER BY score DESC";
  $stmt = $db->query($request);

  header("Content-Type: application/json");

  // sortie formatée en json à la main
  $started = false;
  $json_str = '[';
  while ($row = $stmt->fetch()) {
    if ($started == true)
    {
      $json_str .= ",";
    }else
    {
      $started = true;
    }
    $json_str .= '{"pseudo":';
    $json_str .= "\"".$row['pseudo']."\",";

    $json_str .= '"score":';
    $json_str .= "\"".$row['score']."\"}";
  }
  $json_str .= "]";
  echo $json_str;

  // ou
  // echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));

} catch (Exception $e) {
  die('Erreur : ' . $e->getMessage());
}


// if ($row['email'] == $email){ //le mail existe en base ?
//       echo("le mail existe en base");
//       if ($row['score'] < $score){
//         $data = [
//            'e' => $email,
//            's' => $score,
//         ];
//         $sql = "UPDATE `classement` SET score=:s WHERE email=:e";
//         $stmt= $db->prepare($sql);
//         $stmt->execute($data);
//       }
//     }

?>