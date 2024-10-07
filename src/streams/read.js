import { createReadStream } from 'fs';

const read = async () => {
  const file = './src/streams/files/fileToRead.txt';
  const readStream = createReadStream(file, { encoding: 'utf-8' });

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();
