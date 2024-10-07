import { Transform } from 'stream';

const transform = async () => {
  process.stdout.write(
    'Please type the text that needs to be reversed and press Enter\n'
  );

  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversed = chunk.toString().split('').reverse().join('');
      callback(null, reversed);
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
