/*
    Name: Mike Villeneuve
    Date: 6/26/2022
*/


/* Function to populate the body of the HTML with a form */
const init = () => {
    "use strict";

    // Variable declarations
    let formElement = document.createElement("form"); // Create form tags
    let divElement = document.createElement("div"); // Create div tags
    let inputElement = document.createElement("input"); // Create input tag
    let buttonElement = document.createElement("button"); // Create button tags

    // Create HTML form 
    formElement.appendChild(divElement);
    divElement.classList.add("form-group");

    // Create Input element and subsequent attributes
    divElement.appendChild(inputElement);
    inputElement.classList.add("form-control");
    inputElement.setAttribute("type", "text"); 
    inputElement.setAttribute("id", "username");

    // Create Button element and subsequent attributes
    divElement.appendChild(buttonElement);
    buttonElement.setAttribute("type", "button");
    buttonElement.textContent = "Click Me";

    // Append form to body
    document.body.appendChild(formElement);
}

// Calls the init function on page load.
window.onload = init;