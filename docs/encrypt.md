# Encryption

## Importing
```js
const {encrypt} = require('text-encryption-tool')
```
## Encrypting
```js
const text = `Hello!, This is a npm package!`; // Text to Encrypt.
const output = encrypt(text); // Encrypting the Text.
console.log(output); //logging the encrypted Text.
```
#### Example Output
```js
{
    text: "hMGbwUXZwYHICZ3TgADITRGITRWQ5BCLhYzZnN2V",
    key: "==QbsNGcuhUZnh2aUNXavFGQCdWZ290VjxWQ1l3UkZDM"
}
```