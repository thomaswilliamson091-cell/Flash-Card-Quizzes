// Flashcard Quiz Program
// Author: Thomas Williamson
// Description: This program allows users to select a subject and complete a 10-question multiple choice quiz.
// The system tracks the score and displays the final result.

// Array storing all quiz questions for each subject
// sub = subject, q = question, a = answers, c = correct answer index
const allQuestions = [

    { sub: "Maths", q: "What is 12 x 12?", a: ["142", "124", "164", "144"], c: 3 },
    { sub: "Maths", q: "Solve for x: 2x = 10", a: ["2", "5", "8", "20"], c: 1 },
    { sub: "Maths", q: "Square root of 81?", a: ["7", "8", "9", "10"], c: 2 },
    { sub: "Maths", q: "75% of 200?", a: ["100", "125", "150", "175"], c: 2 },
    { sub: "Maths", q: "Right angle degrees?", a: ["45", "90", "180", "360"], c: 1 },
    { sub: "Maths", q: "1,000 - 455?", a: ["545", "555", "645", "445"], c: 0 },
    { sub: "Maths", q: "Prime number?", a: ["4", "9", "11", "15"], c: 2 },
    { sub: "Maths", q: "15 + (3 x 4)?", a: ["72", "27", "32", "60"], c: 1 },
    { sub: "Maths", q: "Hexagon sides?", a: ["5", "6", "7", "8"], c: 1 },
    { sub: "Maths", q: "1/4 as a decimal?", a: ["0.25", "0.50", "0.75", "0.14"], c: 0 },

    { sub: "English", q: "Synonym for 'Happy'?", a: ["Sad", "Joyful", "Angry", "Tired"], c: 1 },
    { sub: "English", q: "Find the verb: 'The cat ran.'", a: ["Cat", "Ran", "The", "Fast"], c: 1 },
    { sub: "English", q: "Which is a proper noun?", a: ["city", "Paris", "street", "ocean"], c: 1 },
    { sub: "English", q: "Plural of 'Child'?", a: ["Childs", "Children", "Childrens", "Childes"], c: 1 },
    { sub: "English", q: "Correct spelling?", a: ["Recieve", "Receive", "Receve", "Riceive"], c: 1 },
    { sub: "English", q: "The 'A' in 'An apple' is an...", a: ["Adverb", "Article", "Noun", "Verb"], c: 1 },
    { sub: "English", q: "Antonym for 'Hard'?", a: ["Difficult", "Soft", "Strong", "Stiff"], c: 1 },
    { sub: "English", q: "Find the adjective: 'Blue sky'", a: ["The", "Blue", "Sky", "Is"], c: 1 },
    { sub: "English", q: "Compound word?", a: ["Laptop", "Running", "Quickly", "Jump"], c: 0 },
    { sub: "English", q: "Who Wrote 'Romeo and Juliet'?", a: ["Dickens", "Shakespeare", "Twain", "Orwell"], c: 1 },
  
    { sub: "Science", q: "Closest planet to the Sun?", a: ["Venus", "Mars", "Mercury", "Earth"], c: 2 },
    { sub: "Science", q: "Chemical symbol for Water?", a: ["CO2", "H2O", "O2", "NaCl"], c: 1 },
    { sub: "Science", q: "Gas we breathe out?", a: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"], c: 2 },
    { sub: "Science", q: "Center of an atom?", a: ["Electron", "Proton", "Nucleus", "Shell"], c: 2 },
    { sub: "Science", q: "Force pulling us to Earth?", a: ["Friction", "Magnetism", "Gravity", "Inertia"], c: 2 },
    { sub: "Science", q: "States of matter?", a: ["2", "3", "4", "5"], c: 1 },
    { sub: "Science", q: "Largest planet?", a: ["Saturn", "Jupiter", "Neptune", "Uranus"], c: 1 },
    { sub: "Science", q: "Study of living things?", a: ["Physics", "Chemistry", "Biology", "Geology"], c: 2 },
    { sub: "Science", q: "Photosynthesis part?", a: ["Roots", "Stem", "Leaf", "Flower"], c: 2 },
    { sub: "Science", q: "Boiling point of water?", a: ["90°C", "100°C", "110°C", "120°C"], c: 1 }
];

// Stores the selected subject
let selectedSubject = "";
// Stores filtered questions for chosen subject
let currentQuestions = [];
// Tracks current question number
let questionIndex = 0;
// Tracks user score
let score = 0;

function selectSubject(name) {
    selectedSubject = name;
    document.getElementById("subject-title").innerText = name + " Quiz";
    showScreen("start-screen");
}

function startQuiz() {
    currentQuestions = [];
    for (let i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].sub === selectedSubject) {
            currentQuestions.push(allQuestions[i]);
        }
    }


    currentQuestions.sort(function() { return 0.5 - Math.random() }); // Randomises question order

    questionIndex = 0;
    score = 0;
    showScreen("quiz-screen");
    displayQuestion();
}

function displayQuestion() {
    let data = currentQuestions[questionIndex];
    document.getElementById("progress").innerText = "Question " + (questionIndex + 1) + " of 10";
    document.getElementById("question-text").innerText = data.q;
    document.getElementById("next-btn").classList.add("hidden");

    let div = document.getElementById("answer-buttons");
    div.innerHTML = "";  // Clears previous answers


    for (let i = 0; i < 4; i++) {
        let b = document.createElement("button");
        b.innerText = data.a[i];
        b.onclick = function() { checkAnswer(i, data.c, b); };
        div.appendChild(b);
    }
}

function checkAnswer(chosen, correct, clickedButton) {
    let buttons = document.getElementById("answer-buttons").children;
    
    if (chosen === correct) {
        clickedButton.classList.add("correct");
        score = score + 1;
    } else {
        clickedButton.classList.add("wrong");
        buttons[correct].classList.add("correct"); 
    }


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    questionIndex = questionIndex + 1;
    if (questionIndex < 10) {
        displayQuestion();
    } else {
        showScreen("result-screen");
        document.getElementById("score-display").innerText = score;
    }
}

function goHome() {
    showScreen("home-screen");
}

function showScreen(screenId) {
    
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    
    document.getElementById(screenId).classList.remove("hidden");
}