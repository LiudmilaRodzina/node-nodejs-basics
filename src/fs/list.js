import fs from 'fs/promises';

const list = async () => {
  const folder = './src/fs/files';

  try {
    await fs.access(folder);

    const filesList = await fs.readdir(folder);
    console.log(filesList);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
