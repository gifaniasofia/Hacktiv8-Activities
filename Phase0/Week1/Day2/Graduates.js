/*
ALGORITMA
=========
1. Siapkan variabel nama dan diisi dengan nama murid yang diinginkan
2. Siapkan variabel nilai dan diisi dengan nilai murid tersebut
3. Siapkan variabel absen dan diisi dengan jumlah absen murid tersebut
2. Cek nilai dan absen murid tersebut
3. Jika nilai >= 70 dan absen < 5, maka tampilkan nama murid dan keterangan "lulus"
4. Jika tidak, maka tampilkan nama murid dan keterangan "tidak lulus"

PSEUDOCODE
=========
STORE nama AS String WITH "Gifania"
STORE nilai AS Number WITH 90
STORE absen AS Number WITH 1

IF nilai MORE THAN EQUAL 70 AND absen LESS THAN 5
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "lulus"
ELSE
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "tidak lulus"
END IF
*/

var nama = 'Gifania';
var nilai = 90;
var absen = 1;

// your code here
if (nilai >= 70 && absen < 5) {
  console.log('nama: ' + nama + ';' + ' lulus');
} else {
  console.log('nama: ' + nama + ';' + ' tidak lulus');
}
