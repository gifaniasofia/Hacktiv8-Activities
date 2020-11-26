# Review Looping
- initial expression : kapan dimulai
- last expression : kapan berakhir
- increment/decrement

```JavaScript
var string = 'Selamat Pagi'
var hasil = ''

for (var i = string.length - 1; i >= 0; i--) {
  hasil += string[i]
}
console.log(hasil)
```

```JavaScript
var string = 'Selamat Pagi'

for (var i = string.length - 1; i >= 0; i--) {
  var hasil = '' // bakal ngereset si hasil
  hasil += string[i]
}
console.log(hasil)
```

- While digunain untuk looping yang startnya gatau kapan, cuma tau kondisi gimana loopingnya berjalan
- biasanya kondisi awalnya boolean. Lalu ditengah dia ada suatu kondisi lain yang akan merubah kondisi tersebut.

```JavaScript
var getJackpot = false

while (getJackpot === false) {
  console.log(main)
}
// infinite loop karna gaada kondisi yang bikin berhenti
```
```JavaScript
var getJackpot = false

while (getJackpot === false) {
  var randomNumber = Math.round(Math.random() * 7)
  console.log(randomNumber)
  
  if (randomNumber === 7) {
    getJackpot = true
  }
}
```


# Nested Loop
- Looping di dalam looping
- Biasanya dipake untuk mengecek 2 data
- Memiliki baris kolom
- Membuat pola dari baris kolom

```JavaScript
for (var i = 0; i < 3; i++) {
  console.log(i, '<<<< ini adalah i')
  for (var j = 0; j < 4; j++) {
    console.log(j, '<<<<<<<<<<< ini adalah j')
  }
}
```

Menjalankan i sekali -> jalanin j hingga kondisi terpenuhi -> jalanin i lagi sekali -> jalanin j hingga kondisi terpenuhi -> jalanin i lagi sekali dst hingga j udah terpenuhi dan i udah terpenuhi.

CONTOH :
MAU BIKIN :
1234
1234
1234

```JavaScript
// coba buat *1234* dulu
var num = 4
var stringPenampung = ''

for (var i = 1; i <= num; i++) {
    stringPenampung += i;
}
```
NAH SI YANG DI 1234 DIULANG SEBANYAK 4 KALI YA, JADI BIKIN LOOPING YANG NGEJALANIN SEBANYAK 4 KALI (LOOPING J). JADINYA GINI :

```JavaScript
var num = 4

for (var j = 1; j <= num; j++) {
  var stringPenampung = ''
  for (var i = 1; i <= num; i++) {
    stringPenampung += i;
  }
  console.log(stringPenampung)
}
```

variabel penampung yang mau direset itu masukin di dalem for loopingan yang pertama.

CONTOH :
1
12
123
1234
12345

```JavaScript
var num = 3

for (var i = 1; i < num; i++) {
  var penampung = ''
  for (var j = 1; j <= i; j++) {
    penampung += j;
  }
  console.log(penampung)
}
```

CONTOH HITUNG HURUF i/I

var string = 'Hacktiv8 Indonesia'
var counter = 0

for (var i = 0; i < string.length; i++) {
  // console.log(string[i])
  if (string[i] === 'i' || string[i] === 'I') {
    counter++
  }
}
console.log(counter, 'ini adalah jumlah huruf i')


var string = 'Hacktiv8 Indonesia'
var kamusVocal = 'aiueoAIUEO'
var counter = 0

for (var i = 0; i < string.length; i++) {
  console.log(string[i])
  for (var j = 0; j < kamusVocal.length; j++) {
    if (string[i] === kamusVocal[j]) {
      counter++
    }
  }
}
console.log(counter)


contoh:
********
*      *
*      *
*      *
*      *
*      *
*      *
*      *
*      *
********
row---> 8
column---> 8

```Javascript
var num = 8
for (var row = 0; row < num; row++) {
  var penampung '';
  for (var col = 0; col < num; col++) {
    if (row === 0 || row === num-1) {
      penampung += '*';
    } else if (col === 0 || col === num-1) {
      penampung += '*';
    } else {
      penampung += ' ';
    }
  }
  console.log(penampung);
}
```

