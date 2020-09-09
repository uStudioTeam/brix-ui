['tsconfig', 'package-json', 'license'].forEach((fileName) => {
  require(`./${fileName}`)();
});
