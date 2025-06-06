let brightTheme = document.getElementById("bright");
let darkTheme = document.getElementById("dark")
let body = document.querySelector("body")
let navBar = document.querySelector(".nav-cover")
let navBarContent = document.querySelector(".nav-container")
let inputSubmit = document.querySelector("input[type='submit']")
let table = document.querySelector(".item2")
const themeBtn = document.getElementById("theme")


themeBtn.addEventListener("click" , function(e){
    e.preventDefault();
    darkTheme.classList.toggle("show");
    brightTheme.classList.toggle("hidden")
    
    body.classList.toggle("hidden")
    navBar.classList.toggle("hidden")
    navBarContent.classList.toggle("hidden")
    inputSubmit.classList.toggle("hidden")
    table.classList.toggle("hidden")

    let theme = {
        themeColor : [darkTheme , brightTheme]
    }

    localStorage.setItem("theme" , theme)
})

let key = "144004ed5d96bc2de9dac930ef5d07c6";
let city = "";
let resulTable = document.querySelector("table")
const form = document.querySelector("form")
 
form.addEventListener("submit" , async function(event){
    event.preventDefault();
    city = document.querySelector("input[type='text']").value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}` //these is param

    try {
        let response = await fetch(url);
        let result = await response.json();
        console.log(result)
        let displayTable = document.createElement("tr")
        displayTable.innerHTML = `
        <td>${result.dt}</td>
        <td>${result.main.temp}</td>
        <td>${result.main.pressure}</td>
        <td>${result.main.humidity}</td>
        <td>${result.wind.speed}</td>
        <td>${result.name}</td>
        `
        resulTable.appendChild(displayTable)
    } catch (error) {
        console.log(error)
    }

    
})