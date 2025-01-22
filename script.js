let language = 'EN';  // Default language

const content = {
    summary: {
        EN: 'Welcome to the IKS Python Programming course. This course is designed for beginners who want to learn Python.',
        JP: 'IKS Python プログラミングコースへようこそ。このコースはPythonを学びたい初心者向けに設計されています。'
    },
    topics: {
        EN: 'In this course, we will cover the following topics: Variables, Loops, Functions, Object-Oriented Programming.',
        JP: 'このコースでは、次のトピックを学びます：変数、ループ、関数、オブジェクト指向プログラミング。'
    },
    teacher: {
        EN: 'Your teacher is a highly skilled Python developer with years of experience in the industry.',
        JP: 'あなたの教師は業界での経験を持つ熟練のPython開発者です。'
    }
};

function changeContent(section) {
    document.getElementById('content').innerText = content[section][language];
}

document.getElementById('lang-btn').addEventListener('click', function() {
    language = (language === 'EN') ? 'JP' : 'EN';  // Toggle between English and Japanese
    document.getElementById('lang-btn').innerText = (language === 'EN') ? 'Switch to Japanese' : 'Switch to English';
    changeContent('summary');  // Update content to match the new language
});
