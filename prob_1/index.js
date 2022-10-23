// DOM elements
let activity = document.querySelectorAll('.activityJS');
let currentHour = document.querySelectorAll('.hour')
let lastHour = document.querySelectorAll('.lastHour')
let dailyBtn = document.querySelector('.Daily')
let weeklyBtn = document.querySelector('.Weekly')
let monthlyBtn = document.querySelector('.Monthly')

// Use Async and await to get a promise for the fetch information
const request = async () => {
    // Try and acatch to manage errors
    try {
        // Get the information from the URL
        const response = await fetch('https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json')
        // Get the json data
        const data = await response.json();
        // A loop to iterate each element from the data
        for (let i = 0; i < data.length; i++) {
            // For each element add the title information to each activity
            activity[i].innerHTML = data[i].title;
            // For each element add the current time information
            currentHour[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            // For each element add the previous time information
            lastHour[i].innerHTML = `Last week - ${data[i].timeframes.weekly.previous}hrs`;

        }

        // Buttons to change the information depending on the frequency
        monthlyBtn.addEventListener('click', function () {
            for (let i = 0; i < data.length; i++) {
                currentHour[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
                lastHour[i].innerHTML = `Last week - ${data[i].timeframes.monthly.previous}hrs`;
            }
        })
        dailyBtn.addEventListener('click', function () {
            for (let i = 0; i < data.length; i++) {
                currentHour[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
                lastHour[i].innerHTML = `Last week - ${data[i].timeframes.daily.previous}hrs`;
            }
        })
        weeklyBtn.addEventListener('click', function () {
            for (let i = 0; i < data.length; i++) {
                currentHour[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
                lastHour[i].innerHTML = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
            }
        })




    } catch (error) {
        console.log(error)
    }
}

// Initializate the request async function
request()