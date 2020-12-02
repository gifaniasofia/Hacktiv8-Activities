# Nested Array/ Multidimensi Array
> array di dalam array

```JavaScript
let input = [
  ['Acong, 'Djoko', 'Sitorus'], // elemen ke 0 dari input
  ['Albert, 'Punjab', 'Gilbert', 'Reyansh'], // elemen ke 1 dari input
  ['Krisha, 'Saanvi', 'Vihaan'], // elemen ke 2 dari input
];

console.log(input[1][1]); // Punjab
console.log(input[1]); // ['Albert, 'Punjab', 'Gilbert', 'Reyansh']
console.log(input[2][2][0]); // huruf V dari Vihaan

// Tampilkan semua nama pada input ke bawah

for (let i = 0; i < input.length; i++) {
  console.log(input[i]) // input ke i adalah sebuah array. jadi kudu di looping deui
  for (let j = 0; j < input[i].length; j++) { // array nya sekarang adalah input[i] makanya loopingnya input[i]
    console.log(input[i][j])
  }
}
```

Array dapat dipandang sebagai tabel
```JavaScript
/*
1. Tampilkan record (keseluruhan 1 baris) yang memiliki umur < 25
2. Tampilkan record yang belum menikah
3. Tampilkan record yang memiliki nama dengan awalan huruf S
4. Cari record dengan umur paling tinggi
5. Hitung rata-rata umur dari record
*/

let input = [
  ['Acong', 20, false],
  ['Budi', 18, false],
  ['Sitorus', 25, true],
  ['Albert', 17, false],
  ['Punjab', 40, false],
  ['Krisha', 25, false],
  ['Saanvi', 40, true],
  ['Vihaan', 36, false],
  ['Reyansh', 28, true],
]

// Nomor 1
for (let i = 0; i < input.length; i++) {
  console.log(input[i][1]) // akses baris ke-i kolom ke 1(umur)
  if (input[i][1] < 25) {
    console.log(input[i])
  }
}

// Nomor 2
for (let i = 0; i < input.length; i++) {
  console.log(input[i][2]) // marital status
  if (input[i][2] === false) {
    console.log(input[i])
  }
}

// Nomor 3
for (let i = 0; i < input.length; i++) {
  console.log(input[i][0][0]) // huruf awalan nama dari input[i][0] (kolom nama)
  if (input[i][0][0] === 'S') {
    console.log(input[i])
  }
}

// Nomor 4
/*
ALGORITMA
a. Mencari umur paling tinggi dulu
b. Mencari record yang umurnya sama dengan umur tertinggi, masukkan ke penampung
*/

// Proses A --> harus looping sampai selesai buat menyimpulkan umur tertua adalah 40
let oldestAge = 0;
let penampung = [];

for (let i = 0; i < input.length; i++) {
  if (input[i][1] > oldestAge) {
    oldestAge = input[i][1];
  }
}

console.log('Oldest age: ', oldestAge);

// Proses B
let output = [];

for (let i = 0; i < input.length; i++) {
  if (input[i][1] === oldestAge) {
    output.push(input[i]);
  }
}
console.log(output);

// ============================================================================//
// Cara 2 - Proses A&B tapi ini mah cuma nampilin yang umur 40 nya orang paling awal doang, bukan semua yang umurnya 40
let banding = 0;
let highestIndex = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i][1] > banding) {
    banding = input[i][1];
    highestIndex = i;
  }
}

console.log(input[highestIndex]);

// Nomor 5

let totalAge = 0;
for (let i = 0; i < input.length; i++) {
  totalAge += input[i][1];
}
let avgTotalAge = totalAge / input.length;
console.log(avgTotalAge);

```
