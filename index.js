
const parseArgs = require('./src/args-parser');
const main = require('./src/main-process');

const args = parseArgs();
if (!args.category && !args.level) {
  console.log('Missing arguments,use -h for help');
}
main(args);
