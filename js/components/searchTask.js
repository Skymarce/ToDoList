import {getData} from '../services/getData.js';


function searchTask() {

    let btnSearch = document.querySelector('.btn-search');
    let searchArray = [];
    getData('http://localhost:3000/task').then(data => searchArray = data);

    btnSearch.addEventListener('click', () => {
        let searchInput = document.querySelector('.seacrh').value;
        
        let searchResult = searchArray.filter(elem => elem.taskTitle === searchInput && elem.IsFinished === "false");
        document.querySelector('.wrong-cards').classList.add('hide');
        document.querySelector('.ok-cards').classList.add('hide');
        searchResult.forEach(item => {
            document.querySelector('.search-result').innerHTML += `
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
        });
    });



}

export {searchTask};