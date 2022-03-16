const makeID = (nama, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberId = Math.floor((Math.random() * 1000000) + 100000)

      if (age >= 17) {
        resolve(`Create ID Card:
        Nama: ${nama}
        Age: ${age}
        Nomor ID: ${numberId}`)
      } else {
        reject('Still under seventeen years old!');
      }
    }, 3000)
  })
}

// const main = async () => {
//   try {
//     console.log('Loading...');
//     const data = await makeID('Muhamad Hakam Faza', 17)
//     console.log(data)
//   }
//   catch (err) {
//     console.log(err)
//   }
// }
// main()

// makeID('Muhamad Hakam Faza', 19)
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const saying = (subject, sentence) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hour = new Date().getHours();
      if(hour >= 4 && hour <= 10) {
        resolve(`${subject}, selamat pagi!`)
      } else if (hour > 10 && hour <= 14) {
        resolve(`${subject}, selamat siang!`)
      } else if (hour > 14 && hour < 18) {
        resolve(`${subject}, selamat sore!`)
      } else if (hour >= 18 || hour < 4) {
        resolve(`${subject}, selamat sore!`)
      } else {
        throw Error
      }
    }, 2000)
  })
}
saying('Hakam')
  .then((res) => {
    console.log(res)
  })