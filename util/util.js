var fs = require('fs');

function txtFileToArray () {
  const countriesArray = fs.readFileSync('country-list.txt', 'utf8').split('\n');
  console.log(countriesArray)
  return countriesArray
}

const selectTagOptions = txtFileToArray()

