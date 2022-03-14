// import fetch from "node-fetch";

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
// 	});


import fetch from 'node-fetch';

const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await response[0].json();

console.log(data);