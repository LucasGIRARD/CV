<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
    <head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
	<meta http-equiv="Content-language" content="fr" />
	<link rel="stylesheet" media="screen" type="text/css" title="cv" href="index.css" />
        <title>CV - informaticien - analyste-développeur - Lucas Girard</title>
    </head>
    <body>
	<?php
	if (!isset($_GET['page']))
	{	
		if(ereg("MSIE ([0-9]{1,}[\.0-9]{0,})", getenv("HTTP_USER_AGENT"))) { 
		echo '<div id="error">Pour pouvoir bénéficier des meilleurs performances d\'affichage, en toutes sécurités, le créateur de ce site vous conseille d\'installer <a href="http://www.mozilla-europe.org/fr/">firefox</a> !</div>';
		}
	}
	?>
	<div id="body">
		<br />
		<div class="menu"><a href="index.php?page=accueil">Accueil</a> <a href="index.php?page=cv">C.V.</a> <a href="index.php?page=portefolio">Portefolio</a> <a href="index.php?page=telechargement">Téléchargement</a> <a href="index.php?page=contact">Contact</a> <a href="index.php?page=liens">Liens</a></div>
		
		<br />
		 <?php
    if (isset($_GET['page']) && $_GET['page'] != NULL)
	{
		if ($_GET['page'] == "accueil")
		{
			include("include/accueil.html");
		}
		elseif ($_GET['page'] == "cv")
		{
			include("include/cv/menu_cv.html");
			echo "<table class='tab0px'>";
			include("include/cv/etat_civile.php");
			echo "<br /><table class='tab1pxb'>";
			include("include/cv/formations.html");
			include("include/cv/competences_techniques.php");
			include("include/cv/experiences_professionnelles.html");
			include("include/cv/centres_interets.html");
			echo "</table>";
		}
		
		elseif ($_GET['page'] == "etat_civile" || $_GET['page'] == "etat_civiled")
		{
			include("include/cv/menu_cv.html");
			echo "<table class='tab0px'>";
			include("include/cv/etat_civile.php");
		}
		
		elseif ($_GET['page'] == "experiences_professionnelles")
		{
			include("include/cv/menu_cv.html");
			echo "<table class='tab1pxb'>";
			include("include/cv/experiences_professionnelles.html");
			echo "</table>";
		}
		
				
		elseif ($_GET['page'] == "formations")
		{
			include("include/cv/menu_cv.html");
			echo "<table class='tab1pxb'>";
			include("include/cv/formations.html");
			echo "</table>";
		}
		
		elseif ($_GET['page'] == "centres_interets")
		{
			include("include/cv/menu_cv.html");
			echo "<table class='tab1pxb'>";
			include("include/cv/centres_interets.html");
			echo "</table>";
		}
		
		elseif ($_GET['page'] == "competences_techniques" || $_GET['page'] == "competences_techniquesd")
		{
			include("include/cv/menu_cv.html");
			echo "<table class='tab1pxb'>";
			include("include/cv/competences_techniques.php");
			echo "</table>";
		}
		
		elseif ($_GET['page'] == "portefolio")
		{
			include("include/portefolio.html");
		}
		elseif ($_GET['page'] == "contact")
		{
			include("include/contact.html");
		}
		elseif ($_GET['page'] == "liens")
		{
			include("include/liens/liens.php");
		}
		elseif ($_GET['page'] == "telechargement")
		{
			include("include/telechargement.html");
		}
		elseif ($_GET['page'] == "recommandation_impression")
		{
			include("include/recommandation_impression.html");
		}
		else
		{
			include("include/accueil.html");
		}		
    }
    else
	{
		include("include/accueil.html");
	}
    ?>
	<br />
	<br />
	</div>
	<table id="bas">
		<tr>
			<td id="bas1">© 2009 Lucas Girard - Tous droits réservés.</td>
			<td>
			<a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml11-blue" alt="Valid XHTML 1.1" height="22" /></a>
			<a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;height:22px" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="CSS Valide !" /></a>
			<a href="redirection.html"><img src="images/vsxml-blue.gif" alt="Valid Sitemap XML" height="22" /></a>
			</td>
			<td id="remonter"><a href="" >remonter</a></td>
		</tr>
	</table>
    </body>
</html>