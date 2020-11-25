# String property & Method

1. information == property

```Javascript
var batch = 'rapid';
console.log(batch.length);
```

- length diitung dari 1


2. functionality == method (built in function)

```Javascript
var batch = 'rapid';
console.log(batch.slice(0, 2));
```
# String index
Every character in a string has an indicator to access the character called index.
- Dimulai dari 0
- Accessing the index :
```Javascript
var batch = 'rapid';
console.log(batch[0]);
```

# Demo
- Ambil index terakhir :
```JavaScript
var batch = 'rapidwlwlwlwwllw';
console.log(batch[batch.length - 1]);
```
- Built in function : slice
```JavaScript
var batch = 'rapidwlwlwlwwllw';
console.log(batch.slice(0, 3)) // 0 1 2
```


# Perbedaan if-if/if-else if-else

- If-Else if : jika satu kondisi terpenuhi, maka dia tidak akan mengecek kondisi bawahnya
- If-if : dipakai jika kita mau menjalankan beberapa kondisi sekaligus

Contoh :
Kondisional 1 :
- Jika lapar, tampilkan 'makan ah'
- Jika haus, tampilkan 'minum ah'
Algoritma :
- Buat variabel lapar yang isinya boolean
- Buat variabel haus yang isinya boolean
- Jika lapar adalah true
  - Tampilkan 'makan ah'
- Selain itu, jika haus adalah true
  - Tampilkan 'minum ah' 

```JavaScript
var lapar = true;
var haus = true;

if (lapar === true) {
  console.log('makan ah')
}
if (haus === true) {
  console.log('minum ah')
}
```


# Nested condition

Soal :
Buatlah sebuah program untuk mengecheck apakah seorang user dapat membeli sebuah barang atau tidak. Setiap barang yang akan dibeli akan memiliki stock dan harga barang tersebut. Setiap user akan memiliki data uang yang dia miliki dan jumlah barang yang ingin dibeli. Syarat untuk membeli barang tsb adalah:
1. Stock harus tersedia agar barang tersebut bisa dibeli. Jika stock tidak tersedia maka tampilkan 'stok tidak tersedia'
2. Uang yang dimiliki user harus cukup untuk membeli barang sejumlah yang dia inginkan. Jika uangnya cukup maka tampilkan 'berhasil memberi barang' dan ketika uangnya tidak cukup maka tampilkan 'uang tidak cukup'.

MIND MAP
- Penampung : stokBarang, jumlahUang, jumlahBeli
- Kondisi :
  - Jika stok tersedia
    - Jika uang cukup
      - Tampilkan 'berhasil memberi barang'
    - Jika uang tidak cukup
      - Tampilkan 'uang tidak cukup'
  - Jika stok tidak tersedia
    - Tampilkan 'stok tidak tersedia'

ALGORITMA
- Buat penampung stokBarang yang isinya angka
- Buang penampung jumlahUang yang isinya angka
- Buat penampung jumlahBeli yang isinya angka
- Buat penampung hargaBarang yang isinya angka
- Buat penampung totalHarga yang isinya hargaBarang * jumlahBeli

- Jika stokBarang lebih dari atau sama dengan jumlahBeli
  - Jika jumlahUang lebih dari atau sama dengan totalHarga
    - Tampilkan 'berhasil membeli barang'
  - Selain itu
    - Tampilkan 'uang tidak cukup'

- Selain itu
  - Tampilkan 'stok tidak tersedia'
  
```JavaScript
var stokBarang = 5;
var jumlahUang = 10000;
var jumlahBeli = 5;
var hargaBarang = 3000;
var totalHarga = hargaBarang * jumlahBeli
 
if (stokBarang >= jumlahBeli) {
  if (jumlahUang >= totalHarga) {
    console.log('Berhasil membeli barang');
  } else {
    console.log('Uang tidak cukup');
  }
  
} else {
  console.log('Stok tidak tersedia');
}
```

SOAL 2 :
Buatlah sebuah program untuk mensimulasikan pemesanan makanan pada aplikasi gofood. Beberapa syarat yang harus dipenuhi untuk memsan makanan pada sebuah restoran adalah:

1. Restoran hanya buka dari pukul 8 pagi hingga 6 sore
2. Restoran hanya menyediakan makanan Indonesia dan makanan Korea
3. Terdapat dua cara untuk melakukan pembayaran menggunakan cash ataupun gopay
4. Jika menggunakan gopay maka harga makanan nya akan diberikan diskon sebanyak 10%

MIND MAP
- Variabel : jamBuka, jamTutup, jenisMakanan, metodePembayaran, hargaMakanan

- Jika jamBuka antara 8 sampai 18
  - Jika jenisMakanan adalah Indonesia atau Korea
      - Jika metodePembayaran adalah cash
        - Tampilkan 'bisa beli makanan, harga makanan: hargaMakanan'
      - Jika metodePembayaran adalah gopay
        - Tampilkan 'bisa beli makanan, harga makanan: hargaMakanan * 0.9'
  - Jika selain itu
    - Tampilkan 'makanan tidak tersedia'

- Jika tidak
  - Tampilkan 'restoran tutup'

```JavaScript
// Your code here
```

# Math Function

- Math.floor(num) --> ngebulatin ke bawah

```JavaScript
var num = 5.95

console.log(Math.floor(num));
```

- Math.ceil(num) --> ngebulatin ke atas
- Math.round(num) --> ngebulatin ke yang terdekat (pembulatan >= .5 atau < .5)
- Math.random() --> random antara 0 - 0.99999999 (tapi gasampe 1)

```JavaScript
console.log(Math.round(Math.random() * 5));
```
- Math.absolute()

# Switch case
- lebih simpel keliatannya dibandingkan if-else
- switch case tidak bisa pakai perbandingan > < >= <= dll, kalo ada perbandingan switch jadi ngasih default.
- jadi : dipakai ketika kondisinya banyak dan tidak ada perbandingan

Contoh : lampu lalu lintas

```JavaScript
var lampuLaluLintas = 'merah';
var waktu = 'pagi';

switch(lampuLaluLintas) {
  case 'merah':
    console.log('berhenti');
      if (waktu === 'pagi') {
        console.log('berhenti pagi-pagi');
      } else if (waktu == 'malam') {
        console.log('berhenti malem-malem');
      };
    break;
  case 'orange':
    console.log('jalan');
    break;
  case 'hijau':
    console.log('jalan');
    break;
  default:
    console.log('lampu rusak');
    break;
};
```

# Review Tugas
1. Play with String
2. Cafe-Visitation
3. Gatcha

