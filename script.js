const menu = ["Weather", "Food", "Apps", "Movies"];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const foodItems = {
    Burgers: {desc: "The best burgers in town", image: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    Cream: {desc: "The worst Ice Cream in town", image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    Pizza: {desc: "A slice with dose of addiction", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    BBQ: {desc: "You'll meet Wizkid in one of these stores", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmVxdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    
}
let weather = {
    Cloudy: "fas fa-cloud-sun-rain",
    Sunny: "fas fa-sun",
    Stormy: "fas fa-cloud-showers-heavy",
    Rainy: "fas fa-cloud-rain"
}
const tools = {
    one: {title: "Weather", desc: "Cloud", icon: "fa-solid fa-plane", image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    two: {title: "Bank", desc: "Wallet", icon: "fa-solid fa-plane", image: "https://media.istockphoto.com/id/1292719370/photo/mens-hand-wallet-in-the-pocket.jpg?b=1&s=170667a&w=0&k=20&c=djEOCj12ePSxzBUxda_-Ta25OdQzHBshKZ5uSUJMRFk="},
    three: {title: "Arithmetic", desc: "Calculate", icon: "fa-solid fa-plane", image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    four: {title: "Travel", desc: "Naij Air", icon: "fa-solid fa-plane", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    five: {title: "Game", desc: "Xbox", icon: "fa-solid fa-plane", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    six: {title: "Relationship", desc: "Date", icon: "fa-solid fa-plane", image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
}
const movies = {
    one: {title: "Blood Sisters", desc: "Friends on the run after a wealthy groom disappears", image: "https://m.media-amazon.com/images/M/MV5BNGUyZmY2NDgtYTZhMy00N2FlLTlmM2YtYWYyMjE3NDQwNmFmXkEyXkFqcGdeQXVyMTIzOTU1OTY@._V1_FMjpg_UX1000_.jpg"},
    two: {title: "Brotherhood", desc: "The bonds of brotherhood are put to the ultimate test", image: "https://m.media-amazon.com/images/M/MV5BM2ZhYmZiNzgtYTMzMy00YmIyLTgxYTYtYTFlMmEwMDhiZWRiXkEyXkFqcGdeQXVyOTEwMjk4ODU@._V1_FMjpg_UX1000_.jpg"},
    three: {title: "War Zone", desc: "War is what happens when language fails", image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    four: {title: "Far From Home", desc: "A troubled teenager finds himself in the world of luxury", image: "https://image.tmdb.org/t/p/w500/svGLFlbjDKx67CVUEFtPGooW25F.jpg"},
    five: {title: "Dinner At My Place", desc: "A romantic dinner was interrupted when an overdramatic ex shows up uninvited.", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS20eDK31rigoArgPyAbtdj-3BvkpPt065ZHggSkLAwkXhyllCa"},
}

let container = document.querySelector(".container");
container.innerHTML = `
<div class="overlay">
    <div class="loader"></div>
    <div class="security">
        <input type="text" class="digit-1" maxlength="1" autocomplete="off">
        <input type="text" class="digit-2" maxlength="1" autocomplete="off">
        <input type="text" class="digit-3" maxlength="1" autocomplete="off">
        <input type="text" class="digit-4" maxlength="1" autocomplete="off">
    </div>
    <div class="hint">
        <p class="pin">Enter Pin (0000) <span class="error"></span><span class="cancel">Cancel</span></p>
    </div>
</div>
<div class="lock-screen">
    <div class="widget">
        <div class="date-time">
            <h1 class="time"></h1>
            <h2 class="temp"><i class="uil uil-sun"></i>72<sup>&#8451;</sup></h2>
        </div>
    </div>
    <button class="enter"><i class="uil uil-signin"></i></button>
</div>
`;

const defaultPin = 0000;
const overlay = document.querySelector(".overlay"),
lockScreen = document.querySelector(".lock-screen"),
enterBtn = document.querySelector(".enter");
let display = (query, output) => { document.querySelector(query).innerText = output; };
let passInputs = document.querySelectorAll("input");
let loader = document.querySelector(".overlay .loader");
let security = document.querySelector(".overlay .security");
let hint = document.querySelector(".overlay .hint");
let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let i = 0; i < 4; i++) { //Call focus function for all nodes in passInput
    passInputs[i].addEventListener("input", inputFocus);
}

enterBtn.addEventListener("click", () => {
    //hide homepage and display input form after login btn is clicked
    overlay.style.display = "flex";
    lockScreen.style.display = "none";
    setTimeout(() => {passInputs[0].focus()},100);
});

document.querySelector(".pin .cancel").addEventListener("click", () => {
    //Cancel login process
    clearInput();
    overlay.style.display = "none";
    lockScreen.style.display = "flex";
});

//Move focus to next input
let inputCount = 0; 
function inputFocus(e) {
    //Pass in event to prevent default actions
    e.preventDefault();
    e.stopPropagation();
    let maxlength = passInputs[inputCount].value.length;
    if ( maxlength == 1 && inputCount < 3) {
        inputCount++;
        passInputs[inputCount].focus();
    }
    if (passInputs[3].value.length == 1) {
        passInputs[3].blur();
        inputCount = 0;
        setTimeout(() => {
            submitPin();
            clearInput();
        }, 100);
    }
}

//Keyboard events
document.addEventListener("keypress", (e) => {
    passInputs[inputCount].value = e.key;
    inputFocus(e);
});

//Submit Pin
function submitPin() {
    security.style.display = "none";
    hint.style.display = "none";
    loader.style.display = "block";
    let getPin = "";
    for (let i = 0; i < 4; i++) {
        getPin += passInputs[i].value;
    }
    validatePin = getPin == defaultPin;
    setTimeout(() => {
        if (!validatePin) { //If pin is incorrect
            loader.style.display = "none";
            security.style.display = "block";
            hint.style.display = "block";
            for (let i = 0; i < 4; i++) {
                passInputs[i].style.border = "1px solid red";
            }
            document.querySelector(".error").innerText = "Invalid ";
        }
        else { //If pin is correct
            loader.style.display = "none";
            security.style.display = "block";
            security.innerHTML = "Password Correct";
            // container.innerHTML = `
            // <div class="lock-screen">
            //     <div class="widget">
            //         <div class="date-time">
            //             <h1 class="time"></h1>
            //             <h2 class="temp"><i class="uil uil-sun"></i>72<sup>&#8451;</sup></h2>
            //         </div>
            //     </div>
            //     <button class="enter"><i class="uil uil-signin"></i></button>
            // </div>
            // `;
            container.classList.add("padded");
            overlay.style.display = "none";
            lockScreen.style.display = "flex";
            lockScreen.classList.add("home-screen");
            enterBtn.classList.add("stop-anim");
            container.appendChild(returnMenu());
            //Hyperplexed
            const hyperplexed = document.createElement("div");
            hyperplexed.classList.add("youtube-btn");
            hyperplexed.innerHTML = '<a href="https://github.com/dimlaw7" target="_blank"><i class="fas fa-id-badge	" style="color: red;"></i> Dimlaw</a>';
            container.appendChild(hyperplexed);
            container.appendChild(returnWeather());
            container.appendChild(returnFoodWidget());
            container.appendChild(activityWidget());
            container.appendChild(movieWidget());
        }
    },randomNumber(300, 700));
    clearInput();
}

function clearInput() {
    for (let i = 0; i < 4; i++) {
        passInputs[i].value = "";
    }
    inputCount = 0;
}

// Date And Time Constants
const time = () => {
    const date = new Date();
    let HH = date.getHours(), MM = date.getMinutes(), SS = date.getSeconds();
    HH = (HH < 10) ? "0" + HH : HH;
    MM = (MM < 11) ? "0" + MM : MM;
    SS = (SS < 11) ? "0" + SS : SS;
    return `${HH}:${MM}`;
}



display(".time", time());
setInterval(() => {
    display(".time", time())
},1000);

function returnMenu() {
    const parent = document.createElement("ul");
    parent.classList.add("btn-menu");
    //notification
    const notification = document.createElement("p");
    notification.classList.add("notification");
    notification.innerHTML = '<i class="fas fa-bell"></i> Cognac and Vodka Drinkers Meeting <span class="time">4PM</span>';
    container.appendChild(notification);
    //menu
    menu.forEach(element => {
        const node = document.createElement("li");
        let textNode = document.createTextNode(element);
        node.appendChild(textNode);
        parent.appendChild(node);
    });
    return parent;
}

function returnWeather() {
    const weatherWidget = document.createElement("div");
    weatherWidget.classList.add("weather-widget");
    weatherWidget.innerHTML = '<p class="title"><i class="fas fa-sun" style="font-size:18px"></i>  This week\'s weather forecast</p>';
    //randomNumber(20, 40);
    const weatherWidgetRow = document.createElement("ul");
    weatherWidgetRow.classList.add("weather-widget-row");
    let content = "";
    weekdays.forEach(element => {
        let randWeather = Object.keys(weather)[randomNumber(0,3)];
        content += `<li><p class="temperature">${randomNumber(20,40)}<span>&#8451;</span></p><i class="${weather[randWeather]}" style="font-size:40px;"></i><span class="day">${element}</span></li>`;
    });
    weatherWidgetRow.innerHTML += content;
    weatherWidget.appendChild(weatherWidgetRow);
    return weatherWidget;
}

function returnFoodWidget() {
    const foodWidget = document.createElement("div");
    foodWidget.classList.add("food-widget");
    foodWidget.innerHTML = '<p class="title"><i class="fas fa-pizza-slice" style="font-size:18px"></i> Satisfy your cravings!</p>';
    //randomNumber(20, 40);
    const foodWidgetRow = document.createElement("ul");
    foodWidgetRow.classList.add("food-widget-row");
    let content = "";
    for (const key in foodItems) {
        const element = foodItems[key];
        content += `<li>
            <div class="item-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${element.image});">
                <div class="details">
                    <span class="title">${key}</span>
                    <span class="desc">${element.desc}</span>
                </div>
            </div>
        </li>`;
    }
    foodWidgetRow.innerHTML += content;
    foodWidget.appendChild(foodWidgetRow);
    return foodWidget;
}

function activityWidget() {
    const activityWidget = document.createElement("div");
    activityWidget.classList.add("activity-widget");
    activityWidget.innerHTML = '<p class="title"><i class="fas fa-toolbox" style="font-size:18px"></i> Fun things to do!</p>';
    //randomNumber(20, 40);
    const activityWidgetRow = document.createElement("ul");
    activityWidgetRow.classList.add("activity-widget-row");
    let content = "";
    for (const key in tools) {
        const element = tools[key];
        content += `<li>
            <div class="item-bg" style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${element.image});"></div>
            <div class="details">
                <div>
                    <span class="title">${element.title}</span>
                    <span class="desc">${element.desc}</span>
                </div>
                <i class="${element.icon}"></i>
            </div>
        </li>`;
    }
    activityWidgetRow.innerHTML += content;
    activityWidget.appendChild(activityWidgetRow);
    return activityWidget;
}

function movieWidget() {
    const movieWidget = document.createElement("div");
    movieWidget.classList.add("movie-widget");
    movieWidget.innerHTML = '<p class="title"><i class="fas fa-toolbox" style="font-size:18px"></i> Fun things to do!</p>';
    //randomNumber(20, 40);
    const movieWidgetRow = document.createElement("ul");
    movieWidgetRow.classList.add("activity-widget-row", "movie-widget-row");
    let content = "";
    for (const key in movies) {
        const element = movies[key];
        content += `<li>
            <div class="item-bg" style="background-image: url(${element.image});"></div>
            <div class="movie-overlay"></div>
            <div class="details">
                <div>
                    <span class="title">${element.title}</span>
                    <span class="desc">${element.desc}</span>
                </div>
                <i class="fa-solid fa-plane"></i>
            </div>
        </li>`;
    }
    movieWidgetRow.innerHTML += content;
    movieWidget.appendChild(movieWidgetRow);
    return movieWidget;
}