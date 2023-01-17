/**
 * for this we can create a pipeline for data to passthrough and create a report or throttle it if necessary
 *
 */
const { createReadStream, createWriteStream } = require('fs');
const { Duplex, PassThrough } = require('stream');

const readStream = createReadStream('../../powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');

// creating a class for setting the throttle
class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _read() {}

  _final() {
    this.push(null);
  }
}

const report = new PassThrough();
const throttle = new Throttle(10);

let total = 0;
report.on('data', (chunk) => {
  total += chunk.length;
  console.log('bytes: ', total);
});

readStream.pipe(throttle).pipe(report).pipe(writeStream);
