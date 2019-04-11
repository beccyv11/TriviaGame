$(document).ready(function(){
    $("#quizContainer").hide();
});

var questions = [{
    "question": "How much does a RTR Unlimited Subscription Cost?",
    "option1": "$200",
    "option2": "$150",
    "option3": "$89",
    "option4": "$159",
    "answer": "4"
}, {
    "question": "How many pounds of clothing does the average woman throw aqay per year? ", 
    "option1" : "55lbs",
    "option2" : "100lbs", 
    "option3" : "82lbs",
    "option4" : "74lbs",
    "answer" : "3"
 }, {
     "question" : "How many items can an Unlimited Customer rent at one time?",
     "option1" : "4", 
     "option2" : "3", 
     "option3" : "6", 
     "option4" : "As many as they want!", 
     "answer" : "4"
 }, {
     "question": "How long can an Unlimited Member hold onto their items?", 
     "option1" : "30 days", 
     "option2" : "4 or 8 days", 
     "option3" : "As long as they want", 
     "option4" : "4 months", 
     "answer" : "3"
 }, {
     "question" : "How many retail locations are there?", 
     "option1" : "5", 
     "option2" : "3", 
     "option3" : "12", 
     "option4" : "8", 
     "answer" : "1"
 }
]


var currentQuestion= 0;
var answers = ["$159", "82lbs", "As many as they want!", "As long as they want", "5"];
var score = 0;
var totalQuestions= questions.length; 

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById('question');
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var resultCont = document.getElementById("result");

// Timer

var total_seconds=60*0.34;
// var c_minutes=parseInt(total_seconds/60);
var c_seconds=parseInt(total_seconds%60);

function checkTime (){
    document.getElementById("quiz-time-left").innerHTML
    ='Time Left:  ' + c_seconds + 'seconds';
    if (total_seconds <=0){
        setTimeout('document.quiz.submit()', 1);
    }
    else {
        total_seconds =total_seconds -1;
        c_minutes =parseInt(total_seconds/60);
        c_seconds= parseInt(total_seconds%60);
        setTimeout("checkTime()", 1000);
    }
    if (c_seconds ===0){
        $("#quizContainer").empty();
        $("#quizContainer").html("<div id=win><h1>Time is Up!</h1><br><img id='closet' src='assets/images/timer.jpg'></div>");
    }
} 

//stop time
function freeze(){
clearTimeout(c_seconds);
}

// On Click Event 

$(".btn").click(function(){
    $(".btn").hide();
    setTimeout("checkTime()", 1000);
    loadQuestion(currentQuestion);
    document.getElementById("quizContainer").style.display="block";
});

$(".option").click(function(){
    var answers = ["159", "82lbs", "As many as they want!", "As long as they want", "5"];
    var selectedOption =document.querySelector('input[type=radio]:checked');
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        $("#quizContainer").empty();
        $("#quizContainer").html("<div id=win><h1>Correct Answer</h1><br><img id='closet' src='assets/images/rtr-unlimited.jpg'></div>");
        freeze();
    }
    else {
        $("#quizContainer").empty();
        $("#quizContainer").html("<div id=win><h1>Incorrect Answer</h1><br><p id='answer'></p><img id='closet' src='assets/images/empty.jpg'></div>");
        $("#answer").append("The Correct answer is   " + answers[currentQuestion])
    }
});

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent =(questionIndex +1) +'.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion (){
    var selectedOption =document.querySelector('input[type=radio]:checked');
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        $("#quizContainer").empty();
        $("#quizContainer").html("<div id=win><h1>Correct Answer</h1><br><img src='././images/rtr-unlimited.jpg'></div>");
    }
    selectedOption.checked= false;
    currentQuestion++;
    if(currentQuestion == totalQuestions-1){
        setTimeout.textContent= 'Finish';
    }
    if(currentQuestion == totalQuestions){
        containerQ.style.display = 'none';
        resultCont.style.diplay  = '';
        resultCont.textContent = 'Your Score:' +score;
        return;
    }
    loadQuestion(currentQuestion);
}

