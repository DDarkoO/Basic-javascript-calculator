// Variables

let actual = document.getElementsByClassName("actual")[0]; // toa shto se kuca vo momentot
let memo = document.getElementsByClassName("memo")[0]; // posledniot rezultat 
let equals = document.getElementsByClassName("equals")[0];
let numberBtns = document.querySelectorAll(".number"); // site kopchinja za broevi
let mathOperations = document.querySelectorAll(".math"); // operaciite + - / *
let changeSign = document.getElementsByClassName("posNeg")[0]; // Promena na znakot na aktuelniot broj
let decimal = document.getElementsByClassName("decimal")[0];
let clearScreen = document.getElementsByClassName("clearScreen")[0];
let delBtn = document.getElementsByClassName("delete")[0];
let sqrBtn = document.getElementsByClassName("sqrRoot")[0];


// Numbers and operation buttons [0-9], [+ - / *]

for (let number of numberBtns) {
    if (actual.innerText === "0") {
        number.addEventListener("click", function () {
            if (actual.innerText === "0") {
                actual.innerText = "";
                actual.innerText += number.value;
            }
            else if (actual.innerText === "") { }
            else {
                actual.innerText += number.value;
            }
        })
    }
}

for (let operation of mathOperations) {
    operation.addEventListener("click", function () {
        if (memo.innerText === "") {

            if (actual.innerText !== "0") {
                memo.innerText = `${actual.innerText}${operation.innerText}`;
                actual.innerText = "0";
            }

        } else {
            if (memo.innerText.charAt(memo.innerText.length - 1) === "+" ||
                memo.innerText.charAt(memo.innerText.length - 1) === "-" ||
                memo.innerText.charAt(memo.innerText.length - 1) === "*" ||
                memo.innerText.charAt(memo.innerText.length - 1) === "/") {
                memo.innerText = memo.innerText.slice(0, -1);
                memo.innerText = memo.innerText.concat(`${operation.innerText}`);
            }
            else if (memo.innerText.charAt(0) === "-" && memo.innerText.charAt(memo.innerText.length - 1) === "-" && actual.innerText.charAt(0) === "-" ||
                memo.innerText.charAt(memo.innerText.length - 1) === "-" && actual.innerText.charAt(0) === "-") {
                memo.innerText = memo.innerText.slice(0, -1);
                memo.innerText = memo.innerText.concat("+");
                actual.innerText = actual.innerText.substring(1);
                console.log(actual.innerText, memo.innerText);
                memo.innerText = eval(memo.innerText + actual.innerText);
                actual.innerText = "";
            }
            else {
                memo.innerText = eval(memo.innerText + actual.innerText);
                memo.innerText += operation.innerText;
                actual.innerText = "0";
            }
        }
    })
}

// Special operations buttons

equals.addEventListener("click", function () {
    // if (actual.innerText === "0" && memo.innerText === "") { } - nema poterba
    if (memo.innerText.charAt(0) === "-" && memo.innerText.charAt(memo.innerText.length - 1) === "-" && actual.innerText.charAt(0) === "-" ||
        memo.innerText.charAt(memo.innerText.length - 1) === "-" && actual.innerText.charAt(0) === "-") {
        memo.innerText = memo.innerText.slice(0, -1);
        memo.innerText = memo.innerText.concat("+");
        actual.innerText = actual.innerText.substring(1);
        console.log(actual.innerText, memo.innerText);
        memo.innerText = eval(memo.innerText + actual.innerText);
        actual.innerText = "";
    }

    else {
        memo.innerText = eval(memo.innerText + actual.innerText);
        actual.innerText = "";
    }
})


// +/- change sign

changeSign.addEventListener("click", function () {
    if (actual.innerText.charAt(0) !== "-" && actual.innerText.charAt(0 !== "0")) {
        actual.innerText = `- ${actual.innerText}`;
    } else if (actual.innerText.charAt(0) === "-") {
        actual.innerText = actual.innerText.substring(1);
    } else if (actual.innerText.charAt(0) == "0") {
        actual.innerText = "-";
    } else if (actual.innerText.length = 1 && actual.innerText !== "0") {
        actual.innerText = `- ${actual.innerText}`;
    }
})

// Decimal, AllClear, delete, square a number

decimal.addEventListener("click", function () {
    if (actual.innerText !== "" && actual.innerText.charAt(actual.innerText.length - 1) !== ".") {
        actual.innerText = actual.innerText.concat(".");
    }
})

clearScreen.addEventListener("click", function () {
    actual.innerText = "0";
    memo.innerText = "";
})

delBtn.addEventListener("click", function () {
    if (actual.innerText.length > 1) {
        actual.innerText = actual.innerText.slice(0, -1);
    } else if (actual.innerText.length = 1 && actual.innerText !== "0") {
        actual.innerText = "0";
    }
})

sqrBtn.addEventListener("click", function () {
    if (actual.innerText !== "0" && actual.innerText !== "-" && actual.innerText !== "") {
        memo.innerText = eval(actual.innerText * actual.innerText);
        actual.innerText = "";
    }
})