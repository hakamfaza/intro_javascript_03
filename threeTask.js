const makeID = (nama, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isAge = age >= 17;
      if (isAge) {
        resolve(`Create ID Card ${nama}`)
      } else {
        reject('Still under seventeen years old!');
      }
    }, 3000)
  })
}

const main = async () => {
  try {
    console.log('Loading...');
    const data = await makeID('Muhamad Hakam Faza', 19)
    console.log(data)
  }
  catch (err) {
    console.log(err)
  }
}
main()

// makeID('Muhamad Hakam Faza', 19)
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// const saying = (subject, sentence) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${subject}, ${sentence}`);
//     })
//   })
// }
// saying('Halo semuanya', 'selamat pagi!')
//   .then((res) => {
//     console.log(res)
//   })