const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const resultName = json.forEach((element) => {
      const callName = element.name;
      return console.log(callName)
    });
    // console.log(resultName())
  })
  .catch(() => {
    console.log('ERROR!')
  })