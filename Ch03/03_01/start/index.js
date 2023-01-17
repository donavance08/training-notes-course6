const { createServer } = require('http');
const { createReadStream, stat } = require('fs');
const { promisify } = require('util');

const fileName = '../../powder-day.mp4';
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);

  res.writeHead(200, {
    'Content-length': size,
    'Content-type': 'video/mp4',
  });

  createReadStream(fileName).pipe(res);
}).listen(3000, () => console.log('server running port 3000'));
