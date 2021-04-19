async function fetchCountriesData(){

  let response = await axios.get('https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries')

  let data = await response.data

  createCountriesDropdown(data)
}

function createCountriesDropdown(stringData){
  //variable equals countries array.
  const selectTagOptions = stringData.split('\n');

  //variable selects tag with id of counrtry from index.html
  const countriesDropdownContainer = document.getElementById('country')

  let htmlString = '<option value="country">Select Your Country</option>'

  const html = selectTagOptions.forEach(element => htmlString += `<option value=${element}>${element}</option>`);

  countriesDropdownContainer.innerHTML = htmlString

  return countriesDropdownContainer
}

fetchCountriesData()

