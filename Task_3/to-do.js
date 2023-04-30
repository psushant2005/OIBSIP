const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span =document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value=" ";
    saveData();// whenever we add new data it should call this
}

// check if click on list it checked if click on span that is delete

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        
    }
    saveData(); // whenwveer we delete it will save the data
}, false);


// if we refresh file content is not visible so that's why we do it to save data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// we want to display showd data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();