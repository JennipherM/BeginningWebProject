//declarations
let roomPrice = 100; //$100 per night 
let fee = 0;
let discount = 0;
let numDays;
let numGuests;

//finds the element with the specified id,add an onchange event and when that element changes, send to called function
document.getElementById("days").onchange = checkForDiscount;

document.getElementById("guests").onchange = checkForFee;

document.getElementById("btn").onclick = checkValues;


//function to check if a discount is applied
function checkForDiscount() {
    //finds the element by its id, and gets its value and converts it to an int
    numDays = parseInt(document.getElementById("days").value);

    //checks if user input is valid
    try {
        //checks if days entered is valid, if not pops up a window saying to enter a valid number
        if (numDays < 1) throw "Please enter a valid number for days.";

        //goes to the beginning of the function again if the user changes the guest number
        document.getElementById("days").onchange = checkForDiscount;
    }
    //catches any errors
    catch (err) {
        //creates a pop up window saying to enter a valid number
        window.alert("Please enter a valid number for days.");
    }
    //checks if the number of days the guest wants to stay gets a discount
    if (numDays >= 1 && numDays < 5) {
        discount = 0;
    }
    else if (numDays >= 5 && numDays <= 10) {
        discount = .05;
    }
    else {
        discount = .10;
    }
    //sends to the calculate method
    CalculateTotal()
}
//function to check if the guests have over 5 people
function checkForFee() {

    //finds the element by its id, and gets its value and converts it to an int
    numGuests = parseInt(document.getElementById("guests").value);
    //checks if the guest number is valid
    try {
        //checks if the number is valid (less than 1), if not pops a window saying to enter a valid number
        if (numGuests < 1) throw "Please enter a valid number for guests."

        //goes to the beginning of the function again if the user changes the guest number
        document.getElementById("guests").onchange = checkForFee;
    }

    //catches any errors
    catch (err) {
        //creates a pop up window saying to enter a valid number
        window.alert("Please enter a valid number for guests.");
    }

    //checks if a fee will be applied
    if (numGuests >= 1 && numGuests <= 5) {
        fee = 0;
    }
    else if (numGuests > 5) {
        //calculates the fee amount; $10 for each person for groups 6+
        fee = (numGuests - 5) * 10;
    }
    //sends to the calculate method
    CalculateTotal()
}

//function to calculate the total
function CalculateTotal() {
    //calculates the nightly cost
    let costPerNight = roomPrice - (roomPrice * discount) + fee;
    //calculates the total cost
    let totalCost = costPerNight * numDays;

    //prints the cost breakdown
    document.getElementById("total").innerHTML = "<b><u>Price Breakdown:</b></u><br>" +
        "<br><b>Room Price:</b> $100 <br>" +
        "<br><b>Large Party Fee: </b>$" + fee +
        "<br><br> <b>Discount: </b>" + (discount * 100) +
        "%<br><br> <b><u>Total Cost</u>: $" + totalCost + "</b>";
}

//creates a function to check if days and guests are valid when the user presses the submit button
function checkValues() {
    numDays = parseInt(document.getElementById("days").value);
    numGuests = parseInt(document.getElementById("guests").value);

        try {
            if (numDays < 1 || numGuests < 1) throw "Please enter valid values";
        }
        //catches any errors
        catch (err) {
            //creates a pop up window saying to enter a valid number
            window.alert("Please enter valid values");            
        } 
}