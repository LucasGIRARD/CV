<?php
include_once 'include/SQL.php';
$title = 'CV - informaticien - analyste-développeur - Lucas Girard';
if($module != "page"){
    $content = "include/$module/index.php";
}
else {
    $content = "include/page/index.php";
}

include 'theme/default/view.php';
?>