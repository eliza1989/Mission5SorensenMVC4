// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Define calculate cost function
function calculateCost() {

    //define and parseInt variables that will be used to calculate the cost
    var holes = parseInt($("#holes").val());
    var rounds = parseInt($("#rounds").val());
    var total = 0;
    var sTotal = ""

    //check if the number of rounds is valid and alert the user if it is not
    if (rounds < 1 || isNaN(rounds)) {
        alert('Please enter a valid number rounds');
    }

    //then check to see if the number of holes is valid and if not alert the user
    else if (holes !== 9 && holes !== 18 || isNaN(holes)){
        alert('Please enter a valid number holes (9 or 18 holes)');
    }

    //calculate cost if the number of holes is 9
    else if (holes == 9) {
        total = 50 * rounds;
    }

    //else assume the number of holes is 18 and calculate cost
    else {
        total = 75 * rounds;
    }

    //concatinate total and send output to page
    sTotal = 'Total: $' + total.toFixed(0);
    document.getElementById("total").textContent=sTotal

}