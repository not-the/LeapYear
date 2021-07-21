var startYear;
var endYear;
var leapYears = [];
var type = ", ";
var pageOutput     = document.getElementById("output");
var popupElement   = document.getElementById("popup");
var darkenElement  = document.getElementById("darken");
var submitButton   = document.getElementById("submit");
var warningElement = document.getElementById("warning");

submitButton.addEventListener("click", calculate);
darkenElement.addEventListener("click", popup);


// promptInput();
// // calculate();

// // Prompt
// function promptInput() {
//     startYear = prompt("Please enter a starting year", "1900");
//     endYear = prompt("Please enter an end year", "2100");
//     calculate();
// }

// For loop leap year calculator
function calculate() {

    let startYear = parseInt(document.getElementById("startYear").value);
    let endYear = parseInt(document.getElementById("endYear").value);

    leapYears = [];

    // Error message
    if(startYear >= endYear) {
        warningElement.style.visibility = "inherit";
        warningElement.style.animation = "floatin 0.25s"
    } else {
        warningElement.style.visibility = "hidden";
        warningElement.style.animation = "none"
    }

    // For loop
    for(i = startYear; i <= endYear; i++) {
        if(  (i % 4 == 0 && i % 100 !== 0)  ||  (i % 400 == 0)  ) {
            leapYears.push(i);
        }
        if(i == endYear) {
            popup();
            pageUpdate();
        }
    }

}

// Update page
function pageUpdate() {
    pageOutput.innerText = leapYears.join(type);
}

// Change Display button
function displayType() {
    if(type == ", ") {
        type = "\n";
        pageOutput.style.fontSize = "20pt";
        pageUpdate();
    } else if(type == "\n") {
        type = ", ";
        pageOutput.style.fontSize = "14pt";
        pageUpdate();
    }
}

// Hide and unhide popup menu
function popup() {
    if(popupElement.style.visibility == "inherit") {
        popupElement.style.animation = "fadeout 0.25s";
        darkenElement.style.animation = "opacityout 0.25s";

        setTimeout(() => {
            popupElement.style.visibility = "hidden";
            darkenElement.style.visibility = "hidden";
        }, 200);
    } else {
        popupElement.style.visibility = "inherit";
        darkenElement.style.visibility = "inherit";

        popupElement.style.animation = "fadein 0.25s";
        darkenElement.style.animation = "opacityin 0.25s";
    }
}



// console.log(leapYears);