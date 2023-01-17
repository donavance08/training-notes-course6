var fs = require('fs');
const { promisify } = require("util")
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink)
const beep = () => process.stdout.write("\x07");
const delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
})

const doStuffSequentially = () => Promise.resolve()
    .then(() => console.log('starting'))
    .then(() => delay(1))
    .then(() => 'waiting')
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile('file.txt', 'Sample File...'))
    .then(beep)
    .then(() => 'file.txt created')
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink('file.txt'))
    .then(beep)
    .then(() => 'file.txt removed')
    .then(console.log)
    .catch(console.error)



/* const doStuffSequentially = () => {
    console.log('starting');
    setTimeout(() => {
        console.log('waiting');
        setTimeout(() => {
            console.log('waiting some more');
            fs.writeFile('file.txt', 'Sample File...', error => {
                if (error) {
                    console.error(error);
                } else {
                    beep();
                    console.log('file.txt created')
                    setTimeout(() => {
                        beep();
                        fs.unlink('file.txt', error => {
                            if (error) {
                                console.error(error);
                            } else {
                                console.log('file.txt removed');
                                console.log('sequential execution complete');
                            }
                        })
                    }, 3000)
                }
            });
        }, 2000)
    }, 1000)
} */

doStuffSequentially();
