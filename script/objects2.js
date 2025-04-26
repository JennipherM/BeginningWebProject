//objects for the contact page; had to make another file becuase it was conflicting with the gallery objects

//creates a constructor function
function Form(){
    //assigns the text type 
    this.type="text";  
}
//creates arrays for label and input tags
let labelArray = [
    {for: "fName", label: "First Name: "},
    {for: "lName", label: "Last Name: "},
    {for: "phone", label: "Phone Number: "},
    {for: "email", label: "E-mail: "},
    {for: "guests", label: "Number of Guests: <br>($10 per person for groups of 6+)"},
    {for: "days", label: "Number of Days: <br>(5% for 5-10 days; 10% for 11+ days)"}
]
let inputArray = [
    {name: "fName", id: "fName"},
    {name: "lName", id: "lName"},
    {name: "phone", id: "phone"},
    {name: "email", id: "email"},
    {name: "guests", id: "guests"},
    {name: "days", id: "days"},   
]

//creates a method for Form 
Form.prototype.createForm = function(){
    //assigns variables
    let htmlCode = "";
    let formTest = document.getElementById("form");

    //loops until the conter is < the length of the label array 
    for(let i = 0; i<labelArray.length; i++)
    {
        //adds each label and input tags to htmlCode 
        htmlCode += `<label for='${labelArray[i].for}'>${labelArray[i].label}</label>` +
                    `<input type = '${this.type}' name = '${inputArray[i].name}' id='${inputArray[i].id}' required>`
   
    }

    //adds the html to the form element and adds it tpo the begininng / above the days,guests, and submit options
    formTest.insertAdjacentHTML("afterbegin", htmlCode)
}

//creates an object for Form
let contactForm = new Form();
//calls the createForm method 
contactForm.createForm();

