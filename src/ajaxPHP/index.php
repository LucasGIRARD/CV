<?php
header('Content-Security-Policy: default-src \'self\'');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('X-Frame-Options: DENY');

$allowedOrigins = ['http://cv.loc', 'https://cv.loc', 'https://lucas-girard.fr', 'https://cv.lucas-girard.fr', 'https://www.lucas-girard.fr'];

if (isset($_SERVER['HTTP_ORIGIN'])) {
    if (!in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
        header('HTTP/1.1 403 Forbidden');
        exit('Invalid request origin');
    }
}

$allowedOrigins = ['cv.loc', 'cv.lucas-girard.fr','www.lucas-girard.fr'];

if (isset($_SERVER['HTTP_REFERER'])) {
    $referer = parse_url($_SERVER['HTTP_REFERER']);
    if (!in_array($referer['host'], $allowedOrigins)) {
        header('HTTP/1.1 403 Forbidden');
        exit('Invalid referer');
    }
}


$_GET = filter_input_array(INPUT_GET, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if (!isset($_GET['a'])) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
    exit();
}

session_start();

switch ($_GET['a']) {
    case 'token':
        $_SESSION['token'] = bin2hex(random_bytes(35));
        header('Content-Type: application/json');
        echo json_encode([
            'token' => $_SESSION['token']
        ]);
        break;
    case 'sendEmail':
        $token = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        if (!$token || $token !== $_SESSION['token']) {
            header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
            exit;
        }

        if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])) {

            $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

            //check captcha
            //if ($response->isValid) {

                $sujet = '[SITE CV] ' . $_POST['subject'];

                $message = '<html>
                    <head>
                    <title>' . $sujet . '</title>
                    </head>
                    <body>
                    Nom : ' . $_POST['name'] . '<br>
                    Adresse E-mail : ' . $_POST['email'] . '<br>
                    <br>
                    Entreprise : ' . $_POST['company'] . '<br>
                    Site insternet : ' . $_POST['website'] . '<br>
                    <br>
                    Message:<br>
                    ' . $_POST['message'] . '
                    <br><br><br><br>
                    </body>
                    </html>';

                $headers = 'MIME-Version: 1.0' . "\r\n";
                $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

                if (mail("emploi@lucas-girard.fr", $sujet, $message, $headers)) {
                    $jsonArray['answer'] = 'E-mail evoyé';
                } else {
                    $jsonArray['answer'] = 'Une erreur s\'est produite';
                    $jsonArray['type'] = 'email';
                }
            // } else {
            //     $jsonArray['answer'] = 'Erreur du script anti-robot';
            //     $jsonArray['type'] = 'captcha';
            // }
        } else {
            $jsonArray['answer'] = 'Champ(s) manquant(s)';
            $jsonArray['type'] = 'field';
        }

        echo json_encode($jsonArray);
        break;
}
