import {putData} from "../services/putData.js";
import {openModal, closeModal} from "../components/modal.js";

function changeTask() {
    let editBtn = document.querySelectorAll('.delete-btn-change');

    editBtn.forEach(item => {
        item.addEventListener('click', () => { 
            let input = document.querySelector('.tasktitle-change'),
                descr = document.querySelector('.taskdescr-change'),
                card = item.parentElement.parentElement;

            input.value = card.querySelector('.card-title').textContent;
            descr.value = card.querySelector('.card-descr').textContent;

            openModal('.modal-window-change');

            document.querySelector('.close-modal-change').addEventListener('click', () => {
                closeModal('.modal-window-change');
            });

            document.querySelector('.change-task').addEventListener('click', () => {
                let changeObj = {
                    taskTitle: `${input.value}`,
                    taskText: `${descr.value}`,
                    "IsFinished": "false",
                    "date": `${card.querySelector('.card-date').textContent}`
                };
                putData(`http://localhost:3000/task/${item.id}`, changeObj);
            });
        });
    });
}

export {changeTask};