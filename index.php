<?php
// Start the session to track the selected language
session_start();

// Set default language if not set
if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = 'EN'; // Default language is English
}

// Handle language switch
if (isset($_GET['lang'])) {
    $_SESSION['language'] = $_GET['lang']; // Change language when the button is pressed
}

// Function to load content from a file
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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Programming Course</title>
    <link rel="stylesheet" href="style.css">
    <script>
        // Update the page content dynamically based on the section
        function loadContent(section) {
            // Fetch the corresponding content using PHP
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("info").innerHTML = this.responseText;
                }
            };
            xmlhttp.open("GET", "load_content.php?section=" + section, true);
            xmlhttp.send();
        }
    </script>
</head>

<body>
    <header>
        <div id="top-banner">
            <a href="?lang=EN"><button id="lang-btn">Switch to English</button></a>
            <a href="?lang=JP"><button id="lang-btn">Switch to Japanese</button></a>
            <img src="hd_logo.png">
            <img src="top.png">
            <h1>IKS Python Programming course</h1>

            <div id="nav-bar">
                <div class="nav-button" id="about-btn" onclick="loadContent('summary')">About</div>
                <div class="nav-button" id="syllabus-btn" onclick="loadContent('topics')">Syllabus</div>
                <div class="nav-button" id="teacher-btn" onclick="loadContent('teacher')">Teacher</div>
            </div>
        </div>
    </header>

    <main>
        <section id="info" class="info">
            <!-- Dynamic content will be loaded here -->
            <?php echo nl2br(loadContent('summary')); ?>
        </section>
    </main>
</body>

</html>
