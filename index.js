/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");


// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // Write your code here
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    const rsvpList = document.getElementById("rsvp-list");
    

  
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const stateInput = document.getElementById("state").value;
  const listItem = document.createElement("p");
  listItem.textContent = nameInput +' from '+stateInput + ' has RSVP\'d.';
 
  if (rsvpList && typeof rsvpList.appendChild === "function") {
  rsvpList.appendChild(listItem);
  } else {
    console.warn("rsvpList is not a valid DOM element.");
  }
    if(event)event.preventDefault();
}

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  
  let containsErrors = false;

  //var rsvpInputs = document.getElementsByClassName("form-container");
  var rsvpInputdiv = document.getElementById("listRsvp");
  var rsvpInputs = rsvpInputdiv.children;
  // TODO: Loop through all inputs
  for (let j = 0 ;j < rsvpInputs.length ; j++){
  // TODO: Inside loop, validate the value of each input
  if (rsvpInputs[j].value.length < 2){
    containsErrors = true;
    rsvpInputs[j].classList.add("error");
  }
  else {
    if(rsvpInputs[j].classList.contains("error")){
      rsvpInputs[j].classList.remove("error");
      }
    }
      
  }
  

  // TODO: If no errors, call addParticipant() and clear fields
if (containsErrors == false){
      addParticipant();
    for (let j = 0 ;j < rsvpInputs.length ; j++){
        for (let j = 0 ;j < rsvpInputs.length ; j++){
              rsvpInputs[j].value = "";
          }
      }

  }
}

document.addEventListener("DOMContentLoaded", () => {
  const rsvpButton = document.getElementById("rsvp-button");
  if (rsvpButton) {
    rsvpButton.addEventListener("click", validateForm);
  }
});


