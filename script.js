const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const ding = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3'); 

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        
        if(e.target.classList.contains("checked")){
            console.log("Task completed - Playing sound");
            ding.currentTime = 0; 
            ding.play();
        }
        saveData();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();