import { createWriteStream } from 'fs';

const write = async () => {
  const file = './src/streams/files/fileToWrite.txt';
  const writeStream = createWriteStream(file);

  process.stdin.pipe(writeStream);

  console.log(
    'Please enter your text to write to the fileToWrite.txt. When done, enter Ctrl+C'
  );
};

await write();
