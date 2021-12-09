import {deleteData} from "../services/deleteData.js";

function deleteTask() {
    
    let deleteBtn = document.querySelectorAll('.delete-btn-task');

    deleteBtn.forEach(item => {
        item.addEventListener('click', () => {
            deleteData(`http://localhost:3000/task/${item.id}`);
        });
    });
}

export {deleteTask};