const fs = require('fs');
const request = require('request');

let inputArgArray = process.argv.slice(2);
// element 0 = url 
// element 1 = local path 
let URL = inputArgArray[0]
let localFile = inputArgArray[1];

request(URL, (error, response, body) => {
  if (error) {
    throw error;
  } else {
  fs.appendFile(localFile, body, function (data) {
    if (error) throw error;

    const stats = fs.statSync(localFile);
    const numOfBytes = stats["size"]
   

   

    console.log(`Downloaded and saved ${numOfBytes} bytes to ${localFile}`);
  });
}
});



// fs.WriteFile

//
// fs.writeFile(localFile,)

// fs.appendFile(localFile, body, function (err) {
//   if (err) throw err;
//   console.log(`Downloaded and saved ${localFile.size} to ${localFile}`);
// });

// How do you find the file size?
// var fileSize = document.getElementById('file').files[0].size;




