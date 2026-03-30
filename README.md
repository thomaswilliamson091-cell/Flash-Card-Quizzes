Flashcard Quiz Help 
A browser-based interactive flashcard quiz for students revising Maths, English, and Science.
Built with HTML5, CSS3, and JavaScript as part of the HSC Software Engineering course.

Project Overview
This web application allows students to select a subject and answer 10 randomised multiple-choice questions. Each question displays four answer options. After selecting an answer, correct choices are highlighted green and incorrect choices are highlighted red (with the correct answer also revealed in green). A running score is tracked and displayed at the end of the quiz.

Features

Homepage with subject selection (Maths, English, Science)
10 randomised multiple-choice questions per subject
Instant visual feedback — green for correct, red for incorrect
Live question progress tracker (e.g. "Question 3 of 10")
Final score screen with option to return to the homepage
Clean, responsive layout built with vanilla HTML, CSS, and JavaScript


File Structure

├── index.html      # Main HTML structure and screen layouts
├── style.css       # All styling, layout, and answer feedback colours
└── script.js       # Quiz logic, question data, scoring, and screen control


Technologies Used
HTML, CSS and JS

Version Control Log
This repository uses Git for version control. Each commit documents a specific stage of development. Below is the intended commit structure to demonstrate ongoing progress:
Commit MessageWhat Was DoneInitial commit — project scaffold createdCreated blank index.html, style.css, and script.
js files with basic folder structurefeat: HTML structure added for all four screensBuilt home-screen, start-screen, quiz-screen, and result-screen divs 
index.htmlfeat: CSS base styles added — layout, container, buttonsAdded body layout, .container styling, .btn classes, and subject colour classes (maths/english/science)feat:
Question data: added to script.js for all three subjectsAdded allQuestions array with 10 questions each for Maths, English, and Sciencefeat: selectSubject() and showScreen() functions implementedImplemented subject selection logic and screen-switching 
functionfeat: startQuiz() implemented with filter and randomisationAdded question filtering by subject and array shuffle using sort() and Math.random()
feat: displayQuestion() implemented — renders question and answer buttons dynamicallyUsed createElement to dynamically build answer buttons and display question
textfeat: checkAnswer() implemented — green/red highlight feedback addedAdded correct/incorrect class toggling, score increment, and button disable
logicfeat: nextQuestion() and result screen implementedAdded question progression logic and final score display
result-screenfix: next button now hidden at start of each questionFixed bug where next button remained visible at the start of new questions 
questionsstyle: CSS polished — quiz-box border, answer button spacing, start buttonRefined visual styling for quiz layout and button appearancedocs: 
README.md addedAdded project documentation, file structure, and version control log
