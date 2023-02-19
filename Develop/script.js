// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var userChoise = window.prompt("Input a number between 8 & 128");

if (!userChoise) {
  return "Retry: Enter character limit";
}

if ( 
  (userChoise < 8) ||
  (userChoise > 128)
  ) {
    return "Your input must be between 8 & 128 characters";
}

var characterLower = window.confirm("Include Lowercase?");

var characterUpper = window.confirm("Include Uppercase?");

var characternum = window.confirm("Include Numbers?");

var characterSpecial = window.confirm("Include Special Characters");

var random = {
  lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","c","y","z"],
  upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ['!', "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"],
}



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




