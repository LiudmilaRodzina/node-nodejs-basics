import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const inputFile = './src/zip/files/fileToCompress.txt';
  const outputFile = './src/zip/files/archive.gz';

  const readStream = createReadStream(inputFile);
  const gzip = createGzip();
  const writeStream = createWriteStream(outputFile);

  readStream.on('data', (chunk) => {
    gzip.write(chunk);
  });

  readStream.on('end', () => {
    gzip.end();
  });

  gzip.on('data', (chunk) => {
    writeStream.write(chunk);
  });
};

await compress();
