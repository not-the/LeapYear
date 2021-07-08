var startYear;
var endYear;
var leapYears = [];
var type = ", ";
var pageOutput = document.getElementById("output");

promptInput();
calculate();

// Prompt
function promptInput() {
    startYear = prompt("Please enter a starting year", "1900");
    endYear = prompt("Please enter an end year", "2100");
    calculate();
}

// For loop leap year calculator
function calculate() {
    leapYears = [];
    for(let i = startYear; i <= endYear; i++) {
        if(  (i % 4 == 0 && i % 100 !== 0)  ||  (i % 400 == 0)  ) {
            leapYears.push(i);
        }
        if(i == endYear) {
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
        pageOutput.style.fontSize = "12pt";
        pageUpdate();
    }
}



// console.log(leapYears);