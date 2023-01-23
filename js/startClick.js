function startClick() {
  var startPostTest = document.getElementById("startPostTest");
  var formQuestion = document.getElementById("quiz");

  startPostTest.classList.add("post-test-start");
  formQuestion.classList.remove("post-test-start");
  setTimeout(startPostTest.classList.add("d-none"), 0.2);
}

var currentQuestion = 1;
var totalQuestions = 2;

document.getElementById("question-" + currentQuestion).classList.add("active");

// Next button
var nextButton = document.getElementsByClassName("next-button");
for (var i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener("click", function () {
    if (currentQuestion < totalQuestions) {
      document
        .getElementById("question-" + currentQuestion)
        .classList.remove("active");
      currentQuestion++;
      document
        .getElementById("question-" + currentQuestion)
        .classList.add("active");
    } else {
      alert("Quiz selesai!");
    }
  });
}

// Previous button
var prevButton = document.getElementsByClassName("prev-button");
for (var i = 0; i < prevButton.length; i++) {
  prevButton[i].addEventListener("click", function () {
    if (currentQuestion > 1) {
      document
        .getElementById("question-" + currentQuestion)
        .classList.remove("active");
      currentQuestion--;
      document
        .getElementById("question-" + currentQuestion)
        .classList.add("active");
    }
  });
}
