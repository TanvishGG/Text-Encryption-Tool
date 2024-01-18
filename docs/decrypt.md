# Decryption

## Importing
```js
const {Decrypt} = require('text-encryption-tool')
```
## Decrypting
```js
const text = "hMGbwUXZwYHICZ3TgADITRGITRWQ5BCLhYzZnN2V";
const key = "==QbsNGcuhUZnh2aUNXavFGQCdWZ290VjxWQ1l3UkZDM";
const output = Decrypt(text,key); // Decrypting the Text.
console.log(output); // logging the output.
```
#### Example Output
```js
{
   text: "Hello!, This is a npm package!"
}
```