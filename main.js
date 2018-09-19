// VARIABLES
const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButtonElem = document.getElementById('submitToDoButton');

const activateDeletes = () => {
    // const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener('click', () => {
            console.log('they clicked delete!');
        })
    }
}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <button href="#" class="btn btn-primary deleteButton">Delete Card</button>
    </div>
  </div>`;

    printToDom(domString, 'toDoCards');
    // needs to be after print to dom because it needs to be rendered on html page before you can delete it
    activateDeletes();
}

submitToDoButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    // .value is how we capture information from forms
    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});