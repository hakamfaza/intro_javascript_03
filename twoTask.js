const getMonth = (callback) => {
  setTimeout (() => {
    let error = false
    let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}

const resultMonth = (err, data) => {
  if (err) {
    console.log(err)
  } else {
    data.map((e) => console.log(e))
  }
}

// getMonth(resultMonth);

const main = async () => {
  try {
    console.log('Loading...')
    getMonth(resultMonth);
  }
  catch (err) {
    throw err
  }
}

main()