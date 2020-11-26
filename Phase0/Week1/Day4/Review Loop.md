
- Do-While : kerjain dulu baru dicek, jadi dia minimal bakal 1x ngerjain. kalo while dia ngecek kondisinya, kalo ga terpenuhi ya gadijalanin
- While gatau berapa kali perulangan. Kalo for udah tau pasti berapa kali perulangan

Falsy values
- null
- ""
- undefined
- NaN
- 0

```JavaScript
let name = 0

console.log(name === false)
```

Looping
- First step : pertama kedua
- Next Step : ketiga kedua

    - var i = 0 --> pertama
    - i < 5 --> kedua
    - i++ --> ketiga

```JavaScript
for (var i = 0; i < 5; i++) {
  console.log(i);
};
```
```JavaScript
let number = 10
while (number > 10) {
  console.log("Masuk)
}
// gajalan scriptnya
```

```Javascript
do {
  console.log("Masuk")
} while (number > 10)
// output : Masuk
// abis itu keluar
```

**Soal :**
Tampilkan angka kelipatan 3 sampai 99
Output :
```
3
6
9
12
```

for (var i = 3; i <= 99; i+=3) {
  console.log(i);
}


**Soal :**
Bermain Dadu. Jadi kita akan mengocok dadu sebanyak berapa kali sampai jumlahnya sudah 100.
```JavaScript
var total = 0
var berapaKali = 0
while (total <= 100) {
  let dadu = Math.ceil(Math.random() * 6) // dadu : 1 2 3 4 5 6
  total = total + dadu // jumlah angka dadu
  berapaKali++ // 
}
console.log(berapaKali)
```

BREAK 
```JavaScript
for (var i = 1; i < 10; i++) {
  if (i === 3) {
    break
  }
  console.log(i);
}
```
break -> buat berhentiin for biar langsung keluar for nya


**SOAL :**
Ada sebuah angka. Akan dikurangin dengan angka random 1-5 terus sampe kurang dari 0

Input = 20
Proses :
  - 20 - 4 -> 16
  - 16 - 5 -> 11
  - 11 - 2 -> 9
  - 9 - 3 ->
  - 6 - 5 -> 1
  - 1 - 3 -> -2
Output : -2

var angka = 20
var berapaKali = 0
while (angka > 0) {
  var dadu = Math.ceil(Math.random() * 6)
  angka -= dadu
  berapaKali++
}
console.log(berapaKali);

SOAL
Pisahkan angka genap dan ganjil

Input : "123456789"
Output :
2468
13579

//num to string : String(variabelnya)
//string to num : Number(variabelnya)

```JavaScript
/*
num = "123456789"
angkaGanjil = "1"
angkaGenap = "2"

i = 1
num.length = 9
num[i] = "2"
angka = 2

dst

BACANYA DARI ATAS KE BAWAH
*/

var num = "123456789" //string
var angkaGanjil = '';
var angkaGenap = '';

for (var i = 0; i < num.length; i++) {
  var angka = Number(num[i]) //biar jadi number tipe datanya
  if (angka % 2 === 0) {
    //console.log("Genap " + angka);
    angkaGenap += angka
  } else {
    //console.log("Ganjil " + angka);
    angkaGanjil += angka
  }
}
console.log(angkaGenap);
console.log(angkaGanjil);
```

default value tergantung ya.

```JavaScript
var totalKali = 1
var totalJumlah = 0
for (let i = 1; i < 10; i++) {
  totalKali *= i
  totalJumlah += i
}
console.log(totalKali)
console.log(totalJumlah)
```

**string + number = string**

**SOAL**
```
*******
*     *
*     *
*******
*     *
*     *
*******
```
BREAKDOWN MASALAHNYA
```
*
*
*
*
*
*
*
```
```JavaScript
for (var i = 0; i < 6; i++) {
  console.log('*')
}
```
```
*******
*******
*******
*******
*******
*******
*******
```
```JavaScript
let num = 7
for (var baris = 0; baris < num; baris++) {
  var star = ''
  for (var kolom = 0; kolom < num; kolom++) {
    star += '*'
  }
  console.log(star)
}
```
```
*******
*     *
*     *
*     *
*     *
*     *
*     *
*******
```
- ketika baris awal dan akhir
- ketika kolom awal dan akhir

```JavaScript
let num = 7
for (var baris = 0; baris < num; baris++) {
  var star = ''
  for (var kolom = 0; kolom < num; kolom++) {
    if (kolom === 0 || kolom === num - 1 || baris === 0 || baris === num - 1)
      star += '*'
    } else {
      star += ''
    }
  }
  console.log(star)
}
```

```
*******
*     *
*     *
*******
*     *
*     *
*******
```

- ketika baris awal dan akhir
- ketika kolom awal dan akhir
- ketika baris tengah

baris tengah:
```JavaScript
let num = 5
console.log(Math.floor(num/2);
```
```JavaScript
let num = 7
for (var baris = 0; baris < num; baris++) {
  var star = ''
  for (var kolom = 0; kolom < num; kolom++) {
    if (kolom === 0 || kolom === num - 1 || baris === 0 || baris === num - 1 || baris === Math.floor(num/2))
      star += '*'
    } else {
      star += ''
    }
  }
  console.log(star)
}
```

```
*******
**    * baris 1, kolom 1
* *   * baris 2, kolom 2
*  *  * baris 3, kolom 3
*   * *
*    **
*******
```
- ketika baris awal dan akhir
- ketika kolom awal dan akhir
- ketika baris = kolom ditambah '*', sisanya ' '

```JavaScript
let num = 7
for (var baris = 0; baris < num; baris++) {
  var star = ''
  for (var kolom = 0; kolom < num; kolom++) {
    if (kolom === 0 || kolom === num - 1 || baris === 0 || baris === num - 1 || baris === kolom)
      star += '*'
    } else {
      star += ''
    }
  }
  console.log(star)
}
```
```
******* baris 0
**   ** baris 1, kolom 1, kolom 5, num 7
* * * * baris 2, kolom 2, kolom 4, num 7
*  *  * baris 3, kolom 3, kolom 3, num 7
* * * * baris 4, kolom 2, kolom 2, num 7
**   ** baris 5, kolom 1, kolom 1, num 7
******* baris 6
```

terus solved in yang dari kanan atas ke bawah kiri aja. soalnya yang dari kiri atas ke bawah kanan kan udah sebelumnya. jadi tambahin yang bentuk ini:

```
******* baris 0
*    ** baris 1, kolom 5, num 7
*   * * baris 2, kolom 4, num 7
*  *  * baris 3, kolom 3, num 7
* *   * baris 4, kolom 2, num 7
**    * baris 5, kolom 1, num 7
******* baris 6
```
ketika baris + 1 + kolom = num - 1

jadi, bentuk ini :
```
******* 
**   ** 
* * * * 
*  *  * 
* * * * 
**   ** 
******* 
```
- ketika baris awal dan akhir
- ketika kolom awal dan akhir
- ketika baris = kolom
- ketika baris + kolom = num - 1
ditambah '*', sisanya ' '

```JavaScript
let num = 7
for (var baris = 0; baris < num; baris++) {
  var star = ''
  for (var kolom = 0; kolom < num; kolom++) {
    if (kolom === 0 || kolom === num - 1 || baris === 0 || baris === num - 1 || baris === kolom || baris + kolom === num - 1)
      star += '*'
    } else {
      star += ''
    }
  }
  console.log(star)
}
```
