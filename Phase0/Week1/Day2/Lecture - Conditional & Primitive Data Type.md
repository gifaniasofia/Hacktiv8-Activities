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
Data yang hanya memiliki 2 value yaitu true/false

```JavaScript
var isMarried = false;
var isLapar = true;
```
- Not pada boolean : membalikkan nilai logika
! adalah operator NOT

```JavaScript
var lulus = true;
var status = false;

console.log(!lulus); //false
console.log(!status); //true
```

**4. Object**

### Cara mengecek tipe data
Menggunakan typeof --> hasilnya berupa string. 'string', 'number', 'boolean'.

```JavaScript
var nama = "Naruto";
var umur = 20;
var isMarried = false;

console.log(typeof nama); // string
console.log(typeof umur); // number
console.log(typeof isMarried); // boolean
```

### Mengubah data string ke number dan sebaliknya

```JavaScript
var nomor_hp = "081220860871";
var umur = 20;
var nomorHpNumber = Number(nomor_hp);
/* 0 di depan tidak akan diambil. misal 001 --> 1. Kalau jadiin number itu tidak bisa ada 0 di depan, pakai parseIn() juga ilang 0 nya.. Kalau mau ada 0 nya ya jadiin string aja, cuma string yang bisa ada 0 di depan. */
var umurString = umur.toString();

// string to number
console.log(nomorHpString);
console.log(nomorHpString);

// number to string
console.log(umurString);
console.log(typeof umurString);
```

### Cara menulis nama variabel
- camelCase --> namaLengkap
- snake_case --> nama_lengkap
- PascalCase --> NamaLengkap
- kebab-case --> nama-lengkap

### Logic & pengkondisian
Logika perkondisian :
- Jika saya merasa lapar, maka saya akan makan
- Jika umur saya <18, saya tidak akan "enter"

### Operator perkondisian
- Sama dengan `== / ===`
- Tidak sama dengan `!= / !===`
- Lebih kecil / Lebih kecil sama dengan `< / <=`
- Lebih besar / lebih besar sama dengan `> / >=`
- Dan `&&`
- Atau `||`

```JavaScript
var input1 = 20;
var input2 = 20;

console.log(input1 == input2); // true karena hanya memerika nilai nya saja
console.log(input1 != input2); // false karena emang sama

var input1 = '20';
var input2 = 20;

console.log(input1 === input2); // false karena input1 string, input2 number
console.log(input1 !== input2); // true karena emang mereka berbeda

// Jika umur 70 tahun ke atas : umur >= 70
// umur di atas 70 tahun : umur > 70
console.log(input1 > input2); // false
```
**Note :** kalau `=` untuk assign variabel saja

```JavaScript
var input1 = true;
var input2 = true;

console.log(input1 && input2);
console.log(input1 || input2);

var umur = 20;
console.log(umur > 15); // true --> berarti ini boolean, jadi:
console.log(umur > 15 && umur <= 20); // true and true --> true
console.log(15 < umur <= 20);
```

### Pengkondisian
Syntax dasar :
```JavaScript
if (kondisi yang dibandingkan) {
  code yang akan dijalankan
}
```
- Else adalah ketika kondisi if adalah false, maka langsung masuk ke else
Contoh :
```JavaScript
var umur = 15;

if (umur >= 7) {
  console.log('boleh main');
} else {
  console.log('tidak boleh main');
}
```
- Else if
```JavaScript
var name = 'Naruto';

if (name === 'Naruto') {
  console.log('Jadi hokage');
} else if (name === 'Sakura') {
  console.log('Jadi tabib');
} else if (name === 'Sasuke') {
  console.log('Jadi pengkhianat');
} else {
  console.log('Jadi rakyat jelata');
}
```

**Note :**
jangan melakukan re-declaration
```JavaScript
var name = 'Sakura';
var name = 'Sasuske';
```

Kalau re-assignment boleh --> ditumpuk nilainya jadi sasuke
```JavaScript
var name = 'Sakura';
name = 'Sasuke';
```

### Latihan Soal
Jika tipe data input adalah :
- String, maka tampilkan 'ini string'
- Number, maka tampilkan 'ini number'
- Boolean, maka tampilkan 'ini boolean'

```JavaScript
var input = 10;

// Your code here
if (typeof input === 'string') {
  console.log('ini string');
} else if (typeof input === 'number') {
  console.log('ini number');
} else if (typeof input === 'boolean') {
  console.log('ini boolean');
}
```

### Truthy-Falsy
Gunanya buat validasi. Memastikan apakah sesuatu sudah benar atau belum.

```JavaScript
var angka = 10; // number, tapi memiliki nilai built-in boolean
console.log(Boolean(angka)) //akses nilai built-in boolean
// hasil true

var angka2 = 0
console.log(Boolean(angka2)) // false. nilai 0 itu falsy

var strng1 = 'acong';
console.log(Boolean(strng1)) //true

var strng2 = 0
console.log(Boolean(strng2)) // false. nilai built-in boolean dari string kosong itu falsy

var variable; // var variable = undefined;
console.log(Boolean(variable)); // nilai boolean nya false

var variable2 = NaN; // Not a Number
console.log(Boolean(variable2)); // nilai boolean nya false
```
NaN --> kalau kita melakukan sesuatu yang aneh. Misal :

```JavaScript
console.log('hello' - 5); // NaN
console.log('hello' * 5); // NaN
```

contoh kegunaan Truthy-Falsy :

Misal kalau nama ga diisi, harusnya diapain? Misal dikeluarin message 'error'

```JavaScript
var nama = ''; // var nama;

if (Boolean(nama) === false) {
  console.log('error');
}

// ATAU

if (nama) {
  console.log('error');
}
```

# Review singkat tugas
- Kerjain di codecademy -> introduction dan conditional aja --> dimasukin di folder, terus di push
- Grade students :
```JavaScript
var nama = 'Budi'; // misal. bebas aja
var nilai = 100;
```
- Graduates :
nilai pakai lebih besar sama dengan `>=`, absen pakai `<`

- npm install and test :
1. ke folder Grade-Students
2. Di terminal `npm install`
3. Terus kerjain
4. Save
5. Di terminal ketik lagi `npm test`
6. Cek expected result nya dari npm test
