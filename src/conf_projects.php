<?php

// dev-helper-scripts
// BAM-proxy
// module-PHP-JS
// WhatIEat

$projects = [
    ['date' => '2025', 'version' => 'v4', 'title' => 'CV', 'git' => 'https://github.com/LucasGIRARD/CV'],
    ['date' => '2025', 'version' => 'v1', 'title' => 'Template 2'],
    ['date' => '2025', 'version' => 'v1', 'title' => 'Git archive', 'git' => 'https://github.com/LucasGIRARD/dev-helper-scripts'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Brocante 50', 'git' => 'https://github.com/LucasGIRARD/brocante50'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Alarm'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Animation<br>svg/three.js/webgl 2d'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Job Scrapper'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Job Lister', 'git' => 'https://github.com/LucasGIRARD/jobsLister'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Docker Starter', 'data_text' => 'better detection of docker desktop running + better hide windows', 'git' => 'https://github.com/LucasGIRARD/dev-helper-scripts'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Dump Organizer', 'data_text' => 'use local', 'git' => 'https://github.com/LucasGIRARD/dev-helper-scripts'],
    ['date' => '2024', 'version' => 'v1', 'title' => 'Github Init', 'data_text' => 'adjust adding htdocs folder navigation', 'git' => 'https://github.com/LucasGIRARD/dev-helper-scripts'],
    ['date' => '2020', 'version' => 'v1', 'title' => 'Websocket Chat', 'git' => 'https://github.com/LucasGIRARD/webSocket-chat'],
    ['date' => '2019', 'version' => 'v1', 'title' => 'Barnabe AperoVan', 'git' => 'https://github.com/LucasGIRARD/barnabe'],
    ['date' => '2018', 'version' => 'v1', 'title' => 'ACBC Consulting', 'git' => 'https://github.com/LucasGIRARD/'],
    ['date' => '2018', 'version' => 'v1', 'title' => 'HTML Small Template', 'git' => 'https://github.com/LucasGIRARD/html-small-template'],
    ['date' => '2017', 'version' => 'v1', 'title' => 'Calculatrice PWA', 'git' => 'https://github.com/LucasGIRARD/calculatrice-pwa'],
    ['date' => '2017', 'version' => 'v1', 'title' => 'Tool Sublime Text<br>diff history', 'git' => 'https://github.com/LucasGIRARD/liste-fichier-modifie'],
    ['date' => '2017', 'version' => 'v1', 'title' => 'Fast Order Images', 'git' => 'https://github.com/LucasGIRARD/fast-order-img'],
    ['date' => '2017', 'version' => 'v1', 'title' => 'Nombre romain', 'data_text' => 'première apporche node.js', 'git' => 'https://github.com/LucasGIRARD/nombres_romain'],
    ['date' => '2017', 'version' => 'v1', 'title' => 'YT Watcher'],
    ['date' => '2016', 'version' => 'prototype', 'title' => 'Wysiwyg Basique', 'git' => 'https://github.com/LucasGIRARD/wysiwyg-basique'],
    ['date' => '2016', 'version' => 'prototype', 'title' => 'Bam collectif<br>Rouen', 'git' => 'https://github.com/LucasGIRARD/BAM'],
    ['date' => '2016', 'version' => 'v1', 'title' => 'Bam collectif<br>La Courneuve', 'git' => 'https://github.com/LucasGIRARD/BAM'],
    ['date' => '2016', 'version' => 'v1', 'title' => 'Filemaker api basic', 'git' => 'https://github.com/LucasGIRARD/filemaker'],
    ['date' => '2015', 'version' => 'v1', 'title' => 'Bam collectif<br>Factory API Gandi', 'git' => 'https://github.com/LucasGIRARD/BAM-factory'],
    ['date' => '2015', 'version' => 'v1', 'title' => 'Bam collectif<br>Saint-Jean de Braye', 'git' => 'https://github.com/LucasGIRARD/BAM'],
    ['date' => '2014', 'version' => 'v3', 'title' => 'CV', 'git' => 'https://github.com/LucasGIRARD/CV'],
    ['date' => '2014', 'version' => 'v1', 'title' => 'Bam collectif<br>Trouville-sur-Mer', 'git' => 'https://github.com/LucasGIRARD/BAM'],
    ['date' => '2012', 'version' => 'v1', 'title' => 'Cress archiveur<br>Assistance à la déduplication de fichiers', 'git' => 'https://github.com/LucasGIRARD/CRESS.Archiveur'],
    ['date' => '2012', 'version' => 'v2', 'title' => 'CV', 'git' => 'https://github.com/LucasGIRARD/CV'],
    ['date' => '2012', 'version' => 'v2', 'title' => 'Modula', 'git' => 'https://github.com/LucasGIRARD/modula'],
    ['date' => '2012', 'version' => 'v1', 'title' => 'Modula', 'git' => 'https://github.com/LucasGIRARD/modula'],
    ['date' => '2011', 'version' => 'v1 - vb.net', 'title' => 'Simple Backup Files', 'git' => 'https://github.com/LucasGIRARD/simple-backup-file'],
    ['date' => '2011', 'version' => 'v1 - vb.net', 'title' => 'Filmothèque', 'git' => 'https://github.com/LucasGIRARD/filmotheque'],
    ['date' => '2011', 'version' => 'v1 - vb.net', 'title' => 'Compta', 'download' => 'files/projet/compta.zip', 'git' => 'https://github.com/LucasGIRARD/basique-comptabilite'],
    ['date' => '2010', 'version' => 'v1', 'title' => 'Image Crop', 'git' => 'https://github.com/LucasGIRARD/image-crop'],
    ['date' => '2010', 'version' => 'v1', 'title' => "Verson'Optique", 'git' => 'https://github.com/LucasGIRARD/VersonOptique'],
    ['date' => '2009', 'version' => 'v1', 'title' => 'Arborescence', 'git' => 'https://github.com/LucasGIRARD/arborescence'],
    ['date' => '2009', 'version' => 'v1', 'title' => 'CV', 'git' => 'https://github.com/LucasGIRARD/CV'],
    ['date' => '2009', 'version' => 'v1', 'title' => 'Emmanuel Touzé', 'git' => 'https://github.com/LucasGIRARD/emmanuel-touze'],
    ['date' => '2006-2008', 'version' => 'v1', 'title' => 'Divers module JS/PHP<br>intégré dans des CMS<br>(Nuked-klan, webSPELL)'],
    ['date' => '2006-2008', 'version' => 'v1', 'title' => 'Recrutement équipe counter-strike', 'git' => 'https://github.com/LucasGIRARD/recrutement-team-CS16'],
    ['date' => '?/2004', 'version' => 'v1', 'title' => 'Damn simple cms', 'git' => 'https://github.com/LucasGIRARD/damn-simple-cms-procedural'],
];

?>