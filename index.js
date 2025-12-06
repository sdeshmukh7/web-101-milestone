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

const addParticipant = (event, person) => {
    console.log("The person is:" + person);
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
const validateForm = () => {
  
  let containsErrors = false;

  let rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value 
    
  }
}

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


document.addEventListener("DOMContentLoaded", () => {
  const rsvpButton = document.getElementById("rsvp-button");
  if (rsvpButton) {
    rsvpButton.addEventListener("click", validateForm);
  }
});

/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelector("revealable");

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            revealableContainers[i];
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            revealableContainers[i];
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalContent = document.getElementById()
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    modalText.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;

    // Set modal timeout to 5 seconds
    setTimeout(() => {
  modal.style.display = "none";
}, 5000)

}

// TODO: animation variables and animateImage() function

if (rotateFactor === 0) {
  rotateFactor = -10;
} else {
  rotateFactor = 0;
}

let intervalId = setInterval(animateImage, 500);
setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
}, 5000);


