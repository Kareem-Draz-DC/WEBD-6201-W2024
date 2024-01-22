// - As a User, I want to click on the 'Add' button and add the to do that I typed from the text box onto my todo list

// const addBtn = document.getElementById('submit-btn')
// const addBtn = document.querySelector('button') // Using the tag name - however this will select ALL buttons
// Grabs the HTML button and stores it inside a variable called addBtn
const addBtn = document.querySelector("#submit-btn");
// Grabs the HTML Input element and store it inside a variable called inputEl
const inputEl = document.querySelector("#to-do-input");
// Grabs the HTML UL element and store it inside a variable called unOrderedListEl
const unOrderedListEl = document.querySelector("#to-do-list");

addBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Stops the browser from refreshing when the form is submitted
  console.dir(event);
  // console.dir(inputEl.value);
  // inputEl.value represents the text the user types into the input element text box
  const newListItem = document.createElement("LI");
  newListItem.innerText = inputEl.value; // "Shovel the Snow"
  // newListItem ---> <li>Shovel the Snow</li>
  unOrderedListEl.append(newListItem);
});
