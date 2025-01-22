let language = 'EN';  // Default language
const contentFiles = {
    summary: {
        EN: 'content/summaryEN.txt',
        JP: 'content/summaryJP.txt'
    },
    topics: {
        EN: 'content/topicsEN.txt',
        JP: 'content/topicsJP.txt'
    },
    teacher: {
        EN: 'content/teacherEN.txt',
        JP: 'content/teacherJP.txt'
    }
};

// Function to change the content based on the section
function loadContent(section) {
    fetch(contentFiles[section][language])
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerText = text;
        })
        .catch(error => {
            document.getElementById('content').innerText = 'Error loading content.';
            console.error('Error loading content:', error);
        });
}

// Toggle language when button is clicked
document.getElementById('lang-btn').addEventListener('click', function () {
    language = (language === 'EN') ? 'JP' : 'EN';  // Toggle language
    document.getElementById('lang-btn').innerText = (language === 'EN') ? 'Switch to Japanese' : 'Switch to English';
    loadContent('summary');  // Reload the content when language is switched
});

// Load initial content (e.g., "summary") on page load
loadContent('summary');
