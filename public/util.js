//file system module. - can't use this from the browser. Move it to node or use ajax.

//backend - route to return a json obj that is an array.
var fs = require('fs');

//to index.html need to add script
//<script type="text/javascript" src="script.js"></script>

//The fs.readFileSync() method is an inbuilt application programming interface of fs module which is used to read the file and return its content. Can become an async function.
function txtFileToArray () {
  //.split() takes a string and returns it as an array. /n specifies a new line as a seperator.
  //moved folders and forgot to change file path in submitted version.
  const countriesArray = fs.readFileSync('country-list.txt', 'utf8').split('\n');

  console.log(countriesArray)
  return countriesArray
}

//front end
function createCountriesDropdown(){
  //variable equals countries arrays.
  const selectTagOptions = txtFileToArray()
  console.log(selectTagOptions)

  //variable selects id from index.html
  const countriesDropdownContainer = document.getElementById('country')

  let htmlString = ''

  const html = selectTagOptions.forEach(element => htmlString += `<option value=${element}>${element}</option>`);

  countriesDropdownContainer.innerHTML = htmlString

  return countriesDropdownContainer
}

//here add document.ready.


