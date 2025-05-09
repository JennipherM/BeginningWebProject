//declarations
let roomPrice = 100; //$100 per night 
let fee = 0;
let discount = 0;
let numDays;
let numGuests;
let zip = document.getElementById("zip");

//finds the element with the specified id,add an onchange event and when that element changes, send to called function
document.getElementById("days").onchange = checkForDiscount;
document.getElementById("guests").onchange = checkForFee;



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


//document.getElementById("btn").onclick = checkValues;

//creates a function to check if days and guests are valid when the user presses the submit button
$("#btn").click(function(e) {

    //sets the reg ex to find if "gmail" is in the email
    let pattern = /^gmail/;


    //gets the value of user email
    //let userEmail = document.getElementById("email").value;

    //gets the value -.val() where the id is email
    let userEmail = $("#email").val();

    //gets the element by its id
   // let email = document.getElementById("email")

   //gets the element with the id email
    let email = $("#email");

    //splits the email into two parts at the @ sign (not including the @)
    let splitEmail = userEmail.split("@");
    //tests if the email domain matches the pattern 
    let testEmail = pattern.test(splitEmail[1]);

    //checks if the match was true
    if (testEmail == true) {
        //sets a custom error message
       // email.setCustomValidity("Enter a non gmail email.");
        //shows the error to the user
       // email.reportValidity()
       //goes to the input for email and sets the customer error message 
       email[0].setCustomValidity("Enter a non-gmail email.");
       email[0].reportValidity();

        //stops the form from submitting
        e.preventDefault()

    }
    //runs if the email is valid
    else {
        //sets the error to empty
        email.setCustomValidity("");

        ///gets the user values of days and guests
        //numDays = parseInt(document.getElementById("days").value);
        numDays = parseInt($("#days").val());
        numGuests = parseInt($("#guests").val());

        //checks if the values are valid
        try {

            if (numDays < 1 || numGuests < 1) throw "Please enter valid values";

        }
        //catches any errors
        catch (err) {
            //creates a pop up window saying to enter a valid number
            window.alert("Please enter valid values");

            //stops the form from submitting
            e.preventDefault()
        }
    }

})

//runs as soon as the user goes off the zip input box
zip.onblur = function () {
    //sends request to zip url
    fetch(`http://api.zippopotam.us/US/${zip.value}`)


        .then(response => {
            //checks is the response from the request is a successful number (200-299)
            if (response.ok) {
                //turns the json object into a usuable string
                return response.json()
            }
            //runs if the response is anything other than a success or network error 
            else {
                return window.alert("Invalid Zip Code")
            }
        })
        //runs is there is a network error
        .catch(error => window.alert("Network error"));
}








//From case project 5 -- I wasn't sure if I should delete or not



/*
//declarations
let numDays;
let numGuests;

//gets the element with id of days + guests
numDays = document.getElementById("days");
numGuests = document.getElementById("guests");

//finds the element with the specified id,add an onchange event and when that element changes, send to called function
document.getElementById("btn").onclick = checkValues;

//runs when days change
numDays.onchange= function(){
    //creates a checkdays object 
    let userDays = new checkDays(numDays.value)

    //sends to validNumbers method
    userDays.validNumbers(numDays.value)
}

//runs when days change
numGuests.onchange= function(){
    //creates a checkGuests object 
    let userGuests = new checkGuests(numGuests.value)

    //sends to validNumbers method
    userGuests.validNumbers(numGuests.value)
}*/