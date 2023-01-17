/**
 * we can detect backpressure by capturing the boolean value returned when we use writeStream.write()
 * then we can either pause the readStream in order to not use more memory, or we can set an option highWaterMark when creating that particular writeStream and assign a bigger stream.
 *  */

const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../../powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4', {
  highWaterMark: 1628920,
});

readStream.on('data', (chunk) => {
  // returns false when hitting a backpressure
  const result = writeStream.write(chunk);

  if (!result) {
    console.log('backpressure');
    readStream.pause();
  }
});

readStream.on('error', (error) => {
  console.log('an error occurred', error.message);
});

readStream.on('end', () => {
  writeStream.end();
});

writeStream.on('close', () => {
  process.stdout.write('file copied\n');
});

writeStream.on('drain', () => {
  console.log('drained');

  // used to resume the readStream
  readStream.resume();
});
