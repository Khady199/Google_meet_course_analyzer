<?php

	$dsn = 'mysql:host = localhost; dbname = meet_analyzer';
	$username = 'root';
	$password = '';


	try{

		$connection = new PDO($dsn,$username,$password);
		echo 'connection reussie!';

	}catch(PDOException $e)


?>
