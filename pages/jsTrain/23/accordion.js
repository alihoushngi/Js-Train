// ! get elements from dom
const $ = document;
const questions = $.querySelectorAll(".accordion-list-item-question");
const answers = $.querySelectorAll(".accordion-list-item-answer");

// ? handle toggle on accordion
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    answers.forEach((answer) => {
      answer.style.display = "none";
      answer.style.transform = "scale(0)";
      e.target.dataset.question == answer.dataset.answer &&
        ((answer.style.display = "block"),
        (answer.style.transform = "scale(1)"));
    });
  });
});
