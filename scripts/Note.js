class Note {
    constructor(text) {
        this._text = text; 
        this._template = document.querySelector(".addnew-template").content;
        this._newNote= this._template.querySelector(".card")
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
        this._finalNote.querySelector('.card__button-delete').addEventListener('click',() => {
            this._deleteNote();
        });

        this._finalNote.querySelector('.card__button-edit').addEventListener('click',() => {
            this._editNote();
        }); 

        this._cardText.addEventListener('dblclick',() => {
            this._editNote();
        });

        this._notesForm.addEventListener('submit',(evt) => {
            this._saveEditedNote(evt);
        }); 
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

export {Note};