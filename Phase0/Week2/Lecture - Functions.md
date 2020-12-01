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

``JavaScript
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
```
