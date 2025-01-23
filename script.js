const navBar = document.getElementById("nav-bar");
let topButton = document.getElementById("top-button");
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

window.onscroll = function() {scrollFunction()};


let language = 'JP';  // Default language
const contentFiles = {
    summary: {
        EN: `
<h2>Course Summary: Python Programming (Beginner)</h2>
<p>This course introduces elementary-aged children to programming through the versatile and beginner-friendly language of Python. Designed to be engaging and interactive, it covers a wide range of topics, including:</p>

<h3>1.	Basics of Programming:</h3>
<p>Setting up Python and writing the first code.
Understanding variables, data types, and operators.</p>
<h3>2.	Foundational Concepts:</h3>
<p>Decision-making with conditional statements.
Iteration using loops.
Data organization with lists, dictionaries, and functions.</p>
<h3>3.	Creative Exploration:</h3>
<p>Building games like Rock-Paper-Scissors and Hangman.
Animating and drawing with the Turtle library.
Simulating real-world scenarios, like weather apps and simple encryption.</p>
<h3>4.	Problem-Solving and Logic:</h3>
<p>Tackling challenges like FizzBuzz, prime number checkers, and memory games.
Learning to approach problems algorithmically.</p>
<h3>5.	Practical Applications:</h3>
<p>Reading and writing files for quizzes and planners.
Using Python libraries to create graphs and simple animations.</p>
<h3>6.	Collaborative Projects:</h3>
<p>Encouraging group work to design games or apps.
Building a portfolio of projects that showcase their creativity and learning.</p>
<br>
________________________________________
<h2>Why It's Important for Children to Learn These Concepts in 2025</h2>
<h3>1.	Building Future-Ready Skills:</h3>
<p>As technology continues to dominate industries, coding is becoming as essential as reading and math. Learning Python equips children with computational thinking, problem-solving skills, and creativity—foundations for success in a tech-driven world.</p>
<h3>2.	Developing Logical and Critical Thinking:</h3>
<p>Programming teaches children to break down complex problems into manageable steps, fostering logical reasoning and critical thinking skills that extend beyond coding.</p>
<h3>3.	Encouraging Creativity:</h3>
<p>Python's simplicity allows young learners to focus on creating fun and interactive projects, nurturing their imaginations while solving real-world problems.</p>
<h3>4.	Introduction to STEM Careers:</h3>
<p>Early exposure to coding can spark an interest in STEM fields, opening doors to careers in technology, engineering, science, and beyond.</p>
<h3>5.	Empowering Digital Citizenship:</h3>
<p>In 2025, understanding how technology works is crucial for navigating a digital society responsibly. By learning programming, children can become creators, not just consumers, of technology.</p>
<h3>6.	Teamwork and Collaboration:</h3>
<p>Through group projects, kids learn to communicate ideas, share responsibilities, and collaborate effectively—skills vital for future workplaces.</p>
<br>
<p>This course provides children with the tools to thrive in an increasingly digital world while fostering a love for problem-solving, creativity, and collaboration.</p>
        `,
        JP: `
    <h2>コース概要：Pythonプログラミング（初級者向け）</h2>
    <p>このコースは、小学生を対象に、初心者に優しいプログラミング言語であるPythonを通じてプログラミングを学ぶ内容になっています。子どもたちが楽しく学べるよう工夫されたインタラクティブな構成で、以下の幅広いトピックをカバーします。</p>

    <h3>1. プログラミングの基礎</h3>
    <ul>
        <li>Pythonのセットアップと初めてのコード作成。</li>
        <li>変数、データ型、演算子の理解。</li>
    </ul>

    <h3>2. 基本的なプログラミング概念</h3>
    <ul>
        <li>条件分岐（<span class="highlight">if、elif、else</span>）を使用した意思決定。</li>
        <li>ループ（<span class="highlight">for、while</span>）による繰り返し処理。</li>
        <li>リスト、辞書、関数を使ったデータ整理。</li>
    </ul>

    <h3>3. 創造的なプロジェクト</h3>
    <ul>
        <li>「じゃんけん」や「ハングマン」などのゲーム作り。</li>
        <li>Turtleライブラリを使ったアニメーションと描画。</li>
        <li>天気アプリや簡単な暗号化のような現実的なシナリオのシミュレーション。</li>
    </ul>

    <h3>4. 問題解決と論理</h3>
    <ul>
        <li>FizzBuzzや素数チェッカー、メモリーゲームなどの課題に取り組む。</li>
        <li>アルゴリズム的なアプローチを学ぶ。</li>
    </ul>

    <h3>5. 実践的な応用</h3>
    <ul>
        <li>クイズや予定表のためのファイルの読み書き。</li>
        <li>グラフや簡単なアニメーションを作成するためのPythonライブラリの使用。</li>
    </ul>

    <h3>6. 協力型プロジェクト</h3>
    <ul>
        <li>ゲームやアプリの設計を通じたグループワークの促進。</li>
        <li>創造性と学びを示すプロジェクトのポートフォリオを作成。</li>
    </ul>

    <hr>

    <h3>2025年における子どもたちのこれらの概念学習の重要性</h3>
    <h4>1. 未来に備えるスキルを構築</h4>
    <p>テクノロジーがますます産業を支配する中、コーディングは読み書きや算数と同じくらい重要になっています。Pythonを学ぶことで、計算的思考、問題解決能力、創造性を養い、技術主導の世界で成功するための基盤を築きます。</p>

    <h4>2. 論理的かつ批判的な思考の発展</h4>
    <p>プログラミングを学ぶことで、複雑な問題を分解し、対処可能なステップに落とし込む能力を養います。この論理的思考は、コーディング以外の分野でも役立ちます。</p>

    <h4>3. 創造性を促進</h4>
    <p>Pythonのシンプルさにより、若い学習者は楽しいプロジェクトを作ることに集中でき、想像力を育みながら現実の問題を解決する能力を高めます。</p>

    <h4>4. STEM分野への興味を育む</h4>
    <p>コーディングに早期から触れることで、科学、技術、工学、数学（STEM）分野への興味を引き出し、これらの分野でのキャリアの可能性を広げます。</p>

    <h4>5. デジタル社会への備え</h4>
    <p>2025年のデジタル社会では、テクノロジーの仕組みを理解することが非常に重要です。プログラミングを学ぶことで、子どもたちはテクノロジーの消費者にとどまらず、創造者として活躍することができます。</p>

    <h4>6. チームワークと協力</h4>
    <p>グループプロジェクトを通じて、アイデアを伝える力や責任分担、効果的に協力する能力を養います。これらのスキルは将来の職場で必須となります。</p>

    <p>このコースは、ますますデジタル化する世界で成功するためのツールを子どもたちに提供すると同時に、問題解決、創造性、協力の楽しさを教えます。</p>
`
    },
    topics: {
        EN: `
<h2>2025 Syllabus</h2>
    
    <h3>Getting Started</h3>
    <ol>
        <li>Introduction to Python: Explain what Python is and show how to print "Hello, World!".</li>
        <li>Setting Up Python: Install Python and set up an IDE like IDLE or PyCharm.</li>
        <li>Python as a Calculator: Teach basic arithmetic operations (+, -, *, /).</li>
        <li>Variables and Data Types: Introduce variables and different types of data (int, float, string).</li>
    </ol>
    
    <h3>Basic Programming Concepts</h3>
    <ol start="5">
        <li>String Manipulation: Explore how to join, slice, and repeat strings.</li>
        <li>Making Decisions: Introduce if, elif, and else for decision-making.</li>
        <li>Loops: Teach for and while loops using fun examples like counting numbers.</li>
        <li>Lists: Introduce lists and how to add, remove, and access items.</li>
        <li>Dictionaries: Teach key-value pairs and how to store information in dictionaries.</li>
        <li>Functions: Write simple functions like greeting someone by name.</li>
    </ol>
    
    <h3>Creative Projects</h3>
    <ol start="11">
        <li>Mad Libs Game: Create a Mad Libs story using string input.</li>
        <li>Number Guessing Game: Write a simple game to guess a random number.</li>
        <li>Drawing with Turtle: Introduce the turtle module for simple graphics.</li>
        <li>Create a Calculator: Build a basic calculator program.</li>
        <li>Rock, Paper, Scissors Game: Write a simple game using conditionals.</li>
        <li>Dice Roller: Simulate rolling dice using random.randint.</li>
    </ol>
    
    <h3>Data and Logic</h3>
    <ol start="17">
        <li>Sorting Hat: Sort students into groups using random choice.</li>
        <li>FizzBuzz: Teach logic by printing "Fizz", "Buzz", or "FizzBuzz".</li>
        <li>Even and Odd Numbers: Write a program to identify even and odd numbers.</li>
        <li>Palindrome Checker: Check if a word or phrase is a palindrome.</li>
        <li>Simple Password Generator: Generate random passwords.</li>
    </ol>
    
    <h3>Working with Files</h3>
    <ol start="22">
        <li>Read and Write Files: Show how to read from and write to text files.</li>
        <li>Make a To-Do List: Save and load tasks in a text file.</li>
        <li>Simple Quiz Game: Load quiz questions from a file.</li>
    </ol>
    
    <h3>Games and Fun</h3>
    <ol start="25">
        <li>Hangman: Build a basic version of the Hangman game.</li>
        <li>Guess the Animal: Create a simple quiz about animals.</li>
        <li>Magic 8-Ball: Write a program to predict the future.</li>
        <li>Pong with Turtle: Create a simple Pong game using the turtle module.</li>
        <li>Memory Game: Teach loops and lists by building a simple memory game.</li>
    </ol>
    
    <h3>Problem Solving</h3>
    <ol start="30">
        <li>Simple Math Quiz: Create a math quiz with random numbers.</li>
        <li>Find the Largest Number: Write a program to find the largest number in a list.</li>
        <li>Prime Numbers: Teach how to check if a number is prime.</li>
        <li>Tic-Tac-Toe: Create a basic Tic-Tac-Toe game.</li>
        <li>Maze Solver: Introduce algorithms with a simple maze game.</li>
    </ol>
    
    <h3>Fun with Libraries</h3>
    <ol start="35">
        <li>Draw with Python: Use matplotlib to make bar and pie charts.</li>
        <li>Make Music: Introduce simple sound generation libraries like pygame.</li>
        <li>Emoji Fun: Print fun emojis using Unicode characters.</li>
        <li>Simple Animation: Animate objects using the turtle module.</li>
    </ol>
    
    <h3>Advanced Topics for Kids</h3>
    <ol start="39">
        <li>Introduction to Classes: Explain classes using a simple animal class.</li>
        <li>Recursion Basics: Use recursion to calculate factorials.</li>
        <li>Simple Encryption: Teach Caesar Cipher for encrypting messages.</li>
    </ol>
    
    <h3>Real-World Connections</h3>
    <ol start="42">
        <li>Weather App: Fetch weather data using an API like OpenWeatherMap.</li>
        <li>Daily Planner: Create a simple planner with file storage.</li>
        <li>Simple Voting System: Write a program to tally votes.</li>
    </ol>
    
    <h3>STEM Integration</h3>
    <ol start="45">
        <li>Simulate a Race: Use turtle to race objects on the screen.</li>
        <li>Planet Weight Calculator: Calculate weight on different planets.</li>
        <li>Simulate a Dice Game: Teach probability using random numbers.</li>
        <li>Fibonacci Series: Teach patterns using the Fibonacci sequence.</li>
    </ol>
    
    <h3>Project Wrap-Up</h3>
    <ol start="49">
        <li>Build a Portfolio: Guide kids to create a portfolio of all their Python projects.</li>
        <li>Group Project: Assign a group project to develop a game or app.</li>
    </ol>
    `,
        JP: `
<h2>Introduction</h2>
    <ul>
        <li>Pythonの紹介: Pythonとは何かを説明し、「Hello, World!」を表示する方法を紹介します。</li>
        <li>Pythonのセットアップ: Pythonをインストールし、IDLEやPyCharmなどのIDEを設定します。</li>
        <li>Pythonを電卓として使用: 基本的な算術演算（+, -, *, /）を教えます。</li>
        <li>変数とデータ型: 変数とさまざまなデータ型（int, float, string）を紹介します。</li>
    </ul>
    
    <h2>基本的なプログラミングの概念</h2>
    <ul>
        <li>文字列操作: 文字列の結合、スライス、繰り返しを学びます。</li>
        <li>条件分岐: if、elif、elseを使った条件分岐を紹介します。</li>
        <li>ループ: forループやwhileループを、数を数えるなどの楽しい例で教えます。</li>
        <li>リスト: リストの追加、削除、アクセス方法を学びます。</li>
        <li>辞書: キーと値のペアを使って情報を保存する方法を教えます。</li>
        <li>関数: 名前で挨拶するような簡単な関数を作成します。</li>
    </ul>
    
    <h2>創造的なプロジェクト</h2>
    <ul>
        <li>Mad Libsゲーム: 文字列入力を使ってMad Libsストーリーを作成します。</li>
        <li>数字当てゲーム: ランダムな数字を当てるシンプルなゲームを作成します。</li>
        <li>Turtleで絵を描く: Turtleモジュールを使った簡単なグラフィックスを紹介します。</li>
        <li>電卓の作成: 基本的な電卓プログラムを作成します。</li>
        <li>じゃんけんゲーム: 条件分岐を使ったシンプルなゲームを作成します。</li>
        <li>サイコロローラー: random.randintを使ってサイコロを振るシミュレーションを行います。</li>
    </ul>
    
    <h2>データと論理</h2>
    <ul>
        <li>ソーティングハット: ランダムな選択を使って生徒をグループに分けます。</li>
        <li>FizzBuzz: "Fizz"、"Buzz"、または"FizzBuzz"を表示するロジックを教えます。</li>
        <li>偶数と奇数: 数字が偶数か奇数かを判定するプログラムを作成します。</li>
        <li>回文チェッカー: 単語やフレーズが回文かどうかを確認します。</li>
        <li>シンプルなパスワード生成器: ランダムなパスワードを生成します。</li>
    </ul>
    
    <h2>ファイル操作</h2>
    <ul>
        <li>ファイルの読み書き: テキストファイルから読み書きする方法を紹介します。</li>
        <li>To-Doリストの作成: タスクを保存し、読み込むTo-Doリストを作成します。</li>
        <li>簡単なクイズゲーム: ファイルからクイズ問題を読み込みます。</li>
    </ul>
    
    <h2>ゲームと楽しみ</h2>
    <ul>
        <li>ハングマン: ハングマンゲームの基本バージョンを作成します。</li>
        <li>動物クイズ: 動物に関するシンプルなクイズを作成します。</li>
        <li>マジック8ボール: 未来を予言するプログラムを作成します。</li>
        <li>TurtleでPongゲーム: Turtleモジュールを使った簡単なPongゲームを作成します。</li>
        <li>記憶ゲーム: ループとリストを教えるための簡単な記憶ゲームを作成します。</li>
    </ul>
    
    <h2>問題解決</h2>
    <ul>
        <li>簡単な数学クイズ: ランダムな数字を使った数学クイズを作成します。</li>
        <li>最大数を見つける: リスト内の最大数を見つけるプログラムを作成します。</li>
        <li>素数: 数字が素数かどうかをチェックする方法を教えます。</li>
        <li>三目並べ: 基本的な三目並べゲームを作成します。</li>
        <li>迷路解決: シンプルな迷路ゲームでアルゴリズムを紹介します。</li>
    </ul>
    
    <h2>ライブラリで遊ぶ</h2>
    <ul>
        <li>Pythonで描画: matplotlibを使って棒グラフや円グラフを作成します。</li>
        <li>音楽を作る: pygameのようなライブラリで簡単な音を生成します。</li>
        <li>絵文字で遊ぶ: Unicode文字を使って楽しい絵文字を表示します。</li>
        <li>簡単なアニメーション: Turtleモジュールを使ってオブジェクトをアニメーション化します。</li>
    </ul>
    
    <h2>子供向けの高度なトピック</h2>
    <ul>
        <li>クラスの紹介: 簡単な動物クラスを使ってクラスを説明します。</li>
        <li>再帰の基本: 再帰を使って階乗を計算します。</li>
        <li>簡単な暗号化: Caesar Cipherを教えてメッセージを暗号化します。</li>
    </ul>
    
    <h2>実生活とのつながり</h2>
    <ul>
        <li>天気アプリ: OpenWeatherMapなどのAPIを使って天気データを取得します。</li>
        <li>日々のプランナー: ファイルストレージを使った簡単なプランナーを作成します。</li>
        <li>簡単な投票システム: 投票を集計するプログラムを作成します。</li>
    </ul>
    
    <h2>STEMとの統合</h2>
    <ul>
        <li>レースのシミュレーション: Turtleを使って画面上でオブジェクトを競走させます。</li>
        <li>惑星の重さ計算機: 各惑星での重さを計算します。</li>
        <li>サイコロゲームのシミュレーション: ランダムな数字を使って確率を教えます。</li>
        <li>フィボナッチ数列: フィボナッチ数列を使ってパターンを教えます。</li>
    </ul>
    
    <h2>プロジェクトのまとめ</h2>
    <ul>
        <li>ポートフォリオの作成: すべてのPythonプロジェクトをまとめたポートフォリオを作成します。</li>
        <li>グループプロジェクト: ゲームやアプリを開発するグループプロジェクトを課題にします。</li>
    </ul>
    `
    },
    teacher: {
        EN: `
    <h2>Your Teacher: Alex McKinley</h2>
    
    <h3>About Alex:</h3>
    <p>
        Alex has been programming in several languages for the past three years. His projects span a wide range of applications, including:
    </p>
    <ul>
        <li>Websites</li>
        <li>Games</li>
        <li>Automated scripts</li>
        <li>Web scrapers</li>
        <li>Data science projects</li>
        <li>Dashboards</li>
        <li>Chatbots</li>
    </ul>
    
    <p>
        With almost 20 years of teaching experience in Japan, Alex is passionate about preparing the next generation for the digital future. 
        He believes that learning to think like a programmer is an essential skill for children to succeed in an increasingly digital world.
    </p>
    
    <h3>Teaching Philosophy:</h3>
    <p>
        Alex combines his expertise in programming with his teaching experience to create engaging, hands-on learning environments. 
        His goal is to empower students to solve problems creatively and develop the computational thinking skills needed to navigate the challenges of the digital age.
    </p>
    `,
        JP: `
    <h2>担当講師：アレックス・マッキンリー</h2>
    
    <h3>アレックスについて：</h3>
    <p>
        アレックスは過去3年間でさまざまなプログラミング言語を学び、活用してきました。彼のプロジェクトは以下のように多岐にわたります：
    </p>
    <ul>
        <li>ウェブサイト</li>
        <li>ゲーム</li>
        <li>自動化スクリプト</li>
        <li>ウェブスクレイパー</li>
        <li>データサイエンスプロジェクト</li>
        <li>ダッシュボード</li>
        <li>チャットボット</li>
    </ul>
    
    <p>
        日本での20年近い教育経験を持つアレックスは、デジタル時代の未来に備えるために、
        子どもたちがプログラマーのように考える力を身につけることがますます重要であると確信しています。
    </p>
    
    <h3>教育理念：</h3>
    <p>
        アレックスは、プログラミングの専門知識と教育経験を組み合わせ、魅力的で実践的な学習環境を提供します。
        彼の目標は、生徒が創造的に問題を解決する能力を養い、デジタル時代の課題に対応するための計算論的思考スキルを身につけられるよう支援することです。
    </p>
    `
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
    document.getElementById('lang-btn').innerText = (language === 'EN') ? '日本語' : 'English';
    loadContent('summary');  // Reload the content when language is switched
});

// Load initial content (e.g., "summary") on page load
loadContent('summary');



let currentIndex = 0;

function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Event listeners for navigation
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}

// Handle window resizing
window.addEventListener('resize', updateCarousel);

