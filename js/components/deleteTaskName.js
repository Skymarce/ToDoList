import {getData} from '../services/getData.js';
import {deleteData} from '../services/deleteData.js';

function deleteTaskName1(data) {

    let taskInput = document.querySelector('.tasktitle-delete').value;

    let filterCard = data.filter(elem => elem.taskTitle === taskInput);

    filterCard.forEach(item => {
        deleteData(`http://localhost:3000/task/${item.id}`);
    });

}

let deleteTask = document.querySelector('.delete-task');

deleteTask.addEventListener('click', () => {
    getData('http://localhost:3000/task').then(data => deleteTaskName1(data));
});

export {deleteTaskName1};