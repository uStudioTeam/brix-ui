const fs = require('fs');
const path = require('path');

['../package.json', '../../../README.md', '../../../LICENSE'].forEach(filePath => {
  const filePathArray = filePath.split('/');
  const fileName = filePathArray[filePathArray.length - 1];

  fs.copyFileSync(path.resolve(__dirname, filePath), path.resolve(__dirname, '../lib', fileName), error => {
    if (error) {
      console.log(error);
      process.exit(1);
    }
  });
});
