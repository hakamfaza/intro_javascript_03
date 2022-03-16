const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja('ahad')
  .then ((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err.message)
  })

// Then catch digunakan dengan cara menggunakan dua paremeter di arrow function promise, kemudian memanggilnya menggunakan nama function.then().catch()
// .then() menghasilkan output true
// .catch() menghasilkan output false


// const main = async () => {
//   try {
//     console.log('Loading...');
//     const data = await cekHariKerja('senin');
//     console.log(data)
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// main()

// trycatch digunakan untuk mengkondisikan output, jika semua output true maka program akan dijalankan. Jika terdapat output yang false maka akan di lemparkan ke catch.

// catch digunakan untuk output kondisi false

