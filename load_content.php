<?php
session_start();

// Set default language if not set
if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = 'EN'; // Default language is English
}

if (isset($_GET['section'])) {
    $section = $_GET['section'];
    echo loadContent($section);
}

function loadContent($section) {
    $language = $_SESSION['language'];
    $file = $section . $language . ".txt"; // Form the file name based on section and language
    if (file_exists($file)) {
        return file_get_contents($file);
    } else {
        return "Content not found."; // Fallback if the file doesn't exist
    }
}
?>
