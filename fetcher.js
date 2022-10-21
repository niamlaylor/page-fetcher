const arguments = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

let content;

request(arguments[0], (error, response, body) => {
  if (error) {
    console.log(error);
  };
  console.log('Response: ', response);
  fs.writeFile(arguments[1], body, err => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(`Downloaded and saved ${body.length} bytes to ${arguments[1]}`)
    }
  })
});