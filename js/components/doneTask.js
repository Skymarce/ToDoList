import {putData} from "../services/putData.js";

function doneTask() {

    let btnOkay = document.querySelectorAll('.btn-okay-task');

    btnOkay.forEach(item => {
        item.addEventListener('click', () => {
            let obj = {
                taskTitle: `${item.parentElement.parentElement.querySelector('.card-title').textContent}`,
                taskText: `${item.parentElement.parentElement.querySelector('.card-descr').textContent}`,
                IsFinished: "true",
                date: `${item.parentElement.parentElement.querySelector('.card-date').textContent}`,
                id: `${item.id}`
            };
            putData(`http://localhost:3000/task/${item.id}`, obj);
        });
    });
}

export {doneTask};