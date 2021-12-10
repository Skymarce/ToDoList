import {getData} from '../services/getData.js';
import {deleteData} from '../services/deleteData.js';

let deleteTask = document.querySelector('.delete-task');
let taskInput = document.querySelector('.tasktitle-delete').value;

function deleteTaskName(data) {

    let filterCard = data.filter(elem => elem.taskTitle === taskInput);

    filterCard.forEach(item => {
        deleteData(`http://localhost:3000/task/${item.id}`);
    });

}

deleteTask.addEventListener('click', () => {
    getData('http://localhost:3000/task').then(data => deleteTaskName(data));
});

export {deleteTaskName};