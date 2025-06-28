const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arr2 = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "<", ">", "?", "/", ".", ";", "\"", "'", ":", "|", "~", "`", "-"];

function generatePassword(length = 12) {
  const single = arr.concat(arr1, arr2);
  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * single.length);
    password += single[random];
  }
  return password;
}

console.log("Generated password:", generatePassword());
