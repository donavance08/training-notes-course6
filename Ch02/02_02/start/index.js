const { Readable } = require('stream');

const peaks = [
  'Tallac',
  'Ralston',
  'Rubicon',
  'Twin Peaks',
  'Castle Peak',
  'Rose',
  'Freel Peak',
];

class StreamFromArray extends Readable {
  constructor(array) {
    /*     
        *   we can read data as string by setting encoding options to UTF-8
        
        *   super({ encoding: 'utf-8' });

        *   by default it is set to binary 

        *   turning ON object mode will allow your data to be sent as object

    */

    super({ objectMode: true });
    this.array = array;
    this.index = 0;
  }

  // we need to implement _read function everytime we extend
  _read() {
    if (this.index <= this.array.length) {
      const chunk = {
        data: this.array[this.index],
        index: this.index,
      };
      this.push(chunk);
      this.index += 1;
    } else {
      // in object mode, this sends one last data with undefined value
      this.push(null);
    }
  }
}

const peakStream = new StreamFromArray(peaks);

peakStream.on('data', (chunk) => {
  console.log(chunk);
});

peakStream.on('end', () => {
  console.log('done');
});
