var questions = [];
var questionCounter = 0;

function init() {
  initQuestions();
}

function getQuestion() {
  var r = Math.floor(Math.random() * questions.length);
  var question = questions[r];
  questions.splice(r,1);
  var qarray = question.split(',');
  return qarray[0];
}

function runQuiz () {
  $("#play-btn").hide()
  var q = getQuestion();
  questionCounter++;
  displayQuestion(q ,questionCounter)
}

function displayQuestion (question, qNumber) {
  var numberElement = document.getElementById("q-number");
  var questionNo = "Question ".concat(qNumber);
  numberElement.innerHTML = questionNo;

  var questionElement = document.getElementById("question");
  questionElement.innerHTML = question;

  document.getElementById("game1").style.display= "block";
}

function checkAnswer(btn) {
  var userAns = document.getElementById(btn).innerHTML;
  
  runQuiz();
}
