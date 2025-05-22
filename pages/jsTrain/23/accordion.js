// ! get elements from dom
const $ = document;
const questions = $.querySelectorAll(".accordion-list-item-question");
const answers = $.querySelectorAll(".accordion-list-item-answer");

// ? handle toggle on accordion
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    answers.forEach((answer) => {
      // * set style for close all ( if a accordion is open )
      answer.style.height = "0";
      answer.style.padding = "0";
      answer.style.overflow = "hidden";

      // todo check if answer have active class , close it and if not open it
      if (!answer.classList.contains("active")) {
        e.target.dataset.question == answer.dataset.answer &&
          ((answer.style.height = `${answer.scrollHeight + 25}px`),
          (answer.style.padding = "1rem"),
          (answer.style.overflow = "visible"),
          answer.classList.add("active"));
      } else {
        answer.classList.remove("active");
        answer.style.height = "0";
        answer.style.padding = "0";
        answer.style.overflow = "hidden";
      }
    });
  });
});
