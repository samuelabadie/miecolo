<?php
try
{
    $db = new PDO('mysql:host=localhost;dbname=miecolo_db;charset=utf8', 
    'root', 
    'root');


    //recupération des valeurs
    $email = 'num3@gmail.com';
    $pseudo = 'pseudscvsdf';
    $score = '1030';

    //afficher les données
    $stmt = $db->query("SELECT * FROM classement");
    while ($row = $stmt->fetch()) {
    echo $row['pseudo']."    \n";
    echo $row['email']."    \n";
    echo $row['score']."<br>   \n";
    }


    //ajouter des valeurs en base de données
    $data = [
      'e' => $email,
      'p' => $pseudo,
      's' => $score,
    ];
    $sql = "INSERT INTO `classement` (`email`, `pseudo`, `score`) VALUES (:e, :p, :s);";
    $stmt= $db->prepare($sql);
    $stmt->execute($data);



    $email2 = 'jesuislemail@gmail.com';
    $score2 = '40';
    //mettre à jour le score dans la base
    $data = [
      'e' => $email2,
      's' => $score2,
    ];
    $sql = "UPDATE `classement` SET score=:s WHERE email=:e";
    $stmt= $db->prepare($sql);
    $stmt->execute($data);
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}


//INSERT INTO `classement` (`email`, `pseudo`, `score`) VALUES ('jesuislemail@gmail.com', 'Yeah', '320');
//SELECT * FROM `classement`

?>
