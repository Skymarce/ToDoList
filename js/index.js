import {showCards} from "./components/showCards.js";
import {createCard} from "./components/createCards.js";
import {deleteTaskName1} from './components/deleteTaskName.js';
import {searchTask} from './components/searchTask.js';

showCards();
createCard();
searchTask();
let inputSearch = document.querySelector('.seacrh');

document.querySelector('.seacrh').addEventListener('keydown', () => {
    
    if (inputSearch.value === '') {
        document.querySelector('.search-result').innerHTML = '';
        document.querySelector('.wrong-cards').classList.remove('hide');
        document.querySelector('.ok-cards').classList.remove('hide');
    }
});