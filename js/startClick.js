function startClick() {
  var startPostTest = document.getElementById("startPostTest");
  var formQuestion = document.getElementById("postTestQuestion1");

  startPostTest.classList.add("post-test-start");
  formQuestion.classList.remove("post-test-start");
  setTimeout(startPostTest.classList.add("d-none"), 0.2);
}

function nextQuestion() {
  var formQuestion = document.getElementById("postTestQuestion1");
  var formQuestionNext = document.getElementById("postTestQuestion2");

  formQuestion.classList.add("post-test-start");
  formQuestionNext.classList.remove("post-test-start");
  setTimeout(formQuestion.classList.add("d-none"), 0.2);
}
