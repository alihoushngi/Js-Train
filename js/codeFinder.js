// * find the code wrappers
// ! get code wrapper section from any component or html file
const codeWrappers = document.querySelectorAll(".code-wrapper");

// ? create array of codes for analyze
const data = Array.from(codeWrappers);

// todo regex's for search and find some words
const variableRegex = /\b(const|var|let|if|else|null|=>)\b/g;
const ArrayRegex = /\b(Array)\b/g;
const arrayAttributeRegex = /\b(from|includes|add|replace|forEach|map|test)\b/g;
const JsAttributeRegex = /\b(.innerHTML|.classList)\b/g;
const bracketRegex = /(\[\]|\(\))/g;
const numberRegex = /\d+/g;

// Conditions for adding classes based on comment patterns
const commentConditions = [
  { pattern: "// *", className: "code-comment-star" },
  { pattern: "// !", className: "code-comment-red" },
  { pattern: "// ?", className: "code-comment-blue" },
  { pattern: "// todo", className: "code-comment-yellow" },
  { pattern: "//", className: "code-comment" },
];

// ! map on data
data.forEach((data) => {
  const items = Array.from(data.children);
  // conditional for any attribute to set up color
  items.forEach((tags) => {
    const textContent = tags.textContent;
    const matches = textContent.match(/"([^"]*)"/g);
    const lines = tags.innerHTML.split("\n");
    lines.forEach((line) => {
      const trimmedLine = line.trim();
      commentConditions.forEach((condition) => {
        if (trimmedLine.startsWith(condition.pattern)) {
          tags.classList.add(condition.className);
        }
      });
    });
    if (matches) {
      matches.forEach((match) => {
        if (tags.innerHTML.includes(match)) {
          const quotes = tags.innerHTML.replace(
            matches,
            "<span class='code-strings'>$&</span>"
          );
          tags.innerHTML = quotes;
        }
      });
    }
    if (tags.innerHTML.includes("Array")) {
      const arrays = tags.innerHTML.replace(
        ArrayRegex,
        "<span class='code-array'>$&</span>"
      );
      tags.innerHTML = arrays;
    }
    if (
      tags.innerHTML.includes(".innerHTML") ||
      tags.innerHTML.includes(".classList")
    ) {
      const jsAttributes = tags.innerHTML.replace(
        JsAttributeRegex,
        "<span class='code-jsAttribute'>$&</span>"
      );
      tags.innerHTML = jsAttributes;
    }

    if (
      tags.innerHTML.includes("const") ||
      tags.innerHTML.includes("var") ||
      tags.innerHTML.includes("let") ||
      tags.innerHTML.includes("if") ||
      tags.innerHTML.includes("else") ||
      tags.innerHTML.includes("null") ||
      tags.innerHTML.includes("=>")
    ) {
      const variables = tags.innerHTML.replace(
        variableRegex,
        "<span class='code-variable'>$&</span>"
      );
      tags.innerHTML = variables;
    }
    if (
      tags.innerHTML.includes(".from") ||
      tags.innerHTML.includes(".includes") ||
      tags.innerHTML.includes(".add") ||
      tags.innerHTML.includes(".replace") ||
      tags.innerHTML.includes(".forEach") ||
      tags.innerHTML.includes(".map") ||
      tags.innerHTML.includes(".test")
    ) {
      const arrayAttributes = tags.innerHTML.replace(
        arrayAttributeRegex,
        "<span class='code-arrayAttribute'>$&</span>"
      );
      tags.innerHTML = arrayAttributes;
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
