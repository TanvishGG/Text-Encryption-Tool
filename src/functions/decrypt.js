/**
 * Decrypts the given encrypted Text.
 * @param {String} text The Text to Decrypt.
 * @param {String} password The Password of the encrypted Text.
 * @returns {Object} The Object containing the decrypted Text.
 */
function decryptText(text,password) {
function decodeFromBase64(encodedText) {
  return atob(encodedText);
}
function reverseString(text) {
  return text.split('').reverse().join('');
}

function replaceText(string, keyValuePairs) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (keyValuePairs.hasOwnProperty(character)) {
      result += keyValuePairs[character];
    } else {
      result += character;
    }
  }
  return result;
}
if(!text) throw new Error("Text is not provided");
const text1 = decodeFromBase64(reverseString(text))
if(!password) throw new Error("Password is not provided");
const key1 = decodeFromBase64(reverseString(password))
const txt1 = key1.split("@")[0];
const txt2 = key1.split("@")[1];
const keyValuePairs = {};
for (let i = 0; i < txt1.length; i++) {
  const char1 = txt1[i];
  const char2 = txt2[i];
  keyValuePairs[char1] = char2;
}
const out = replaceText(text1,keyValuePairs)
return {
  text:out
};
}
module.exports = decryptText;