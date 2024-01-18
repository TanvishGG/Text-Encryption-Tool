# Text-Encryption-Tool
An Open-source strong Text Encryption Tool


## Information 
- The decryption is not possible without the password
- The Encryption and password are mutually unique so you might find 2 same encryted texts but different passwords
- Nothing is stored during the encryption process

- This Project is available as npm package at [text-encryption-tool](https://npmjs.com/package/text-encryption-tool)
---

## Usage

1. Encryption
```js
const tes = require('text-encryption-tool');

console.log(tes.encrypt("This is a string"))
```
- output 
   ```js
   {
    text: "encrypted text",
    password: "password of the text"
   }
   ```
2. Decryption
```js
const tes = require('text-encryption-tool');
console.log(tes.decrypt('Encrypted Text','password'))
```
- output
  ```js
  { 
    text: "decrypted text"
  }
  ```

---

### Made with ❤️ by [TanvishGG](https://github.com/TanvishGG)
