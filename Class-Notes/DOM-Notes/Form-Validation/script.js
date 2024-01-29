console.log("Script ran!");
function validateForm() {
  console.dir(document.forms);
  let inputValue = document.forms["myForm"]["fname"].value;
  console.log(inputValue);
  if (inputValue == "" || inputValue.length > 2) {
    alert("Fomr validation failed");
    return false;
  }
}
