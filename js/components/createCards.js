import {openModal, closeModal} from "../components/modal.js";
import {postData} from "../services/postData.js";

function createCard() {
    document.querySelector('.modal-window-btn-add').addEventListener('click', () => {
        openModal('.modal-window-add');
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        closeModal('.modal-window-add');
    });

    document.querySelector('.modal-window-btn-delete').addEventListener('click', () => {
        openModal('.modal-window-delete');
    });

    document.querySelector('.close-modal-delete').addEventListener('click', () => {
        closeModal('.modal-window-delete');
    });

    document.querySelector('.create-task').addEventListener('click', () => {
        const input = document.querySelector('.tasktitle').value;
        const description = document.querySelector('.taskdescr').value;
        let nowDate = new Date();

        let taskObj = {
            taskTitle: `${input}`,
            taskText: `${description}`,
            "IsFinished": "false",
            "date": `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`,
            "color": "red"
        };
        postData('http://localhost:3000/task', taskObj);
    });
};

export {createCard};