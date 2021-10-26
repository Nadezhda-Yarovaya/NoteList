class Note {
    constructor() {

    }
}

function addNewNote(textOfNote) {
    const newNote = template.querySelector(".card").cloneNode(true);
    newNote.querySelector('.card__text').textContent = textOfNote;
    const notesForm = newNote.querySelector(".card__form");
    const textEditInForm = notesForm.querySelector(".card__input-text");
    textEditInForm.value = textOfNote;
    listCards.append(newNote); /* в конце списка */   
  }

export {Note};