<?php

include 'conf_general.php';

include 'conf_competences.php';
include 'conf_experiences.php';
include 'conf_formations.php';
include 'conf_projects.php';

include 'conf_books.php';
include 'conf_rss.php';
include 'conf_yt.php';

ob_start();
?>
<!DOCTYPE HTML>
<html lang="fr">

<head>
    <title>C.V. de Lucas Girard - Développeur Web - Chef de projets</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="C.V. de Lucas Girard - analyste-développeur - chef de projet">
    <meta name="keywords" content="CV, Lucas Girard, analyste-développeur, chef de projets">
    <meta name="author" content="Lucas Girard">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="google" content="notranslate">
    <meta name="theme-color" content="#ffffff">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <?php foreach ($appleIconSizes as $size): ?>
        <link rel="apple-touch-icon" sizes="<?= htmlspecialchars($size) ?>" href="images/apple-touch-icon-<?= htmlspecialchars($size) ?>.png">
    <?php endforeach; ?>

    <link rel="stylesheet" href="vendors/node_modules/purecss/pure-min.css">
    <link rel="stylesheet" href="vendors/node_modules/purecss/grids-responsive-min.css">
    <link type="text/css" rel='stylesheet' href="fontello/fontello.css">
    <!--if IE 7
    link(rel='stylesheet', href='fontello/fontello-ie7.css')
    -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header class="darkBg">
        <div class="pure-g">
            <div class="pure-u-1 pure-u-xxl-1-6">
                <a href="/" id="logo" class="inline middle"><img src="images/logo/logo.svg" alt="logo"></a>
                <button id="menuLink" title="Menu mobile"
                    class="pure-button menuLink pure-hidden-xxl"><span></span></button>
            </div>
            <div id="menu" class="pure-u-xxl-5-6">
                <nav class="pure-menu">
                    <ul class="pure-menu-list">
                        <?php foreach ($menuItems as $item): ?>
                            <li class="pure-menu-item"><a href="<?= htmlspecialchars($item['href']) ?>" class="pure-menu-link"><?= htmlspecialchars($item['label']) ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section id="home">
        <div class="wrapWidth wrapWidth-xl">
            <h1>Bienvenue sur le C.V. de Lucas Girard<br>Développeur Web<br>Chef de projets</h1>
        </div>
    </section>


    <section id="keySkills">
        <h2>COMPÉTENCES CLÉS</h2>
        <div class="pure-g wrapWidth wrapWidth-xl">
            <div class="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
                <div>
                    <span id="spare"></span>
                    <h3>Développement<br>backend et frontend</h3>
                </div>
            </div>
            <div class="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
                <div>
                    <span id="man"></span>
                    <h3>Gestion de projets</h3>
                </div>
            </div>
            <div class="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
                <div>
                    <span id="monitor"></span>
                    <h3>Esprit d’analyse</h3>
                </div>
            </div>

            <div class="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
                <div>
                    <span id="photo"></span>
                    <h3>Autonome</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="presentation">
        <h2>PRÉSENTATION</h2>
        <div class="pure-g wrapWidth wrapWidth-xl">
            <div class="pure-u-1 pure-u-md-2-3">
                <div>
                    <h3>Un peu plus sur moi</h3>
                    <p>
                        Je suis un développeur d'applications expérimenté de plus de 10 ans.
                    </p>
                    <p>
                        Ma polyvalence m'a permis d'évoluer dans divers
                        contextes professionnels : agences pour grands comptes, TPE, secteur public et privé, ainsi
                        qu'en client final direct.
                    </p>

                    <p>
                        Ma formation initiale m'a donné une solide base technique avec les langages suivants :
                    </p>
                    <ul>
                        <li>Programmation système : C, C++</li>
                        <li>Développement web : Java, PHP (procédural et orienté objet)</li>
                        <li>Base de données : SQL</li>
                        <li>Développement Windows : VB.net</li>
                    </ul>

                    <p>
                        Au fil de mon expérience professionnelle, j'ai enrichi mes compétences avec :
                    </p>
                    <ul>
                        <li>FileMaker (versions 6 à 19, certifié)</li>
                        <li>Drupal (versions 7, 8 et 9)</li>
                        <li>AngularJS et Angular</li>
                        <li>CodeIgniter (versions 2, 3 et 4)</li>
                        <li>Laravel 10</li>
                    </ul>

                    <p>
                        Par curiosité technologique et volonté d'évolution continue, j'ai également acquis des
                        compétences
                        en :
                    </p>

                    <ul>
                        <li>NodeJS</li>
                        <li>Python</li>
                    </ul>
                    <p>
                        Je suis actuellement disponible pour de nouveaux projets ou collaborations.
                    </p>
                </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <div>
                    <img src="images/presentation/Lucas-GIRARD.jpg" alt="portrait">
                </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <div>
                    <img src="images/presentation/setup.jpg" alt="PC" />
                </div>
            </div>
            <div class="pure-u-1 pure-u-md-2-3">
                <div>
                    <h3>Objectif professionnel</h3>
                    <p>
                        Mon objectif professionnel est de continuer à évoluer en tant que développeur web et chef de
                        projet, en mettant à profit mes compétences techniques pour diriger des projets innovants qui
                        répondent aux besoins spécifiques des clients.
                    </p>
                    <p>
                        Je cherche particulièrement un poste où je pourrai conjuguer développement technique et gestion
                        de projet, permettant ainsi d'optimiser les processus tout en créant des solutions web modernes
                        et performantes.
                    </p>
                    <p>
                        Mon ambition est de contribuer activement au succès d'une entreprise dynamique
                        tout en continuant à approfondir mes connaissances dans le domaine du développement web et de la
                        direction de projet.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="mixSection">
        <h2 class="darkBg">COMPTÉNCES</h2>
        <div class="pure-g wrapWidth mixWrap">
            <?php foreach ($competences as $comp): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 mix">
                    <div class="pure-g">
                        <div class="pure-u-1-4 icon"><span><?= $comp['icon'] ?></span></div>
                        <div class="pure-u-3-4">
                            <h3><?= $comp['title'] ?></h3>
                        </div>
                    </div>
                    <div class="popupContent">
                        <table class="w100">
                            <?php foreach ($comp['rows'] as $i => $row): ?>
                                <tr data-lastUsed="<?= $i + 1 ?>" data-progress="<?= $row['progress'] ?>">
                                    <td class="w60"><?= $row['label'] ?></td>
                                    <td>
                                        <div class="stars">
                                            <div></div>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </table>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section id="xps" class="mixSection">
        <h2 class="darkBg">EXPÉRIENCES PROFESSIONNELLE</h2>
        <ul class="inlineUl">

        </ul>
        <ul class="inlineUl darkBg">
            <li><button data-filter="all" class="pure-button">ALL</button></li>
            <li>|</li>
            <li><button data-filter=".contrat" class="pure-button">Contrat</button></li>
            <li><button data-filter=".mission" class="pure-button">Mission</button></li>
            <li><button data-filter=".stage" class="pure-button">Stage</button></li>
            <li>|</li>
            <li><button data-filter=".dev" class="pure-button">Développeur</button></li>
            <li><button data-filter=".cdp" class="pure-button">Chef de projets</button></li>
        </ul>

        <div class="pure-g wrapWidth mixWrap">
            <?php foreach ($experiences as $exp): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 mix <?= htmlspecialchars($exp['classes']) ?>">
                    <div>
                        <span class="date"><?= htmlspecialchars($exp['date']) ?></span>
                        <span class="poste"><?= htmlspecialchars($exp['poste']) ?></span>
                        <span class="type"><?= htmlspecialchars($exp['type']) ?></span>
                        <?= count($exp['images']) > 0 ? '<div>' : '' ?>
                        <div class="pure-g">
                            <div class="pure-u-1">
                                <?php if (count($exp['images']) === 1): ?>
                                    <img src="<?= htmlspecialchars($exp['images'][0]['src']) ?>" alt="<?= htmlspecialchars($exp['images'][0]['alt']) ?>" class="<?= htmlspecialchars($exp['images'][0]['class']) ?>">
                                <?php else: ?>
                                    <div class="pure-g">
                                        <?php foreach ($exp['images'] as $img): ?>
                                            <div class="pure-u-1-<?= $img['u'] ?><?= isset($img['right']) && $img['right'] ? ' right' : '' ?>">
                                                <img src="<?= htmlspecialchars($img['src']) ?>" alt="<?= htmlspecialchars($img['alt']) ?>" class="<?= htmlspecialchars($img['class']) ?>">
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="pure-u-1">
                                <h3><?= htmlspecialchars($exp['company']) ?></h3>
                            </div>
                        </div>
                        <?= count($exp['images']) > 0 ? '</div>' : '' ?>
                        <div class="popupContent">
                            <?= htmlspecialchars($exp['period']) ?>
                            <ul class='left'>
                                <?php foreach ($exp['details'] as $detail): ?>
                                    <li><?= htmlspecialchars($detail) ?></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section id="formations" class="mixSection">
        <h2 class="darkBg">FORMATION</h2>

        <div class="pure-g wrapWidth mixWrap">
            <?php foreach ($formations as $formation): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 pure-u-xxxl-1-6 mix">
                    <div>
                        <span class="date"><?= htmlspecialchars($formation['date']) ?></span>
                        <span class="where"><?= htmlspecialchars($formation['where']) ?></span>
                        <div class="pure-g">
                            <div class="pure-u-1">
                                <img src="<?= htmlspecialchars($formation['img']['src']) ?>" alt="<?= htmlspecialchars($formation['img']['alt']) ?>" class="<?= htmlspecialchars($formation['img']['class']) ?>">
                            </div>
                            <div class="pure-u-1">
                                <h3><?= htmlspecialchars($formation['title']) ?></h3>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section id="projects" class="mixSection">
        <h2 class="darkBg">PROJETS</h2>
        <div class="pure-g wrapWidth mixWrap">
            <?php foreach ($projects as $project): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 pure-u-xxxl-1-6 mix" <?= isset($project['data_text']) ? ' data-text="' . htmlspecialchars($project['data_text']) . '"' : '' ?>>
                    <div>
                        <span class="date"><?= htmlspecialchars($project['date']) ?></span>
                        <span class="version"><?= htmlspecialchars($project['version']) ?></span>
                        <div>
                        <h3><?= $project['title'] ?></h3>
                        <?php if (isset($project['download'])): ?>
                            <a class="pure-button" target="_blank" rel="nofollow" href="<?= htmlspecialchars($project['download']) ?>">Télécharger</a>
                        <?php endif; ?>
                        <?php if (isset($project['git'])): ?>
                            <a class="button pure-button" target="_blank" rel="nofollow" href="<?= htmlspecialchars($project['git']) ?>">Git</a>
                        <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section id="culture" class="mixSection">
        <h2 class="darkBg">CULTURE</h2>
        <ul class="inlineUl darkBg">
            <li><button data-filter="all" class="pure-button">ALL</button></li>
            <li><button data-filter=".book" class="pure-button">LIVRES</button></li>
            <!-- <li><button data-filter=".sites" class="pure-button">SITES</button></li> -->
            <li><button data-filter=".rss" class="pure-button">RSS</button></li>
            <li><button data-filter=".yt" class="pure-button">YOUTUBE 2006-2019</button></li>
        </ul>


        <div class="pure-g wrapWidth mixWrap">


            <?php foreach ($books as $book): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 pure-u-xxxl-1-6 mix book">
                    <div>
                        <span class="<?= $book['span_class'] ?>">lu</span>
                        <div class="pure-g">
                            <div class="pure-u-1-4">
                                <img class="pure-img" src="<?= $book['img'] ?>" alt="photo of the book">
                            </div>
                            <div class="pure-u-3-4">
                                <h3><?= $book['title'] ?><br><?= $book['subtitle'] ?></h3>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($rssFeeds as $feed): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 pure-u-xxxl-1-6 mix rss <?= htmlspecialchars($feed['class']) ?>">
                    <div>
                        <div class="pure-g">
                            <div class="pure-u-1-4">
                                <img class="pure-img" src="<?= htmlspecialchars($feed['img']) ?>" alt="<?= htmlspecialchars($feed['img_alt']) ?>">
                            </div>
                            <div class="pure-u-3-4">
                                <h3><?= htmlspecialchars($feed['title']) ?></h3>
                            </div>
                        </div>
                        <div class="popupContent">
                            <ul class='left'>
                                <?php foreach ($feed['links'] as $link): ?>
                                    <li><?= htmlspecialchars($link['label']) ?> : <a rel="nofollow" href="<?= htmlspecialchars($link['href']) ?>"><?= htmlspecialchars($link['text']) ?></a></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($ytChannels as $yt): ?>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 pure-u-xxl-1-4 pure-u-xxxl-1-6 mix yt">
                    <div>
                        <span class="date"><?= htmlspecialchars($yt['date']) ?></span>
                        <span class="nbrVideos"><?= htmlspecialchars($yt['nbrVideos']) ?></span>
                        <div class="pure-g">
                            <div class="pure-u-1-4">
                                <img class="pure-img" src="<?= htmlspecialchars($yt['img']) ?>" alt="<?= htmlspecialchars($yt['img_alt']) ?>">
                            </div>
                            <div class="pure-u-3-4">
                                <h3><?= htmlspecialchars($yt['title']) ?></h3>
                            </div>
                        </div>
                        <div class="popupContent">
                            <ul class='left'>
                                <li>url : <a rel="nofollow" href="<?= htmlspecialchars($yt['url']) ?>"><?= htmlspecialchars($yt['url']) ?></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
    </section>

    <footer id="contact" class="darkBg">
        <h2>CONTACTEZ MOI</h2>

        <div class="pure-g wrapWidth wrapWidth-xxl">
            <div class="pure-u-1 pure-u-md-12-24">
                <form method="POST" action="ajaxPHP/index.php?a=sendEmail" class="pure-form pure-g">
                    <div class="pure-u-1 pure-u-md-11-24">
                        <fieldset class="pure-group">
                            <div>
                                <input type="text" id="name" name="name" class="pure-input-1" placeholder="Nom"
                                    required="" autocomplete="on">
                                <input type="email" id="email" name="email" class="pure-input-1"
                                    placeholder="Adresse E-mail" required="" autocomplete="on">
                            </div>
                        </fieldset>
                    </div>
                    <div class="pure-u-1 pure-u-md-2-24"></div>
                    <div class="pure-u-1 pure-u-md-11-24">
                        <fieldset class="pure-group">
                            <div>
                                <input type="text" id="company" name="company" class="pure-input-1"
                                    placeholder="Entreprise" autocomplete="on">
                                <input type="text" id="website" name="website" class="pure-input-1"
                                    placeholder="Site internet">
                            </div>
                        </fieldset>
                    </div>

                    <fieldset class="pure-group pure-u-1">
                        <input type="text" id="subject" name="subject" class="pure-input-1" placeholder="Objet"
                            required="">
                        <textarea type="text" id="message" name="message" class="pure-input-1"
                            placeholder="Votre message" cols="50" rows="5" required=""></textarea>
                    </fieldset>

                    <div class="pure-u-1 center">

                    </div>
                    <div class="pure-u-1 center">
                        <button type="submit" class="pure-button pure-input-1 pure-button-primary">Envoyer</button>
                    </div>
                </form>
            </div>
            <div class="pure-u-1 pure-u-md-2-24"></div>
            <div class="pure-u-1 pure-u-md-10-24 md-left">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-sm-1-2">
                        <nav class="pure-menu">
                            <ul class="pure-menu-list">
                                <li class="pure-menu-item"><a rel="nofollow" class="pure-menu-link"
                                        href="https://fr.viadeo.com/fr/profile/lucas.girard6"><i
                                            class="icon-viadeo"></i> lucas.girard6</a></li>
                                <li class="pure-menu-item"><a rel="nofollow" class="pure-menu-link"
                                        href="https://fr.linkedin.com/pub/lucas-girard/57/468/a7b"><i
                                            class="icon-linkedin"></i> lucas-girard</a></li>
                                <li class="pure-menu-item"><a rel="nofollow" class="pure-menu-link"
                                        href="https://gravatar.com/lucasgirardfr">gravatar</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="pure-u-1 pure-u-sm-1-2">
                        <nav class="pure-menu pure-menu-horizontal">
                            <ul class="pure-menu-list">
                                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                    <a href="#contact" class="pure-menu-link">Télécharger Vcard/LDIF</a>
                                    <ul class="pure-menu-children">
                                        <li class="pure-menu-item">
                                            <a class="pure-menu-link pure-button" href="files/fiche/Lucas-GIRARD.vcf">
                                                <i class="icon-download"></i> Vcard<i class="icon-vcard"></i>
                                            </a>
                                        </li>
                                        <li class="pure-menu-item">
                                            <a class="pure-menu-link pure-button" href="files/fiche/Lucas-GIRARD.ldif">
                                                <i class="icon-download"></i> LDIF<i class="icon-vcard"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav class="pure-menu pure-menu-horizontal">
                            <ul class="pure-menu-list">
                                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                    <a href="#contact" class="pure-menu-link">Télécharger CV</a>
                                    <ul class="pure-menu-children">
                                        <li class="pure-menu-item">
                                            <a class="pure-menu-link pure-button" href="files/cv/CV-Lucas-GIRARD.pdf">
                                                <i class="icon-download"></i>PDF
                                            </a>
                                        </li>
                                        <li class="pure-menu-item">
                                            <a class="pure-menu-link pure-button" href="files/cv/CV-Lucas-GIRARD.docx">
                                                <i class="icon-download"></i>Docx (Word)
                                            </a>
                                        </li>
                                        <li class="pure-menu-item">
                                            <a class="pure-menu-link pure-button" href="files/cv/CV-Lucas-GIRARD.doc">
                                                <i class="icon-download"></i>doc (Word 97-2003)
                                            </a>
                                        </li>
                                        <li class="pure-menu-item">
                                            <a class="pure-menu-link pure-button" href="files/cv/CV-Lucas-GIRARD.odt">
                                                <i class="icon-download"></i>odt (OpenDocument)
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <br>
                <nav class="pure-menu">
                    <ul class="pure-menu-list">



                        <li class="pure-menu-item"><a class="pure-menu-link cryptTe" href="#" data-one="0770"
                                data-two="646709"
                                onclick="window.location.href = 'tel:' + this.dataset.one + this.dataset.two; return false;"><i
                                    class="icon-phone"></i> </a></li>
                        <li class="pure-menu-item"><a class="pure-menu-link cryptMai" href="#" data-name="emploi"
                                data-domain="lucas-girard" data-tld="fr"
                                onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"><i
                                    class="icon-email"></i> </a></li>
                        <li class="pure-menu-item"><p><i class="icon-home"></i> 32 rue Paul Vaillant Couturier, 94700
                            Maisons-Alfort, FRANCE</p></li>
                    </ul>
                </nav>

            </div>
        </div>

        <div class="wrapWidth">
            <p>© 2025 Lucas Girard - Tous droits réservés.</p>
        </div>
    </footer>
    <a href="#" id="toTop" title="remonter" class="pure-button"></a>
    <script src="vendors/node_modules/gumshoejs/gumshoe.min.js"></script>
    <script src="vendors/node_modules/mixitup/mixitup.min.js"></script>
    <script src="vendors/node_modules/sweetalert2/sweetalert2.all.min.js"></script>
    <script src="vendors/node_modules/vanilla-lazyload/lazyload.iife.min.js"></script>
    <script src="vendors/node_modules/tarteaucitronjs/tarteaucitronjs/tarteaucitron.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
<?php
$html = ob_get_clean();
file_put_contents(__DIR__ . '/index.html', $html);
