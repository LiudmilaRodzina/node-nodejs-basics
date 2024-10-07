import fs from 'fs/promises';

const remove = async () => {
  const fileToRemove = './src/fs/files/fileToRemove.txt';

  try {
    await fs.access(fileToRemove);
    await fs.unlink(fileToRemove);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
