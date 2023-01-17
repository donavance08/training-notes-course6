const { promisify } = require('util');
const fs = require('fs');

const writeFile = promisify(fs.writeFile);

writeFile('sample.text', 'This is a sample')
    .then(()=> console.log('file successfully created'))
    .catch((error)=> console.log(`error: ${error.message}`));



// var delay = (seconds, callback) => {
//     if (seconds > 3) {
//         callback(new Error(`${seconds} seconds it too long!`));
//     } else {
//         setTimeout(() =>
//             callback(null, `the ${seconds} second delay is over.`),
//             seconds
//         );
//     }
// }

// /* 
// delay(2, (error, message) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         console.log(message);
//     }
// }); 
// */

// const promiseDelay = promisify(delay)

// promiseDelay(4)
//     .then(console.log)
//     .catch((error) => console.log(`'error: ${error.message}`));
