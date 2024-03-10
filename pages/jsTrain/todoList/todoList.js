// get elements from dom
const submitButton = document.querySelector("#submit-task");
const note = document.querySelector("#todoForm");
const inputValue = document.querySelector("#todoTask");
const result = document.querySelector("#todoResult");

// add data to local storage
const addToLocalStorage = (item) => {
  const notes = getNotesFromLocalStorage();
  notes.push(item);
  // data must be added to local storage as string
  localStorage.setItem("notes", JSON.stringify(notes));
};

// handel data in form and append to result
const formHandler = (e) => {
  e.preventDefault();
  const data = inputValue.value;
  const item = document.createElement("li");
  item.classList.add("todo_form-result--item");
  const removeButton = document.createElement("a");
  removeButton.classList.add("todo_form-result--rmvButton");
  removeButton.setAttribute("id", "removeButton");
  // append data get from user to my item
  item.appendChild(document.createTextNode(data));
  item.appendChild(removeButton);
  result.appendChild(item);

  // call add to local storage function to save data
  addToLocalStorage(data);
  inputValue.value = null;
};

//function for remove from local storage
const removeFromLocalStorage = (nodeContent) => {
  // delete from local storage
  const noteFromLocalStorage = getNotesFromLocalStorage();
  noteFromLocalStorage.forEach((note, index) => {
    if (note === nodeContent) {
      console.log(index);
      noteFromLocalStorage.splice(index, 1);
    }
  });
  localStorage.setItem("notes", JSON.stringify(noteFromLocalStorage));
};

// remove button handler function for delete items
const removeButtonHandler = (e) => {
  if (e.target.id === "removeButton") {
    e.target.parentElement.remove();
  }
  removeFromLocalStorage(e.target.parentElement.textContent);
};

// function for fetch data from local storage onload page
const getNotesFromLocalStorage = () => {
  let notes;
  const localStorageData = localStorage.getItem("notes");
  if (localStorageData === null) {
    notes = [];
  } else {
    // data must be came back to us as array to we can map on
    notes = JSON.parse(localStorageData);
  }
  return notes;
};

// get data from local storage and print
const localStorageDataLoaded = () => {
  const notes = getNotesFromLocalStorage();

  notes.forEach((element) => {
    const item = document.createElement("li");
    item.classList.add("todo_form-result--item");
    const removeButton = document.createElement("a");
    removeButton.classList.add("todo_form-result--rmvButton");
    removeButton.setAttribute("id", "removeButton");

    // append data get from user to my item
    item.appendChild(document.createTextNode(element));
    item.appendChild(removeButton);
    result.appendChild(item);
  });
};

// event listeners
const eventListeners = () => {
  // handel form submit event
  note.addEventListener("submit", formHandler);

  // handel remove button event
  result.addEventListener("click", removeButtonHandler);

  // get data from local storage when page onload
  document.addEventListener("DOMContentLoaded", localStorageDataLoaded);
};
eventListeners();
