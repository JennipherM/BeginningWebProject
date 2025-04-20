
//function to check if user numbers are valid
function checkNumbers(number)
{
    //checks if user input is valid
    try {
        //checks if days entered is valid, if not pops up a window saying to enter a valid number
        if (number < 1) throw "Please enter valid numbers.";
    }
    //catches any errors
    catch (err) {
        //creates a pop up window saying to enter a valid number
        window.alert("Please enter valid numbers.");
    }
}
//function to calculate the total
function calculateTotal() {
    let roomPrice = 100;
    //calculates the nightly cost
    let costPerNight = roomPrice - (roomPrice * userDays.discount) + userGuests.fee;
    //calculates the total cost
    let totalCost = costPerNight * userDays.userDays;

    //prints the cost breakdown
    document.getElementById("total").innerHTML = "<b><u>Price Breakdown:</b></u><br>" +
        "<br><b>Room Price:</b> $100 <br>" +
        "<br><b>Large Party Fee: </b>$" + userGuests.fee +
        "<br><br> <b>Discount: </b>" + (userDays.discount * 100) +
        "%<br><br> <b><u>Total Cost</u>: $" + totalCost + "</b>";
}
//function to check if values are valid when submit button is pressed 
function checkValues(e) {

    //sets the reg ex to find if "gmail" is in the email
    let pattern = /^gmail/;

    //gets the value of user email
    let userEmail = document.getElementById("email").value;
    //gets the element by its id
    let email = document.getElementById("email")

    //splits the email into two parts at the @ sign (not including the @)
    let splitEmail = userEmail.split("@");
    //tests if the email domain matches the pattern
    let testEmail = pattern.test(splitEmail[1]);

    //checks if the match was true
    if (testEmail == true) {
        //sets a custom error message
        email.setCustomValidity("Enter a non gmail email.");
        //shows the error to the user
        email.reportValidity()


        //stops the form from submitting
        e.preventDefault()
    }
    //runs if the email is valid
    else {
        //sets the error to empty
        email.setCustomValidity("");

        ///gets the user values of days and guests
        numDays = parseInt(document.getElementById("days").value);
        numGuests = parseInt(document.getElementById("guests").value);

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
}

//creates a function constructor for days
function checkDays(days)
{
    //assigns variables
    this.userDays=days;
    this.discount = 0;
}
//creates a method for check days
checkDays.prototype.validNumbers = function(){
    //sends to check numbers function
    checkNumbers(this.userDays);
    //sends to discount method
    this.checkForDiscount(this.userDays);
};
//creates a method for check days
checkDays.prototype.checkForDiscount = function()
{
        //checks if the number of days the guest wants to stay gets a discount
        if (this.userDays >= 1 && this.userDays < 5) {
            this.discount = 0;
        }
        else if (this.userDays >= 5 && this.userDays <= 10) {
            this.discount = .05;
        }
        else {
            this.discount = .10;
        }
        //sends to the calculate method
       calculateTotal();
}

//creates a function constructor for guests
function checkGuests(guests)
{
    //assigns variables
    this.userGuests=guests;
    this.fee = 0;
}
//creates a method for checkGuests
checkGuests.prototype.validNumbers = function(){
    //sends to check numbers function
    checkNumbers(this.userGuests);
    //sends to fee method
    this.checkForFees(this.userGuests);
};
//creates a method for checkGuests
checkGuests.prototype.checkForFees= function(){
    //checks if a fee will be applied
    if (this.userGuests >= 1 && this.userGuests <= 5) {
        this.fee = 0;
    }
    else if (this.userGuests > 5) {
        //calculates the fee amount; $10 for each person for groups 6+
        this.fee = (this.userGuests - 5) * 10;
    }
    //sends to the calculate method
   calculateTotal();
}
