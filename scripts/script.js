const form = document.forms.addanote;
const inputForm = form.elements.addtext;
const submitForm = form.elements.submitform;
const template = document.querySelector(".addnew-template").content;
const listCards = document.querySelector(".notes-list__main");
const listStarred = document.querySelector(".notes-list__starred");

const initialText = ["Купить хлеб", "Погулять", "Поиграть с собакой"];


initialText.forEach((el) => {
    addNewNote(el);
    });

function addNewNote(textOfNote) {
  const newNote = template.querySelector(".card").cloneNode(true);
  newNote.querySelector('.card__text').textContent = textOfNote;
  const notesForm = newNote.querySelector(".card__form");
  const textEditInForm = notesForm.querySelector(".card__input-text");
  textEditInForm.value = textOfNote;
  listCards.append(newNote); /* в конце списка */ 
}

function deleteNote(evt) {
const noteToDelete = evt.currentTarget.closest('.card');
noteToDelete.remove();
}

function editNote(evt) {
    const noteToEdit = evt.currentTarget.closest('.card');
    noteToEdit.querySelector('.card__text').classList.toggle('card__text_hide');
    noteToEdit.querySelector('.card__form').classList.toggle('card__form_show');
}
function starNote(evt) {
    const noteToEdit = evt.currentTarget.closest('.card');
    noteToEdit.querySelector('.card__button-star').classList.toggle('card__button-star_starred');
}

function saveEditedNote(evt) {    
    evt.preventDefault();
    const currentCard = evt.currentTarget.closest('.card');
    currentCard.querySelector('.card__text').textContent = evt.currentTarget.querySelector('.card__input-text').value;
    currentCard.querySelector('.card__text').classList.toggle('card__text_hide');
    currentCard.querySelector('.card__form').classList.toggle('card__form_show');
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    addNewNote(inputForm.value);
    form.reset();
});

const allCards = document.querySelectorAll('.card');
allCards.forEach((card) => {
card.querySelector('.card__button-delete').addEventListener('click',(evt) => {
    deleteNote(evt);
}); 
card.querySelector('.card__button-star').addEventListener('click',(evt) => {
    starNote(evt);
}); 
card.querySelector('.card__button-edit').addEventListener('click',(evt) => {
    editNote(evt);
}); 
card.querySelector('.card__text').addEventListener('dblclick',(evt) => {
    editNote(evt);
}); 
card.querySelector('.card__form').addEventListener('submit',(evt) => {
    saveEditedNote(evt);
}); 


});