import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const inputFile = './src/zip/files/archive.gz';
  const outputFile = './src/zip/files/fileToCompress.txt';

  const readStream = createReadStream(inputFile);
  const gunzip = createGunzip();
  const writeStream = createWriteStream(outputFile);

  readStream.on('data', (chunk) => {
    gunzip.write(chunk);
  });

  readStream.on('end', () => {
    gunzip.end();
  });

  gunzip.on('data', (chunk) => {
    writeStream.write(chunk);
  });
};

await decompress();
