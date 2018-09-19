// VARIABLES
const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');
const submitToDoButtonElem = document.getElementById('submitToDoButton');

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = '<h1>hello</h1>';

    printToDom(domString, 'toDoCards');
}


submitToDoButtonElem.addEventListener('click', (e) => {
    e.preventDefault();



    // .value is how we capture information from forms
    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});