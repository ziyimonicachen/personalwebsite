alert("Thanks for visiting my website!");
let linkedInBtn = document.getElementById("linkedin");
let goButton = document.getElementById("go");
let emailInput = document.getElementById("emailInput");

function changeLinkedInColor() {
    linkedInBtn.style.backgroundColor = "blue";
}

function changeLinkedInColorBack() {
    linkedInBtn.style.backgroundColor = "rgb(22, 104, 218)";
}

linkedInBtn.addEventListener("mouseenter", changeLinkedInColor);
linkedInBtn.addEventListener("mouseleave", changeLinkedInColorBack);

function changeGoColor() {
    goButton.style.backgroundColor = "blue";
}

function changeGoColorBack() {
    goButton.style.backgroundColor = "rgb(22, 120, 218)";
}

goButton.addEventListener("mouseenter", changeGoColor);
goButton.addEventListener("mouseleave", changeGoColorBack);


function consoleGreeting() {
    const val = document.querySelector('input').value;
    console.log(val + " wants to email you");
}
goButton.addEventListener("click", consoleGreeting);
