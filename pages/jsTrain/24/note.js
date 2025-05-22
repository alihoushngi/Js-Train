// ? get elements from dom
const $ = document;
const addNoteBox = $.querySelector("#note-add");
const modal = $.querySelector("#modal-back");
const modalTitle = $.querySelector("#modal-title");
const modalInput = $.querySelector("#modal-input");
const modalDesc = $.querySelector("#modal-desc");
const modalButton = $.querySelector("#modal-button");
const modalExitButton = $.querySelector("#modal-button-exit");
const modalBackDrop = $.querySelector(".note-modal-back");

// ! modal state
let modalState = false;

// * modal Handler
addNoteBox.addEventListener("click", () => {
  modalState = true;
  if (modalState) {
    modal.style.display = "flex";
    modalTitle.textContent = "اضافه کردن یادداشت";
  }
});

// * modal exit button handler
modalExitButton.addEventListener("click", () => {
  modalState = false;
  modal.style.display = "none";
  modalTitle.textContent = "";
});

// * modal on backdrop click handler
modalBackDrop.addEventListener("click", (e) => {
  if (e.target.className == "note-modal-back") {
    modalState = false;
    modal.style.display = "none";
    modalTitle.textContent = "";
  }
});

modalButton.addEventListener("click", (e) => {
    
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const fullDate = `${year}/${month}/${day}`;

  const lastNote = getNotesFromLocalStorage();
  

  if (modalInput.value.length > 0) {
    let note = {
      title: modalInput.value,
      desc: modalDesc.value,
      id: lastNote.length + 1,
      date: fullDate,
    };
    modalInput.value = "";
    modalDesc.value = "";

    lastNote.push(note);

    // data must be added to local storage as string
    localStorage.setItem("jsNote", JSON.stringify(lastNote));

    // todo update
    putNotesOnHtml();

    // ? close modal
    modalState = false;
    modal.style.display = "none";
    modalTitle.textContent = "";
    // window.location.reload();
  }
});

// * function for fetch data from local storage onload page
const getNotesFromLocalStorage = () => {
  let notes;
  const localStorageData = localStorage.getItem("jsNote");
  if (localStorageData === null) {
    notes = [];
  } else {
    // data must be came back to us as array to we can map on
    notes = JSON.parse(localStorageData);
  }
  return notes;
};

// todo put data from local storage to html
const putNotesOnHtml = () => {
  const notes = getNotesFromLocalStorage();
  if (notes.length > 0) {
    let noteHtml = "";
    notes.forEach((element) => {
      noteHtml += `
       <div class="note-box-data">
            <h4 class="note-box-data-title">${element.title}</h4>
            <p class="note-box-data-info">${
              element.desc ? element.desc : ""
            }</p>
            <div class="note-box-data-footer">
                <span class="note-box-data-footer-date">${element.date}</span>
                <div class="note-box-data-footer-dropdown">
                    <i class="fa-solid fa-ellipsis note-box-data-footer-dropdown-icon" id="note-setting" data-note="${
                      element.id
                    }"></i>
                    <div class="note-box-data-footer-dropdown-item" id="note-setting-content" data-id="${
                      element.id
                    }">
                        <span data-edit="${
                          element.id
                        }" id="note-setting-edit" class="note-box-data-footer-dropdown-item-edit" onclick={editNoteHandler}><i
                                class="far fa-edit"></i>Edit</span>
                        <span data-delete="${
                          element.id
                        }" id="note-setting-delete" class="note-box-data-footer-dropdown-item-delete" ><i class="fas fa-trash"></i>
                            delete</span>
                    </div>
                </div>
            </div>
        </div>
      `;
    });
    document.querySelector("#notes-list").innerHTML = noteHtml;
  } else {
    document.querySelector("#notes-list").innerHTML = "";
  }
};
putNotesOnHtml();

const noteSettings = document.querySelectorAll("#note-setting");
const noteEdit = document.querySelectorAll("#note-setting-edit");
const noteDelete = document.querySelectorAll("#note-setting-delete");
const notesSettingItem = document.querySelectorAll("#note-setting-content");

const settingHandler = (e) => {
  console.log(e.target);
  notesSettingItem.forEach((item) => {
    item.style.display = "none";
    if (e.target.dataset.note == item.dataset.id) {
      item.style.display = "block";
    }
  });
};

const editNoteHandler = (e) => {
  const lastNote = getNotesFromLocalStorage();
  lastNote.forEach((item) => {
    if (item.id == e.target.dataset.edit) {
      modalState = true;
      if (modalState) {
        modal.style.display = "flex";
        modalTitle.textContent = "ویرایش یادداشت";
        modalInput.value = item.title;
        if (modalDesc != null) {
          modalDesc.value = item.desc;
        }
      }
      const editedData = lastNote.filter((data) => data.id == item.id);
      editedData.forEach((note) => {
        note.title = modalInput.value;
        note.desc = modalDesc.value;
        console.log(editedData);
      });
    }
  });
};

const deleteNoteHandler = (e) => {
  const lastNote = getNotesFromLocalStorage();
  lastNote.forEach((item) => {
    if (item.id == e.target.dataset.delete) {
      const newItems = lastNote.filter((data) => data.id != item.id);
      localStorage.setItem("jsNote", JSON.stringify(newItems));
      putNotesOnHtml();
      window.location.reload();
    }
  });
};

noteEdit.forEach((item) => {
  item.addEventListener("click", editNoteHandler);
});

noteDelete.forEach((item) => {
  item.addEventListener("click", deleteNoteHandler);
});

noteSettings.forEach((noteSetting) => {
  noteSetting.addEventListener("click", settingHandler);
});
