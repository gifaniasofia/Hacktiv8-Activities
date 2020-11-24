Urutan :
1. ideation === mind mapping
2. algorithm
3. pseudocode
4. code

# Algorithm :
> set of steps or procedure to complete a task
> We need to put these steps for computer to run

contoh ideation :
- Menyiapkan bilangan pertama sebagai penampungan, dan memasukkan nilai misalnya 5
- Menyiapkan bilangan kedua sebagai penampungan, dan memasukkan nilai misalnya 2
- Tambahkan bilangan pertama dan kedua
- Hasil dari proses penambahan dimasukkan ke sebuah penampungan namanya 'hasil'
- Tampilkan 'hasil'

```JavaScript
// PENJUMLAHAN 2 BUAH BILANGAN

// IDEATION atau MIND MAPPING
// Bilangan pertama ditambahin dengan bilangan kedua terus jadikan hasil

// ALGORITMA
1. Siapkan penampung bilangan pertama
2. Masukkan sebuah angka ke dalam penampung bilangan pertama
3. Siapkan penampung bilangan kedua
4. Masukkan sebuah angka ke dalam penampung bilangan kedua
5. Siapkan penampung bilangan hasil perhitungan
6. Lakukan proses penjumlahan bilangan pertama dan bilangan kedua
7. Tampung hasil proses penjumlahan ke dalam penampung hasil perhitungan
8. Tampilkan hasil perhitungan
```

# Pseudocode :

Buat apa? Karena di dunia ini banyak bahasa pemrograman

Contoh :
```
STORE width AS NUMBER WITH ANY VALUE
STORE height AS NUMBER WITH ANY VALUE
STORE area AS 0

CALCULATE width TIMES height
SET area VALUE WITH CALCULATION RESULT

DISPLAY area
```

```
STORE hungry AS TRUE
IF hungry
  eat
END IF
DISPLAY "I am happy"
```

- Hardcode -> variabel a nilai 5
- Dinamis -> variabel a bisa diisi apapun

Lanjutan yang tadi :
```JavaScript
// PENJUMLAHAN 2 BUAH BILANGAN

// IDEATION atau MIND MAPPING
// Bilangan pertama ditambahin dengan bilangan kedua terus jadikan hasil

// ALGORITMA ( merapihkan mind mapping )
1. Siapkan penampung bilangan pertama dan masukkan sebuah angka ke dalam penampung bilangan pertama
2. Siapkan penampung bilangan kedua dan masukkan sebuah angka ke dalam penampung bilangan kedua
3. Siapkan penampung bilangan hasil perhitungan
4. Lakukan proses penjumlahan bilangan pertama dan bilangan kedua dan tampung hasil proses penjumlahan ke dalam penampung hasil perhitungan
5. Tampilkan hasil perhitungan

// PSEUDOCODE
// DUA TIPE VARIABLE UMUM : Number, String
// KEYWORD PSEUDOCODE HARUS HURUF KAPITAL

STORE bilangan1 AS Number WITH 5
STORE bilangan2 AS Number WITH 10
STORE hasil AS Number WITH ANY VALUE // atau STORE hasil AS Number WITH 0
// pisahkan dengan 1 baris kosong

SET hasil WITH bilangan1 PLUS bilangan2

DISPLAY hasil
```
Note :
- ka lebih baik di inisiasi dengan nilai 0 atau STORE with any value? <mark> bebas!!! karena menunggu hasil dari perhitungan </mark>
- bagusnya gaboleh pake operator, kecuali kurung [] {} ()
- Conditional itu persoalan diawali dengan "Jika.." "Cek ... kalau dia ganjil"

Contoh lagi :
- KASUS 1 : batas nilai > 70 itu lulus, si A nilai 65. Tentuin lulus/engga?
- KASUS 2 : ada nomor 1,2,3,4,5. cek mana nilai terbesar
- KASUS 3 : lagi 17 agustusan, ada 5 ember, cari ada ember apa engga
- KASUS 4 : ada 5 orang, syarat DO nilai < 30, tentukan berapa orang yang di DO
- KASUS 5 : di dalam ember ada huruf/alphabet dan angka 0-9, jumlahnya unlimited. kelompokkin jadi angka dan huruf.

```JavaScript
// IDEATION / MIND MAPPING
- KASUS 1 : yaudah kak dicek aja nilainya, kalau emang dia >70 kasih aja dia lulus
- KASUS 2 : liatin angka satu per satu dan bandingin mana yang lebih besar, itu yang diambil, sampe abis berarti yang di terakhir diambil itu yang paling besar. misal cek nilai 1 sama 2 lebih gede mana -> 2, 2 sama 4 lebih gede mana -> 4, dst.
- KASUS 3 : cek satu per satu ember. kalo di ember1 terlihat ada belut, yaudah tampilkan. kalo ember1 gaada belut, cek ke ember2. nantinya akan ditampilkan ember mana yang ada belutnya.
- KASUS 4 : cek nilai setiap siswa, jika nilai dibawah 30 maka DO. aktivitas paling dasar itu cek dulu.
- KASUS 5 : cek/ambil satu per satu huruf/angka yang ada di ember. Jika benda tersebut angka, maka tampung di ember angka, jika bukan tampung di ember huruf.
 
 // ALGORITMA (KASUS 2)
 1. Siapkan penampung bilangan1 dan diisi dengan 1
 2. Siapkan penampung bilangan2 dan diisi dengan 2
 3. Siapkan penampung bilangan3 dan diisi dengan 3
 4. Siapkan penampung bilangan_terbesar
 5. Jika bilangan1 > bilangan2, maka set bilangan_terbesar dengan bilangan1
 6. Sebaliknya, maka set bilangan_terbesar dengan bilangan2
 .
 .
  . Tampilkan bilangan_terbesar
 ```
 
### Comparison Operators
IF / IF-ELSE IF-ELSE / IF-ELSE
 
Contoh :
- KASUS : ada data seorang mahasiswa, cek apakah lulus, dengan syarat nilainya 70 ke atas.
 
```JavaScript
// IDEATION / MIND MAPPING
Cek nilai mahasiswa tersebut, jika nilainya >= 70, maka output lulus.
 
// ALGORITMA
1. Siapkan penampung nilai mahasiswa dan isi dengan sebuah nilai yang dikehendaki untuk diperiksa
2. Periksa/cek nilai mahasiswa tersebut, jika >= 70, maka tampilkan "LULUS"
 
// PSEUDOCODE
STORE nilai_mahasiswa AS Number WITH 80
 
IF nilai_mahasiswa MORE THAN EQUAL 70
  DISPLAY "LULUS"
END IF
```
 
Contoh :
- KASUS : ada data seorang mahasiswa, cek apakah dia lulus atau tidak dan tampilkan apakah dia lulus atau tidak, dengan syarat lulus adalah nilainya di atas 65.
 
```JavaScript
// IDEATION / MIND MAPPING
Cek nilai mahasiswa tersebut, jika nilainya > 65 cetak lulus, selain itu cetak tidak lulus
 
// ALGORITMA
1. Siapkan penampung nilai mahasiswa dan isi dengan sebuah angka
2. Cek nilai_mahasiswa
3. Jika nilai_mahasiswa > 65, maka tampilkan "LULUS"
4. Jika tidak / selain itu / jika nilai_mahasiswa <= 65, tampilkan "TIDAK LULUS"
 
// PSEUDOCODE
STORE nilai_mahasiswa AS Number WITH 80
 
IF nilai_mahasiswa MORE THAN 65
  DISPLAY "LULUS"
ELSE
  DISPLAY "TIDAK LULUS"
END IF
```
