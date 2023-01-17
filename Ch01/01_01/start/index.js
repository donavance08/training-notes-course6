
// /* 
//     This is called continuation passing style where we converted a synchronous function to one that uses a callback
//     function functionName(variable, callback){
//     }
// */
// function hideString(str, done) {

//     // process.nexTick() is a function that tell nodejs to execute it on the next loop to create a sort of artificial delay
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     })
// }

// hideString("Hello World", (hidden) => {
//     console.log(hidden);
// });

// console.log('end');


function delay(seconds, callback){
    setTimeout(callback, seconds * 1000);
}

console.log('starting delays');
delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        });
    });
});



