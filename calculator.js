var initialVal = 0;
var inputVal = 0;
var outputVal = 0;


// It should display whatever number is clicked
function display(num) {
    document.form.textview.value = document.form.textview.value+num;   
}

// It should have 'clear' button to reset the value to 0
function clearVal(){
    document.form.textview.value = '';
}

// It should calculate (add, substract, multiply and divide) numbers
function calculate (){
    var a = document.querySelector('input').value;

}

/* Requirements:
 - Start at value zero
 - collect input data from user
 - rules: no zero digits as first value in a number, decimal can be use once in a row, only one operator can be use at once, 
 - display input on screen
 - perform calculation when use clicks equal '=' operator 
 - display result 
 - clear screen 

// It should have input data storage to store input values
