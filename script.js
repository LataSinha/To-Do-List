var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function createListElements(){
    var div=document.createElement("div");
    var li=document.createElement("li");
    var delButton=document.createElement("button");
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li,delButton);
    li.classList.add("task");
    li.appendChild(document.createTextNode(input.value));
    input.value=" ";
    delButton.classList.add("delete");
    delButton.innerHTML="Delete";
}

function inputLength(){
    return input.value.length;
}

function addListAfterClick(){
    if(inputLength()>0){
        createListElements();
    }
}

function addListAfterKeyPress(event){
    if(inputLength()>0 && event.keyCode===13){
        createListElements();
    }
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}


function deleteListElement(element) {
	if (element.target.className === "delete"){
		element.target.parentElement.remove();
	}
}

function handleUIClick (element) {
     doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUIClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);