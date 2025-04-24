- <a href="index.php?page=liens&amp;categorie=all">tout déplier</a> + <a href="index.php?page=liens">tout replier</a>
<?php 
if (isset($_GET['categorie']) && $_GET['categorie'] != NULL)
{


	if ($_GET['categorie'] == "logiciels_libre" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>LOGICIEL LIBRE</a></h3><hr/>";
		include("include/liens/logiciels_libre.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=logiciels_libre'>LOGICIEL LIBRE</a></h3><hr/>";
	}
	
	
	if ($_GET['categorie'] == "autres" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>AUTRES</a></h3><hr/>";
		include("include/liens/autres.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=autres'>AUTRES</a></h3><hr/>";
	}
	
	
	if ($_GET['categorie'] == "blogs" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>BLOGS</a></h3><hr/>";
		include("include/liens/blogs.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=blogs'>BLOGS</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "standard" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>STANDARD / VALIDATION</a></h3><hr/>";
		include("include/liens/standard.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=standard'>STANDARD / VALIDATION</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "general" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>GENERAL</a></h3><hr/>";
		include("include/liens/general.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=general'>GENERAL</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "html" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>HTML</a></h3><hr/>";
		include("include/liens/html.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=html'>HTML</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "php" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>PHP</a></h3><hr/>";
		include("include/liens/php.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=php'>PHP</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "javascript" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>JAVASCRIPT</a></h3><hr/>";
		include("include/liens/javascript.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=javascript'>JAVASCRIPT</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "linux" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>LINUX</a></h3><hr/>";
		include("include/liens/linux.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=linux'>LINUX</a></h3><hr/>";
	}
	
	if ($_GET['categorie'] == "graphisme" || $_GET['categorie'] == "all")
	{
		echo "<h3>- <a href='index.php?page=liens'>GRAPHISME</a></h3><hr/>";
		include("include/liens/graphisme.html");
	}
	else
	{
		echo "<h3>+ <a href='index.php?page=liens&amp;categorie=graphisme'>GRAPHISME</a></h3><hr/>";
	}
	


	
}
else
{
?>

<h3>+ <a href="index.php?page=liens&amp;categorie=logiciels_libre">LOGICIEL LIBRE</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=autres">AUTRES</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=blogs">BLOGS</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=standard">STANDARD / VALIDATION</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=general">GENERAL</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=html">HTML</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=php">PHP</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=javascript">JAVASCRIPT</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=linux">LINUX</a></h3><hr/>

<h3>+ <a href="index.php?page=liens&amp;categorie=graphisme">GRAPHISME</a></h3><hr/>

<?php
}

?>