import fs from 'fs/promises';
const rename = async () => {
  const wrongFile = './src/fs/files/wrongFilename.txt';
  const properFile = './src/fs/files/properFilename.md';

  try {
    await fs.access(wrongFile);

    try {
      await fs.access(properFile);
      throw new Error('FS operation failed');
    } catch (error) {
      await fs.rename(wrongFile, properFile);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
