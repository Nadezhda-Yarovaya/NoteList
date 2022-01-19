import { Note } from './Note.js';
const form = document.forms.addanote;
const inputForm = form.elements.addtext;
const listCards = document.querySelector(".notes-list__main");
const initialNotes = ["Купить хлеб", "Погулять", "Поиграть с собакой"];

initialNotes.forEach((text) => {
    const thisCard = makeNewNote(text);
    listCards.append(thisCard);
});

function makeNewNote(text) {
    const newNote = new Note({ textNew: text });
    return newNote.addNewNote();
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const thisCard = makeNewNote(inputForm.value);
    listCards.append(thisCard);
    form.reset();
});
