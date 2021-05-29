<?php

	$dsn = 'mysql:host = localhost; dbname = googleanalyzer';
	$username = 'root';
	$password = '';


	try{

		$connection = new PDO($dsn,$username,$password);
		echo 'connection reussie!';

	}catch(PDOException $e)


?>