$(document).ready(function () {

    //importing the variables from the DOM
    var startQuizEl = $("#start-quiz")
    var questionsEl = $("#questions")
    var endScreenEl = $("#end-screen")
    var startButtonEl = $("#start-button")
    var correctAnswers = 0

    //declaring variables
    var questionsIndex = 0;

    //the questions, options, and answers are all placed in one array
    var questions = [
        {
            title: "question 1",
            options: [1, 2, 3, 4],
            answer: 2,

        },
        {
            title: "question 2",
            options: [5, 6, 7, 8],
            answer: 7,

        },
        {
            title: "question 3",
            options: [9, 10, 11, 12],
            answer: 12,

        },
        {
            title: "question 4",
            options: [13, 14, 15, 16],
            answer: 13,

        },
        {
            title: "question 5",
            options: [17, 18, 19, 20],
            answer: 18,

        },
    ];

    //this hides the divs on the initial load out
    questionsEl.hide()
    endScreenEl.hide()

    //this begins the quiz; shows the quiz div/hides the start div
    function beginQuiz() {
        startQuizEl.hide();
        questionsEl.show();
        console.log("i did it!")

        generateQuestion();
    }


    function generateQuestion() {
        if (questionsIndex === questionsEl.length)
            endQuiz();
    }

    var currentQuestion = questions[questionsIndex];

})