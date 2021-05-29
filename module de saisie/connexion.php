<?php

    $user = 'root';
    $password = '';

    try
    {

        $db = new PDO ('mysql:host=localhost;dbname=meet_analyzer', $user, $password);

        foreach($db->query('select * from Etudiant') as $nbreEtud)
        {
            print_r($nbreEtud);
        }
    }

    catch(PDOException $e)
    {
        print " Error:" . $e->getMessage() . "<br/>";
        die;
    }


?>