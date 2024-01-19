/**
 * Encrypts given Text input.
 * @param {String} input The Text to Encrypt.
 * @returns {Object} The Object containing encrypted Text and Password.
 */
function encryptText(input) {
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function encodeToBase64(text) {
  return btoa(text);
}
function reverseString(text) {
  return text.split('').reverse().join('');
}

function createKey(keys, values) {
let result = {}
keys.forEach(function(element, index) {
  
  result[`${keys[index]}`] = values[values.length - index - 1]
})
  return result;
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
function generateKeyString(keyValuePairs,text) {
  let keysString = '';
  let pairsString = '';

  for (const key in keyValuePairs) {
    if (keyValuePairs.hasOwnProperty(key) && text.includes(key)) {
      keysString += key;
      pairsString += keyValuePairs[key];
    }
  }

  return {
    keysString,
    pairsString
  };
    }

  const regex = /^[\x20-\x7E]*$/
  if(!input) throw new Error('Text is not provided');
  const text = input.replace(/\n/g," ")
  if(!regex.test(text)) throw new Error('Text contains invalid characters');
const characters = [  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',  'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7',  '8', '9']
const sa1 = shuffleArray(characters) 
const sa2 = shuffleArray(characters)
const keyMap = createKey(sa1,sa2)
const preText = replaceText(text,keyMap)
const pair = generateKeyString(keyMap,preText)
const key = `${pair.keysString}@${pair.pairsString}`
const key64 = encodeToBase64(key)
const final = reverseString(encodeToBase64(preText))
return {
  text:final,
  key: reverseString(key64)
}
};

module.exports = encryptText;