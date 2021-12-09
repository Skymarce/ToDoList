import {getData} from '../services/getData.js';
import {deleteData} from '../services/deleteData.js';
import {closeModal} from './modal.js';

let deleteTask = document.querySelector('.delete-task');

function deleteTaskName(data) {

    let taskInput = document.querySelector('.tasktitle-delete').value;

    

    for (let i = 0; i < data.length; i++) {
        if (data[i].taskTitle === taskInput) {
            deleteData(`http://localhost:3000/task/${data[i].id}`);
        } /* else {
            document.querySelector('.modal-window-delete').innerHTML += `
                <div class="deletetaskname-error">Данная задача не найдена ;(</div>
            `;
        } */
    }

    /* data.forEach(item => {
        if (taskInput === item.taskTitle) {
            deleteData(`http://localhost:3000/task/${item.id}`);
        } else {
            document.querySelector('.modal-window-delete').innerHTML += `
                <div class="deletetaskname-error">Данная задача не найдена ;(</div>
            `;
        }
    }); */

}

deleteTask.addEventListener('click', () => {
    getData('http://localhost:3000/task').then(data => deleteTaskName(data));
});

/* document.querySelector('.close-modal-delete').addEventListener('click', () => {
    closeModal('.modal-window-delete');
}); */

export {deleteTaskName};