
class Note {
    constructor({ textNew }) {
        this._text = textNew;
        this._template = document.querySelector(".addnew-template").content;
        this._newNote = this._template.querySelector(".card")
        this.listStarred = document.querySelector(".notes-list__starred");
        this.starredText = document.querySelector(".notes-list-stared");
        this._listCards = document.querySelector(".notes-list__main");
    }

    _deleteNote() {
        this._finalNote.remove();
    }

    _editNote() {
        this._finalNote.querySelector('.card__text').classList.toggle('card__text_hide');
        this._finalNote.querySelector('.card__form').classList.toggle('card__form_show');
    }

    _saveEditedNote(evt) {
        evt.preventDefault();
        this._cardText.textContent = this._inputText.value;
        this._cardText.classList.toggle('card__text_hide');
        this._finalNote.querySelector('.card__form').classList.toggle('card__form_show');
    }

    _setEventListeners() {
        this._finalNote.querySelector('.card__button-delete').addEventListener('click', () => {
            this._deleteNote();
        });

        this._finalNote.querySelector('.card__button-edit').addEventListener('click', () => {
            this._editNote();
        });

        this._finalNote.querySelector('.card__button-star').addEventListener('click', () => {
            this._starNote();
        });


        this._cardText.addEventListener('dblclick', () => {
            this._editNote();
        });

        this._notesForm.addEventListener('submit', (evt) => {
            this._saveEditedNote(evt);
        });
    }


    _starNote(evt) {
        this._starElement = this._finalNote.querySelector('.card__button-star');
        this._starElement.classList.toggle('card__button-star_starred');
        this._appendToStarOrNot = this._starElement.classList.contains('card__button-star_starred');
        this._appendToStarOrNot ? this.listStarred.append(this._finalNote) : this._listCards.append(this._finalNote);
        this._allStarredCards = this.listStarred.querySelectorAll('.card');
        (this._allStarredCards.length === 0) ? this.starredText.classList.remove('notes-list-stared_none') : this.starredText.classList.add('notes-list-stared_none');
    }

    addNewNote() {
        this._finalNote = this._newNote.cloneNode(true);
        this._cardText = this._finalNote.querySelector('.card__text');
        this._inputText = this._finalNote.querySelector('.card__input-text');
        this._notesForm = this._finalNote.querySelector(".card__form"); /*to edit*/
        this._textEditInForm = this._notesForm.querySelector(".card__input-text");

        this._setEventListeners();

        this._cardText.textContent = this._text;
        this._textEditInForm.value = this._text;
        return this._finalNote;
    }

}

export { Note };