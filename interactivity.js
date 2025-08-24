//Each functions are for buttons...

//NUMBER 1
document.getElementById("one").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "1";
}

//NUMBER 2
document.getElementById("two").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "2";
}
//NUMBER 3
document.getElementById("three").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "3";
}
//NUMBER 4
document.getElementById("four").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "4";
}

//NUMBER 5
document.getElementById("five").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "5";
}
//NUMBER 6
document.getElementById("six").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "6";
}
//NUMBER 7
document.getElementById("seven").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "7";
}
//NUMBER 8
document.getElementById("eight").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "8";
}
//NUMBER 9
document.getElementById("nine").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "9";
}
//NUMBER 0
document.getElementById("zero").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "0";
}
//POINT SYMBOL
document.getElementById("point").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + ".";
}
//PLUS SYMBOL
document.getElementById("plus").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "+";
}
//MINUS SYMBOL
document.getElementById("minus").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "-";
}
//MULTIPLY SYMBOL
document.getElementById("multiply").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "x";
}
//DIVIDE SYMBOL
document.getElementById("divide").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "÷";
}
//PERCENTAGE SYMBOL
document.getElementById("percent").onclick = function() {
    let num1 = document.getElementById("output");
    num1.textContent = num1.textContent + "%";
}
//EQUALS BUTTON
document.getElementById("equal").onclick = function() {
    let output = document.getElementById("output");
    let expression = output.textContent
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100");
    try {
        output.textContent = eval(expression);
    } catch {
        output.textContent = "Error";
    }
}
//ERASE BUTTON
document.getElementById("erase").onclick = function() {
    let output = document.getElementById("output");
    if (output.textContent.length > 0) {
        output.textContent = output.textContent.slice (0,-1);
    }
}
//CLEAR BUTTON
document.getElementById("clear").onclick = function() {
    let clear =document.getElementById("output").textContent = "";
}
