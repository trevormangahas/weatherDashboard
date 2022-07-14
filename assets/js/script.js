const moment = require("moment");

const searchHistoryUL = document.getElementById('searchHistoryUL');
const searchDIV = document.getElementById('searchDiv')
const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const locationName = document.getElementById('locationName');
const weatherDIV = document.getElementById('weatherDiv')
const forecastDIV = document.getElementById('forecastDiv');
const todaysDate = document.getElementById('todaysDate')
const currentTemp = document.getElementById('currentTemp');
const currentIcon = document.getElementById('currentIcon');
const currentWind = document.getElementById('currentWind');
const currentHumidity = document.getElementById('currentHumidity');
const currentUV = document.getElementById('currentUV');
const today = moment();

let searchItems = [];
const maxHistoryItems = 5;


    if (localStorage.getItem('storedSearches')){
        searchItems = JSON.parse(localStorage.getItem('storedSearches'));
        for (let x = 0; x < searchItems.length; x++) {
            createStorageNodes(searchItems);
        }
    }
}


function createStorageNodes(items) {
    searchHistoryUL.innerHTML = '';
    for (let x = 0; x < items.length; x++){
        const newEl = document.createElement('li');
        newEl.classList = "searchItem btn-info";
        newEl.textContent = items[x];
        searchHistoryUL.appendChild(newEl);
    }
    searchInput.value = '';
};


initLocalStorage=()