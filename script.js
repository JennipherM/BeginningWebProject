//declarations
let roomPrice = 100; //$100 per night 
let fee = 0;
let discount = 0;
let numDays = 0;
let numGuests = 0;

//finds the element with the specified id,add an onchange event and when that element changes, send to called functions
document.getElementById("days").onchange = checkForDiscount;
document.getElementById("guests").onchange = checkForFee;


//function to check if a discount is applied
function checkForDiscount() 
{
    //finds the element by its id, and gets its value and converts it to an int
    numDays = parseInt(document.getElementById("days").value);

    //checks if the number of days the guest wants to stay gets a discount
    if (numDays > 1 && numDays < 5) {
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
function checkForFee() 
{
    //finds the element by its id, and gets its value and converts it to an int
    numGuests = parseInt(document.getElementById("guests").value);

    //checks if a fee will be applied
    if (numGuests >= 1 && numGuests <= 5) 
    {
        fee = 0;
    }
    else if (numGuests > 5) 
    {
        //calculates the fee amount; $10 for each person for groups 6+
        fee = (numGuests - 5) * 10;
    }
    //sends to the calculate method
    CalculateTotal()
}

//function to calculate the total
function CalculateTotal()
{
    //calculates the nightly cost
    let costPerNight = roomPrice - (roomPrice * discount) + fee;
    //calculates the total cost
    let totalCost= costPerNight * numDays;

    //prints the cost breakdown
    document.getElementById("total").innerHTML = "Room Price: $100 <br>" +
        "Large Party Fee: $" + fee +
        "<br> Discount: " + (discount * 100) +
        "%<br> Total Cost: $" + totalCost;
}