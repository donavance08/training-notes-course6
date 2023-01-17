const fs = require('fs');

const readStream = fs.createReadStream('../../powder-day.mp4');

readStream.on('data', (chunk) => {
  console.log(`data size: ${chunk.length}`);
});

readStream.on('end', () => {
  console.log('read stream finished');
});

readStream.on('error', (error) => {
  console.log(`An error has occured`);
  console.log(`Error: ${error}`);
});

// stdin is also a stream and we can also prind that size of data
// process.stdin.on('data', (chunk) => {
//   console.log(`data size: ${chunk.length} bits`);
// });

// we can convert a flowing mode to a non flowing mode by using readStream.pause()
readStream.pause();

// here we have paused reading the stream automatically and designed it so that when a user hits enter the stream will read 1 chunk of data

process.stdin.on('data', (chunk) => {
  readStream.read();
  console.log(`data size: ${chunk.length} bits`);
});
