import {Note} from './Note.js';
const form = document.forms.addanote;
const inputForm = form.elements.addtext;
const submitForm = form.elements.submitform;
const listCards = document.querySelector(".notes-list__main");
const listStarred = document.querySelector(".notes-list__starred");
const starredText = document.querySelector(".notes-list-stared");
/* delete all not necessary constants */

/* на новодобавленном не хочет работать функционал 
тут наверно про время добавления !! будет ли с классом работать? */

const initialText = ["Купить хлеб", "Погулять", "Поиграть с собакой"];

/* initial cards */
initialText.forEach((text) => {
    const thisCard = makeNewNote(text);  
    listCards.append(thisCard); /* в конце списка */   
    });

function makeNewNote(textNew){    
    const newNote = new Note(textNew);
   return newNote.addNewNote();
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const thisCard = makeNewNote(inputForm.value);
    listCards.append(thisCard);
    form.reset();
});

/* all stars also transfer AND add duplicate */
function starNote(evt) {
    const currentCard = evt.currentTarget.closest('.card');
    currentCard.querySelector('.card__button-star').classList.toggle('card__button-star_starred');
    const appendToStarOrNot = currentCard.querySelector('.card__button-star').classList.contains('card__button-star_starred');
    if (appendToStarOrNot) {
    listStarred.append(currentCard); /*auto delete from listCards*/
    } else {
        listCards.append(currentCard); 
    }
    /* check if list of stars empty*/
    const allStarredCards = listStarred.querySelectorAll('.card');
    if (allStarredCards.length === 0) {
        starredText.classList.remove('notes-list-stared_none');
    }
    else {
        starredText.classList.add('notes-list-stared_none');
    }
}




const allCards = document.querySelectorAll('.card');
allCards.forEach((card) => {

card.querySelector('.card__button-star').addEventListener('click',(evt) => {
    starNote(evt);
}); 

});