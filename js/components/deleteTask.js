import {deleteData} from "../services/deleteData.js";

function deleteTask() {
    document.querySelectorAll('.delete-btn-task').forEach(item => {
        item.addEventListener('click', () => {
            deleteData(`http://localhost:3000/task/${item.id}`);
        });
    });
};

export {deleteTask};