var questions = [];

function init() {

}

function setQuestions() {
  
}

function runQuiz () {
  $("#play-btn").hide()
  displayQuestion("Are you ... ?",1)
}

function displayQuestion (question, qNumber) {
  var numberElement = document.getElementById("q-number");
  var questionNo = "Question ".concat(qNumber);
  numberElement.innerHTML = questionNo;

  var questionElement = document.getElementById("question");
  questionElement.innerHTML = question;

  document.getElementById("game1").style.display= "block";


}
