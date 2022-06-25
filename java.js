// obtainting input from user
let operator = prompt("Select a math operator","+,-,*, /");
let num1 = parseInt(prompt("Enter 1st number",""));
let num2 = parseInt(prompt("Enter 2nd number,",""));
// for addition operation
if (operator == "+" ){
    var total = num1 + num2;
    prompt("Sum", total);
}
// for subtration operation
else if (operator == "-"){
    var total = num1 - num2;
    prompt("Answer", total);
}
// for multiplication operation
else if (operator == "*"){
    var total = num1 * num2;
    prompt("Answer", total);
}
// for division operation
else if (operator == "/"){
    var total = num1 / num2;
    prompt("Answer", total);
}
// for wrong operator selection
else{
    alert("Invalid input");
}

