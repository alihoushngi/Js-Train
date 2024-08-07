// ? Get elements from the DOM
const $ = document;
const list = $.querySelector("#tagGeneratorList");
const input = $.querySelector("#tagGeneratorInput");
const counter = $.querySelector("#tagGeneratorCounter");
const remover = $.querySelector("#TagGeneratorRemover");

let tags = ["Ali", "Mohammad"];
// ! period of create tags
let maxTags = 10;
const tagCounter = () => {
  input.focus();
  counter.innerHTML = maxTags - tags.length;
};

// remove all li
const removeAllLis = () => {
  list.querySelectorAll("li").forEach((tag) => tag.remove());
};

// * tag remover function
const tagRemover = (e, tagElem) => {
  // ? we have to access or parent element get in e to can be delete
  e.parentElement.remove();

  // ? we have to access to tag element index to remove from array
  myTag = tags.indexOf(tagElem);
  tags.splice(myTag, 1);

  // ? at end for update or numbers of tag in dom , call tag counter function
  tagCounter();
};

// ? show tags function
const showTags = () => {
  // * for no repeat show my tags in input , we delete all li
  removeAllLis();

  // * create new li to create new tag
  let newLi = "";

  // * for added or tag at end of tags we have , reverse it and added new tag
  [...tags].reverse().forEach((tag) => {
    newLi += `<li class="tagGenerator-list-item">${tag} <i class="tagGenerator-list-item-trash" onclick="tagRemover(this , '${tag}')"></i> </li>`;
  });

  // * add to list
  list.insertAdjacentHTML("afterbegin", newLi);

  // * update or tag counter number
  tagCounter();
};

// todo added input text to array
const addTag = (e) => {
  // ! check when enter key on keyboard do something
  if (e.key == "Enter") {
    let tagTitle = e.target.value;

    // ! change or any inputs word to lowerCase
    let normalizedName = tagTitle.toLowerCase();
    // ! check if name not in array with any formation
    let nameExists = tags.some((tag) => tag.toLowerCase() === normalizedName);

    // ! have 10 period tag in our array and now we check it
    if (tags.length < 10 && !nameExists) {
      // ! user cant enter empty
      if (tagTitle.length > 0) {
        // ! check if user use , and write more than one word without press enter , split and get array and push
        tagTitle.split(",").forEach((tag) => {
          tags.push(tag);
        });
      }
    }

    // ! do empty input
    e.target.value = "";
    showTags();
  }
};
input.addEventListener("keypress", addTag);

showTags();
tagCounter();

// todo function for remove all item
remover.addEventListener("click", () => {
  tags.length = 0;
  removeAllLis();
  tagCounter();
});
