<?php

    // on se connecte à notre base
    $servername ="localhost";
    $database = "Google_Analyser";
    $username = "root";
    $password = "passer";

    $conn = mysqli_connect($servername, $username, $password, $database);
    // check connection
    if (!$conn) {
        die("Échec de la connexion : " . mysqli_connect_error());
    }
   
    echo "Connexion réussie";
   
    $sql = "INSERT INTO Evaluation (idEtudiant, idSeance, NoteEvaluation) VALUES("1111", "1222", "20")";
    if (mysqli_query($conn, $sql)) {
        echo "Nouveau enregistrement créé avec succès";
    } else {
        echo "Erreur : " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>