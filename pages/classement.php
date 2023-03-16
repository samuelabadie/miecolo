<?php
try {
  $db = new PDO('mysql:host=localhost;dbname=miecolo_db;charset=utf8', 'root', 'root');

  $email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);
  $pseudo = filter_input(INPUT_GET, 'pseudo', FILTER_SANITIZE_STRING);
  $score = filter_input(INPUT_GET, 'score', FILTER_SANITIZE_NUMBER_INT);

  //recupération des valeurs

  //afficher les données
  $stmt = $db->query("SELECT * FROM classement");
  while ($row = $stmt->fetch()) {
    if ($row['email'] == $email){ //le mail existe en base ?
      echo("le mail existe en base");
      if ($row['score'] < $score){
        $data = [
           'e' => $email,
           's' => $score,
        ];
        $sql = "UPDATE `classement` SET score=:s WHERE email=:e";
        $stmt= $db->prepare($sql);
        $stmt->execute($data);
      }
    }
    echo $row['email']."    \n";
    echo $row['pseudo']."    \n";
    echo $row['score']."<br>   \n";
  } // end of while loop

  //ajouter des valeurs en base de données

  $data = [
    'e' => $email,
    'p' => $pseudo,
    's' => $score,
  ];

  $sql = "INSERT INTO `classement` (`email`, `pseudo`, `score`) VALUES (:e, :p, :s);";
  $stmt= $db->prepare($sql);
  $stmt->execute($data);

  //mettre à jour le score dans la base
  $data = [
    // 'e' => $email2,
    // 's' => $score2,
  ];
} catch (Exception $e) {
  die('Erreur : ' . $e->getMessage());
}
?>
