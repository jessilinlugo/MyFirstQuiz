$(document).ready(function () {

    //importing the variables from the DOM
    var startQuizEl = $("#start-quiz");
    var questionsTitle = $("#quesTitle");
    var questionsAnswer = $("#quesAnswer");
    var endScreenEl = $("#end-screen");
    var startButtonEl = $("#start-btn");
    var correctAnswers = 0;

    //declaring variables
    var questionsIndex = 0;

    //the questions, options, and answers are all placed in one array
    var questions = [
        {
            title: "Commonly used data types do NOT include : ",
            options: ["strings", "alerts", "booleans","numbers"],
            answer: "alerts",

        },
        {
            title: "The condition in an if/else statement is enclosed within ...",
            options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
            answer: "parenthesis",

        },
        {
            title: "Arrays in JavaScript can be used to store ...",
            options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: "all of the above",

        },
        {
            title: "String values must be enclosed within *WHAT* when being assigned to variables?",
            options: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: "quotes",

        },
        {
            title: "A very useful tool used during development and debugging for printing content to the debugger is: ",
            options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
            answer: "console.log",

        },
    ];

    //this creates a variable for each question in the array
    var currentQuestion = questions[questionsIndex];

    //this hides the divs on the initial load out
    questionsTitle.hide()
    questionsAnswer.hide()
    endScreenEl.hide()

    //this begins the quiz; shows the quiz div/hides the start div
    function beginQuiz() {
        startQuizEl.hide();
        questionsTitle.show();
        questionsAnswer.show();
        console.log("i did it!");

        questionsTitle.html(currentQuestion.title);
        
        generateQuestion();
    }

//this generates HTML so as to create text to display for the user 
    function generateQuestion() {

        currentQuestion.options.forEach(function (option) {
            var ansButton = document.createElement("button");
            ansButton.setAttribute("class", "options");
            ansButton.setAttribute("value", option);
            ansButton.textContent = option;
            ansButton.onclick = nextQuestion;
            questionsAnswer.append(ansButton);

         
    })

        if (questionsIndex === questionsTitle.length)
            endQuiz();
    }

//this is supposed to move the quiz forward
    function nextQuestion() {
        questionsIndex++
        console.log("click worked!")
    }

    startButtonEl.click(beginQuiz);
})

