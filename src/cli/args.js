const parseArgs = () => {
  const commandLineArgs = process.argv.slice(2);

  for (let i = 0; i < commandLineArgs.length; i += 2) {
    const propName = commandLineArgs[i].replace('--', '');
    const value = commandLineArgs[i + 1];

    console.log(`${propName} is ${value}`);
  }
};

parseArgs();
