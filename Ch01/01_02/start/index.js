const delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        // to be passed to the .then function
        resolves('the delay has ended');
    }, seconds * 1000);
});

delay(1)
    .then((message) => {
        console.log(message);
    });

    /* 
        .then(console.log) will also work 
    */

console.log('end first tick');
