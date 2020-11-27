# let
- let sebuah keyword yang memungkinkan kita untuk mendeklarasikan variabel dengan block scope.
- gabisa di redeclare dengan let -let. cuma bisa reassigned kyk gini:
```JavaScript
let a = 5
a = 1
```

# const
- sifatnya konstant.
- ketika udah di declare gabisa di re-assigned lagi, gabisa diubah-ubah lagi

```JavaScript
var nomor = 0
var nomor = 5
console.log(nomor) // bisa

var nomor = 0
nomor = 5
console.log(nomor) // bisa

let nomor = 0
let nomor = 5
console.log(nomor) // gabisa

let nomor = 0
nomor = 5
console.log(nomor) // bisa
```

const -> value yang gaakan berubah

```JavaScript
const rumusKelilingLingkaran = 2 * 3.14 // kelilingLingkaran kan udh pasti ya. jadi buat menghindari reassignment, pake const aja.
let jariJari = 5
console.log(rumusKelilingLingkaran * jariJari)
```


# Block-Scope --> area di dalam if, switch, dll
kalo di luar definisiinnya, itu namanya global scope, bisa diakses se-satu file.

```JavaScript
var kondisi = true
let counter = 0

if (kondisi) {
  let counter = 0
  console.log(counter)
  counter ++
  console.log(counter, 'ini di dalam if')
} else {
  let counter = 1 // kalo namanya sama, ngambil dari counter sini dulu, kalo gaada, ngambil tingkat diatasnya
  console.log(counter, 'ini di dalem else') 
}
console.log(counter, 'ini di luar if')
// bisa soalnya beda scope meskipun namanya sama
```

### Re-declare let

```JavaScript
let kondisi = true

if (kondisi) {
  var angka = 10
}

if (kondisi) {
  var angka = 15
}

console.log(angka) //bisa, variabel angka 10 di if direplace jadi angka 15 di if kedua, jadi ngeprint angka nya yang terakhir
```

```JavaScript
let kondisi = true

if (kondisi) {
  let angka = 10
}

if (kondisi) {
  let angka = 15
}

console.log(angka) //gabisa. soalnya keitungnya redeclare
```

### re-declare kasus 2

```JavaScript
var angka = 5
var kondisi = true

if (kondisi) {
  var angka = 20
  angka += 20
}
console.log(angka) // malah baca angka = 20 soalnya ke redeclare dari scope if
```

```JavaScript
let angka = 5
let kondisi = true

if (kondisi) {
  let angka = 20
  angka += 20
}
console.log(angka) // mau baca angka = 5. dan bisa soalnya scope nya kan beda. jadi itungannya ga ke redeclare
```


## nested loop
```JavaScript
for (var i = 0; i < 5; i++) {
  console.log(i) // print 0
  for (var i = 0; i < 5; j++) { // pas i udah 4
    console.log ('nested') // print nested sebanyak 4
  }
  // i + 1 jadi 5
  // terus udah weh i yang for pertama itu ga i < 5 lagi. jadi cuma print 0
}

for (let i = 0; i < 5; i++) {
  console.log(i)
  for (let i = 0; i < 5; j++) {
    console.log ('nested')
  }
} // bisa soalnya beda scope. tapi gadisaranin nama let i nya sama
```

```JavaScript
let word = 'afgan'
for (let i = 0; i < 5; i++) {
  console.log(i)
  for (let j = 0; j < word.length; j++) {
    console.log('     ', word[j])
  }
}
```

# template literals
- bisa pake operasi matematika langsung juga. tapi kalo bisa mah kalo display tuh ya cuma variabel fix yg mau diprint aja. sebisa mungkin jangan ada operasi lagi di print
- bisa multi line ke bawah

```JavaScript
let nama = 'agung'
let uang = 50000
let kelas = 'hacktiv8'
let belanjaan = 'daging dan telur'

// cara lama 
console.log(nama + 'dari kelas ' + kelas + ', pergi ke pasar membawa uang Rp.' + uang + 'untuk membeli ' + belanjaan)

concole.log('Rp.', uang)
```

kalo pake + itu semua jadi string. tapi kalo pake koma, type data nya masih tetep number misal.

```JavaScript
let nama = 'agung'
let uang = 50000
let kelas = 'hacktiv8'
let belanjaan = 'daging dan telur'

console.log(`${nama} dari kelas ${kelas}
pergi ke pasar membawa uang Rp.${uang - 5000}
untuk membeli ${belanjaan}`)
```


