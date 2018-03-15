function addNumbers() {
    var firstNumber = Number(prompt("Please enter first number", "Number"));
   // checkNumber(firstNumber);
    var secondNumber = Number(prompt("Please enter second number", "Number"));
    var result = (firstNumber + secondNumber);
    if (Number.isNaN(result) == false) {

        if (result > 10) {
            alert("The sum of your two numbers is: [ " + result + " ]\nThat is a big number.");
        }
        else {
            alert("The sum of your two numbers is: [ " + result + " ]\nThat is a small number");
        }

    }
    else{
        alert("Invalid inputs.\n Try again.");
    }
}
function myFunction() {
    var txt;
    if (confirm("Do you want to add two numbers again?") == true) {
        addNumbers();
        myFunction();
    } else {
        msg();
    }
    document.getElementById("demo").innerHTML = txt;
}
 function msg() {
     alert("Thanks for using this calculator!");
     
     alert("Thanks for using this calculator!");
     
     alert("Thanks for using this calculator!");
 }
 /*function checkClicks() {

 }
 function checkNumber(number) {


  }*/
