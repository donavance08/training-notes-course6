
/* 
    This is called continuation passing style where we converted a synchronous function to one that uses a callback
*/
function hideString(str, done) {

    // process.nexTick() is a function that tell nodejs to execute it on the next loop to create a sort of artificial delay
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    })
}

hideString("Hello World", (hidden) => {
    console.log(hidden);
});

console.log('end')


