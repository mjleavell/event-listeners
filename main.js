// VARIABLES
const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButtonElem = document.getElementById('submitToDoButton');
const removeToDoButtonElem = document.getElementById('removeToDoButton');

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <a href="#" id="removeToDoButton" class="btn btn-primary">Remove Card</a>
    </div>
  </div>`;

    printToDom(domString, 'toDoCards');
}



submitToDoButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    // .value is how we capture information from forms
    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});