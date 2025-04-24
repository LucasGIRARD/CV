<?php

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['object']) && !empty($_POST['message'])) {
    require_once('../phpLib/picatchalib.php');

    $response = picatcha_check_answer("MGPsiFlwKMWIRCKLgvWWy-DU7pBhX7nmz6Uq_M_g", $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT'], $_POST['picatcha']['token'], $_POST['picatcha']['r']);

    if ($response->isValid) {


        $sujet = '[SITE CV] ' . $_POST['object'];



        $message = '<html>
      <head>
       <title>' . $sujet . '</title>
      </head>
      <body>
       Nom : ' . $_POST['name'] . '
       Adresse E-mail : ' . $_POST['email'] . '
       <br />
       Entreprise : ' . $_POST['company'] . '
       Site insternet : ' . $_POST['website'] . '
       <br />
       Message:
       <br />
       ' . $_POST['message'] . '
      </body>
     </html>';

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        if (mail("girard.lucas1@gmail.com", $sujet, $message, $headers)) {
            $jsonArray['answer'] = 'ok';
        } else {
            $jsonArray['answer'] = 'error';
            $jsonArray['type'] = 'email';
        }
    } else {
        $jsonArray['answer'] = 'error';
        $jsonArray['type'] = 'captcha';
    }
} else {
    $jsonArray['answer'] = 'error';
    $jsonArray['type'] = 'field';
}

echo json_encode($jsonArray);
?>