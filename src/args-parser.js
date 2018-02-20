const { ArgumentParser } = require('argparse');

module.exports = function parseArgs() {
  const parser = new ArgumentParser({
    addHelp: true,
    description: 'Exercise',
  });
  parser.addArgument(
    ['--category'],
    {
      type: 'int',
      action: 'store',
      help: 'Search by Category Id',
    }
  );
  parser.addArgument(
    ['--level'],
    {
      type: 'int',
      action: 'store',
      help: 'Search by Tree level',
    }
  );
  const args = parser.parseArgs();
  return args;
};
