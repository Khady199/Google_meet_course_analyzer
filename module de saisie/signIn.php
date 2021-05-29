<?php
    if(isset($_POST["signIn"])){
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $mailAdress = $_POST["mailAdress"];
        $password = sha1($_POST["password"]);
        $con=mysqli_connect("localhost:3308", "root", "", "googlemeet");
        $insertRequest = "INSERT INTO Prof (nom_prof , prenom_prof , email , password) VALUES ('".$firstName."' , '".$lastName."' , '".$mailAdress."' , '".$password."');";
        if (mysqli_query($con,$insertRequest))
        echo "zell";
        else
        echo "woll";
    }else
    echo "coucou";
?>