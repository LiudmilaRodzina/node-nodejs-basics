import fs from 'fs/promises';

const copy = async () => {
  const folder = './src/fs/files';
  const folderCopy = './src/fs/files_copy';

  try {
    await fs.access(folder);

    try {
      await fs.access(folderCopy);
      throw new Error('FS operation failed');
    } catch {
      await fs.mkdir(folderCopy);
    }

    const files = await fs.readdir(folder);
    for (const file of files) {
      await fs.copyFile(`${folder}/${file}`, `${folderCopy}/${file}`);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
