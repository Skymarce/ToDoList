import {getData} from '../services/getData.js';
import {deleteTask} from './deleteTask.js';
import {changeTask} from './changeTask.js';
import {doneTask} from './doneTask.js';

function showCards() {
    getData('http://localhost:3000/task').then(data => {renderCards(data), deleteTask(), changeTask(), doneTask()});
}

function renderCards(data) {
    data.forEach(item => {
        if (item.IsFinished === 'true') {
            document.querySelector('.ok-cards').innerHTML += `
                <div class="card">
                    <div class="card-description">
                        <div class="card-title">${item.taskTitle}</div>
                        <div class="card-descr">${item.taskText}</div>
                        <div class="card-date">${item.date}</div>
                    </div>
                    <div class="card-img">
                        <img id="${item.id}" class="delete-btn-task" src="../img/icons/delete.png">
                    </div>
                </div>
            `;
        } else {
            document.querySelector('.wrong-cards').innerHTML += `
                <div class="card">
                    <div class="card-description">
                        <div class="card-title">${item.taskTitle}</div>
                        <div class="card-descr">${item.taskText}</div>
                        <div class="card-date">${item.date}</div>
                    </div>
                    <div class="card-img">
                        <img id="${item.id}" class="btn-okay-task" src="img/icons/checked.png">
                        <img id="${item.id}" class="delete-btn-change" src="../img/icons/edit.png">
                        <img id="${item.id}" class="delete-btn-task" src="../img/icons/delete.png">
                    </div>
                </div>
            `;
        }
    });
};

export {showCards};