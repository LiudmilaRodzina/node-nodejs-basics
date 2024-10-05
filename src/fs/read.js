import fs from 'fs/promises';

const read = async () => {
  try {
    const data = await fs.readFile('./src/fs/files/fileToRead.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log('FS operation failed');
  }
};

await read();
