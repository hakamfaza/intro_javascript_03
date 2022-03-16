const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    json.forEach((element) => {
      const callName = element.name;
      console.log(callName)
    });
  })
  .catch(() => {
    console.log('ERROR!')
  })