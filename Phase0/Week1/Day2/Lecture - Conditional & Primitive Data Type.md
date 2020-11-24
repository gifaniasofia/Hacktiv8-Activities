# Javascript
> Sebuah bahasa pemrograman tingkat tinggi dan dinamis

Semakin tinggi tingkatnya, semakin mendekati dengan bahasa manusia. Semakin rendah, semakin mendekati bahasa mesin.

<mark> **Note** : Bikin variabel buatlah mengikuti ketentuan camelCase </mark>

### Deklarasi variabel dalam javascript
> Untuk menampung data
> Bisa menggunakan keyword var
> Bisa Ketik di terminal/git "node" terus langsung masuk ke js
contoh :
```JavaScript
var nama = "Naruto";
var umur = 20;
var status = false;

console.log(nama);
console.log(umur);
console.log(status);
```

### Tipe data dalam JS
**1. String**
- kumpulan dari karakter
- value dari data yang identik dengan teks, bisa berupa simbol, huruf, dan angka
- diapit oleh petik
- string dapat digabungkan dengan operator + (concatenate)

```JavaScript
var namaDepan = 'Naruto';
var namaBelakang = 'Uzumaki';

var namaLengkap = namaDepan + namaBelakang;
var namaLengkapWithSpasi = namaDepan + " " + namaBelakang

console.log(namaLengkap);
console.log(namaLengkapWithSpasi);
```

**2. Number**
- Angka
- Dapat melakukan operasi matematika

```JavaScript
var angka1 = 10;
var angka2 = 3;

var penjumlahan = angka1 + angka2;
console.log(penjumlahan);

var pengurangan = angka1 - angka2;
console.log(pengurangan);

var perkalian = angka1 * angka2;
console.log(perkalian);

var pembagian = angka1 / angka2;
console.log(pembagian);

var sisaBagi = angka1 % angka2; // modulus --> sisa bagi
console.log(sisaBagi);
```

**3. Boolean**
- data yang hanya memiliki 2 value yaitu true/false

```JavaScript
var isMarried = false;
var isLapar = true;
```
**4. Object**

### Cara mengecek tipe data
Menggunakan typeof
```JavaScript
var nama = "Naruto";
var umur = 20;
var isMarried = false;

console.log(typeof nama);
console.log(typeof umur);
console.log(typeof isMarried);
```
