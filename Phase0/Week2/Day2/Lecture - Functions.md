# Apa itu function?
> sebuah block of code

Contoh:
```JavaScript
function printMessageHello() {
  let message = 'hello rmt08 helsinki!'
  console.log(message)
}

printMessageHello()

```
- kalo nama variabel di block scope yang berbeda, namanya boleh sama.

```JavaScript
let sayaDiluar = true

function printMessageHello() {
  // hanya gunakan variabel yang ada di dalam function
  let message = 'hello rmt08 helsinki!'
  console.log(message)
  console.log(sayaDiluar) // BAD PRACTICE
}
```
Parameter itu kayak variabel. jadi misal di dalem function nama variabelnya sama kayak nama parameter si function. Jadi error

```JavaScript
function hello(tugas1, tugas2, tugas3) {
  let message = 'selamat datang di minggu ke-2!'
  let tugas = `tugas: ${tugas1}, ${tugas2}, ${tugas3}`
  console.log(message)
  console.log(tugas)
}
```


```JavaScript
function print(nama, tempat) {
  let message = `selamat datang ${nama} di ${tempat}`
  console.log(message)
}

let listNama = 'ABC'
for (let i = 0; i < listNama.length; i++) {
  print(listNama[i], 'hacktiv8-' + i)
}
```

```JavaScript
function cekPalindrom(kata) {
    let kataTerbalik = ''

    for (let i = kata.length - 1; i>=0; i--) {
      kataTerbalik += kata[i]
    }
    if (kata === kataTerbalik) {
      // ini adalah palindrom
      return true
    } else {
      // ini bukan palindrom
      return false
    }
}

// console.log(cekPalindrom('sebuah')) // true atau false balikin valuenya

// atau

// let hasilCek = cekPalindrom('sebuah')
// if (hasilCek === true) {
  console.log('hasil cek palindrom sebuah itu berhasil, true')
// } else {
//  console.log('sebuah itu bukan palindrom, false')
// }

// atau

let hasilCek = cekPalindrom('sebuah')
console.log(hasilCek)

// Dapatkan angka palindrom berikutnya

let angka = 11
angka++
while (cekPalindrom(String(angka)) === false) {
  angka++
}
console.log(angka)

// ATAU
let hasilCek = cekPalindrom(String(angka))
while (hasilCek === false) {
  angka++
}
console.log(angka)

```
```JavaScript
function print(nama, tempat) {
  let message = `selamat datang ${nama} di ${tempat}`
  console.log(message)
  return 'selesai print'
  
 console.log(print('haydar', 'kelas'))
}
```

```JavaScript
function keDapur(pesanan) {
  return pesanan + ' matang'
  
 console.log(keDapur('mie'))
}
```

```JavaScript
function print(nama, batch, isPria) {
  let message = ''
  if (isPria) {
    message = `selamat datang ${nama} di ${batch}`
  } else {
    message = `selamat datang ${nama} di ${batch} @female-dev`
  }
  
  return message
  
console.log(print('anna', 8, true))
console.log(print('teddy', 21, false))
}
```


```JavaScript
function print(nama, batch, isPria) {
  if (typeof batch != 'number') {
    return 'invalid input'
  }
  
  let message = ''
  if (isPria) {
    message = `selamat datang ${nama} di ${batch}`
  } else {
    message = `selamat datang ${nama} di ${batch} @female-dev`
  }
  
  return message
  
console.log(print('anna', 8, true))
console.log(print('teddy', 21, false))
console.log(print('anita', 'hai', false))
}
```
