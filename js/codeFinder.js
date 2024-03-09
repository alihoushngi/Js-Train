// * find the code wrappers
const codeWrappers = document.querySelectorAll(".code-wrapper");
const data = Array.from(codeWrappers);
const variableRegex = /\b(const|var|let|if|else)\b/g;
const bracketRegex = /(\[\]|\(\))/g;
const numberRegex = /\d+/g;

data.forEach((data) => {
  const items = Array.from(data.children);
  items.forEach((tags) => {
    if (tags.innerHTML.includes("//")) {
      tags.classList.add("code-comment");
    }
    if (tags.innerHTML.includes("//")) {
      tags.classList.add("code-comment");
    }
    if (
      tags.innerHTML.includes("const") ||
      tags.innerHTML.includes("var") ||
      tags.innerHTML.includes("let") ||
      tags.innerHTML.includes("if") ||
      tags.innerHTML.includes("else")
    ) {
      const variables = tags.innerHTML.replace(
        variableRegex,
        "<span class='code-variable'>$&</span>"
      );
      tags.innerHTML = variables;
    }
    if (
      tags.innerHTML.includes("[") ||
      tags.innerHTML.includes("]") ||
      tags.innerHTML.includes("(") ||
      tags.innerHTML.includes(")")
    ) {
      if (tags.innerHTML.includes("[")) {
        const leftBrackets = tags.innerHTML.replace(
          /\[/g,
          "<span class='code-arrayBracket'>[</span>"
        );
        tags.innerHTML = leftBrackets;
      }
      if (tags.innerHTML.includes("]")) {
        const rightBrackets = tags.innerHTML.replace(
          /\]/g,
          "<span class='code-arrayBracket'>]</span>"
        );
        tags.innerHTML = rightBrackets;
      }
      if (tags.innerHTML.includes("(")) {
        const leftParentheses = tags.innerHTML.replace(
          /\(/g,
          "<span class='code-parentheses'>(</span>"
        );
        tags.innerHTML = leftParentheses;
      }
      if (tags.innerHTML.includes(")")) {
        const rightParentheses = tags.innerHTML.replace(
          /\)/g,
          "<span class='code-parentheses'>)</span>"
        );
        tags.innerHTML = rightParentheses;
      }
    }
    if (numberRegex.test(tags.innerHTML)) {
      const numbers = tags.innerHTML.replace(
        numberRegex,
        "<span class='code-number'>$&</span>"
      );
      tags.innerHTML = numbers;
    }
  });
});
