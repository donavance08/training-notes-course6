/**
 * We learn how to make writable stream
 * desctructuring createReadStream and createWriteStream instead of calling the function everytime is also going to work
 * everytime our readstream reads a chunk of data we will forward it to the writestream which in turn will write the data onto a file copy.mp4
 *  */

const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../../powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
  // console.log('size: ', chunk.length);
  writeStream.write(chunk);
});

readStream.on('error', (error) => {
  console.log('an error occurred', error.message);
});

readStream.on('end', () => {
  console.log('done!');

  //   when there is no longer any data we end writeStream
  writeStream.end();
});

writeStream.on('close', () => {
  // process.stdout also uses writable stream
  process.stdout.write('file copied /n');
});
