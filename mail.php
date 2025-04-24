<?php
	$nom = $_POST['nom'];
	$mail = $_POST['mail'];
	
	$objet = $_POST['objet'];
	
	$entreprise = $_POST['entreprise'];
	$site = $_POST['site'];
	$message_nu = nl2br($_POST['message']);
	
	

	$headers = 'From: '.$nom.' <'.$mail.'>'."\n";
	$headers .='Reply-To: '.$mail.''."\n";
    $headers .='Content-Type: text/html; charset="iso-8859-1"'."\n";
    $headers .='Content-Transfer-Encoding: 8bit'; 

	$sujet= "[SITE INTERNET CV] : ".$objet;
		
	$message = "<html><head><title>".$sujet."</title></head><body><b>entreprise</b> : ".$entreprise."<br /><b>site internet</b> : ".$site."<br />".$message_nu."<br /><br />";

	echo $message;
	if(mail('girard.lucas1@free.fr',$sujet,$message,$headers))
	{
	  echo 'Le mail a été envoyé';
	}
	else
	{
	  echo 'Le mail n\'a pu être envoyé';
	}
	echo "<center>Redirection en cours.</center></body></html><meta http-equiv='refresh' content='5; URL=http://girard.lucas1.free.fr/'";
?> 