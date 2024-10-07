import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const file = './src/hash/files/fileToCalculateHashFor.txt';
  const hash = createHash('sha256');

  const stream = createReadStream(file);

  stream.on('data', (chunk) => hash.update(chunk));
  stream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
