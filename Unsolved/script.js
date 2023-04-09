// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
//calculate length of password and check if the password length is minimum of 8 characters and maximum of 128 characters
   var passwordLength = parseInt(prompt ("please enter the length of the password,\n minimum of 8 characters and maximun of 128 characters"));

   if (passwordLength < 8 || passwordLength > 128) {
 
  alert("ERROR!\n Please enter correct length of password \n Minimum of 8 characters and maximum of 128 characters.");
   return " ";
} else {
  alert("your password will be "+ passwordLength +" characters long .");
}

//ask the user for which characters to include 

var includeLowercase = confirm("Do you want to include lowercase letters in password?");
var includeUppercase = confirm("Do you want to include uppercase letters in password?");
var includeSpecialCharacters = confirm("Do you want to include special characters in  password?");
var includeNumbers = confirm("Do you want to iInclude Numbers in password?");
 
// validate type of characters 
if(includeLowercase){
  alert("Your password will include Lowercase letters");
} else {
  alert("Your password will NOT have lowercase letters");
};
if(includeUppercase){
  alert("your password will include Uppercase letters");
  } else{
    alert("Your password will NOT include Uppercase letters");
};
if(includeSpecialCharacters) {
  alert("Your password will include Special characters");
} else{
  alert("Your password will NOT include Special characters");

};

if (includeNumbers){
  alert("Your password will iclude numbers");
}else {
  alert("Your password will NOT include numbers");
};
if(!includeLowercase && !includeUppercase && !includeSpecialCharacters && !includeNumbers){
  alert ("ERROR!Please select at least one character types" );
  
}
 
 //Generate a random password

let passwordCharacters=[];
const specialCharacters="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let passwordNumbers=[];
const numbers ="1234567890";
let passwordUppercase=[];
const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLowercase=[];
const lowercase= "abcdefghijklmnopqrstuvwxyz";
let  passChar = "";
//return generated password

if (includeSpecialCharacters) {
  passwordCharacters=passwordCharacters.concat(specialCharacters.split(""));
  passChar+=passwordCharacters;

}

if (includeNumbers){
  passwordNumbers=passwordNumbers.concat(numbers.split(""));
  passChar+=passwordNumbers;

}

if(includeUppercase){
  passwordUppercase=passwordUppercase.concat(uppercase);
  passChar+= passwordUppercase;
  
}

if (includeLowercase){
  passwordLowercase=passwordLowercase.concat(lowercase );
  passChar+=passwordLowercase;
}
//generate random password 
let results = "";
 for (i=0;i<passwordLength;i++) {
  
  results += passChar.charAt(Math.floor(Math.random()* passChar.length));
 }
  return results;

};


//return generated password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
