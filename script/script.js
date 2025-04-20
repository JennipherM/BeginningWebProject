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
}