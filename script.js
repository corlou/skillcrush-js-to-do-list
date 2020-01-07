var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.nodeValue.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); //creates and element"li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field in the li text
    ul.appendChild(li) //adds li to ul
    input.value = ""; //reset text inout field

    //START STRIKETHROUGH   
    //because it is in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH
}