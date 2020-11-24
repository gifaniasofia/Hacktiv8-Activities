/*
ALGORITMA
=========
1. Siapkan variabel nama dan masukkan nama mahasiswa yang diperiksa oleh pengajar
2. Siapkan variabel nilai dan masukkan nilai mahasiswa tersebut
3. Cek nilai mahasiswa tersebut
4. Jika nilai mahasiswa diantara 80 - 100, maka tampilkan nama mahasiswa dan score A
5. Jika nilai mahasiswa diantara 65 - 79, maka tampilkan nama mahasiswa dan score B
6. Jika nilai mahasiswa diantara 50 - 64, maka tampilkan nama mahasiswa dan score C
7. Jika nilai mahasiswa diantara 35 - 49, maka tampilkan nama mahasiswa dan score D
8. Jika nilai mahasiswa diantara 0 - 34, maka tampilkan nama mahasiswa dan score E
9. Selain dari ketentuan No. 4 - No. 8, maka tampilkan "Nilai Invalid"

PSEUDOCODE
=========
STORE nama AS String WITH "Gifania"
STORE nilai AS Number WITH 90

IF nilai MORE THAN EQUAL 80 AND absen LESS THAN EQUAL 100
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "score: A" 
ELSE IF nilai MORE THAN EQUAL 65 AND absen LESS THAN EQUAL 79
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "score: B"
ELSE IF nilai MORE THAN EQUAL 50 AND absen LESS THAN EQUAL 64
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "score: C"
ELSE IF nilai MORE THAN EQUAL 35 AND absen LESS THAN EQUAL 49
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "score: D"
ELSE IF nilai MORE THAN EQUAL 0 AND absen LESS THAN EQUAL 34
  DISPLAY "nama:" CONCAT WITH nama CONCAT WITH "score: E"
ELSE
  DISPLAY "Nilai Invalid"
END IF
*/

var nama = 'Gifania';
var nilai = 90;
// Insert your code here

if (nilai >= 80 && nilai <= 100) {
  console.log('nama: ' + nama + ';' + ' score: A');
} else if (nilai >= 65 && nilai <= 79) {
  console.log('nama: ' + nama + ';' + ' score: B');
} else if (nilai >= 50 && nilai <= 64) {
  console.log('nama: ' + nama + ';' + ' score: C');
} else if (nilai >= 35 && nilai <= 49) {
  console.log('nama: ' + nama + ';' + ' score: D');
} else if (nilai >= 0 && nilai <= 34) {
  console.log('nama: ' + nama + ';' + ' score: E');
} else {
  console.log('Nilai Invalid');
}
