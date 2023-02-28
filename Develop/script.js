// Assignment Code
var generateBtn = document.querySelector("#generate");

var result = ''

// possible password values

var values = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "c", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ['!', "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"],
}

function generatePassword() {

  var userChoise = window.prompt("Input a number between 8 & 128");

  // what happens if user hits cancel

  if (!userChoise) {
    return "Retry: Enter character limit";
  }

  // what happens if user does not follow character guidlines

  else if (
    (userChoise < 8) ||
    (userChoise > 128)
  ) {
    return "Retry: Your input must be between 8 & 128 characters";
  }

  // allows user to select which characters to include
  
  var characterLower = window.confirm("Include Lowercase?");

  var characterUpper = window.confirm("Include Uppercase?");

  var characterNumber = window.confirm("Include Numbers?");

  var characterSpecial = window.confirm("Include Special Characters");


  // runs a for loop for the number that the user selected for a password length
  
  for (var i = 0; i < userChoise; i++) {

    // includes the selected charcters in the for loop and adds the values to in array in var result
    
    if (characterLower) {

      var mathLower = Math.floor(Math.random() * values.lower.length);

      var randomLower = values.lower[mathLower];

      result += randomLower;
    }

    if (characterUpper) {

      var mathUpper = Math.floor(Math.random() * values.upper.length);

      var randomUpper = values.upper[mathUpper];

      result += randomUpper;

    }

    if (characterNumber) {

      var mathNumber = Math.floor(Math.random() * values.number.length);

      var randomNumber = values.number[mathNumber];

      result += randomNumber;

    }

    if (characterSpecial) {

      var mathSpecial = Math.floor(Math.random() * values.special.length);

      var randomSpecial = values.special[mathSpecial];

      result += randomSpecial;

    }

  }

  // returns the array values of var result and limits it to the length of the users selected password length

  return result.slice(0, userChoise);



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




