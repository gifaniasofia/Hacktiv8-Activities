Deklarasi variabel :
```JavaScript
var kelas = "helsinki fox"
```
- gabisa yang depan pake angka, simbol. wajib hurub biasa aja

- assignment : menginisiasi nilai variabel tersebut
- syntax assignment adalah sama dengan 1 kali (assignment operator) =
- kalo == === (comparation operator)
- WITH ANY VALUE --> bisa diisi nilai berapapun
- harusnya kalo belom tau nilainya berapa itu wajib diisi 0 (value-value yang bernilai falsy) variabel penampung resultnya, dan isi type data nanti diisi pake apa
- yang tidak bernilai itu empty string
- variabel wajib huruf kecil pas di pseudocode

```JavaScript
var hasil = 0 //""

STORE hasil WITH 0
STORE hasil WITH EMPTY STRING

nilai --> false, tapi sifatnya falsy
nilai --> true, tapi sifatnya truthy

nilai --> 0, tapi sifatnya falsy
```

**TRUTHY DAN FALSY**
- falsy : semua yang tidak bernilai adalah falsy
  - string ==> EMPTY STRING ("") ==> bener-bener kosong. kalo ada spasi (" ") itu sifatnya truth
  - number & NaN ==> 0 & NaN
  - boolean ==> false
  - undefined
  - null
- truthy = semua yang memiliki nilai
 
 
- = --> assignment variable
- == --> cek nilai (comparison operation)
- === --> cek nilai DAN cek tipe data (comparison operator)
 
LOGICAL OPERATOR
- ! || &&
- ! semua yang menggunakan negasi akan menjadikan nilai var menjadi falsy
- || 1 kondisi benar, maka lolos
- && kedua kondisi harus benar
 
 
- isNaN --> buat ngecek NaN
 
 ```JavaScript
 if (hasil === false || hasil === "" || hasil === 0 || hasil === undefined || isNaN(hasil)) {
  console.log("ini adalah falsy")
 }
 
 console.log(!hasil)
 if (!hasil) { // ==> hasil dari kondisinya wajib true
    console.log("ini adalah falsy, hasilnya", hasil) // otomatis ada spasinya
 } else if(hasil) {
    console.log("hello world")
 } else if (hasil === "afifah") {
    console.log("hello helsinki")
 } else {
    console.log("hello helsinki")
 }
 ```
 
- prioritas taro kondisi yang unik -> yaitu falsy daripada truthy
 
 PSEUDOCODE
 ==========
 IF hasil is FALSY
   DISPLAY "ini adalah falsy, hasilnya" CONCAT WITH hasil
 ELSE
   DISPLAY "hello world"
 END IF
 
1. IF () -> kondisi hanya 1
2. IF-ELSE IF - ELSE -> kondisi lebih dari 2
3. IF-ELSE -> KONDISI 2 
 
- bisa pake switch case kalo emang nilainya pasti
- gabisa pake switch case kalo emang nilainya gapasti
 
contoh:
 ```JavaScript 
 var number = 1
 
 switch (number) {
    case 1:
      console.log(1)
      break
    case 2:
      console.log(2)
      break
    case 3:
      console.log(3)
      break
    default:
      console.log("default")
      break
  }
  ```
 
 # RANGKUM !!! BIAR LIVE CODE GAMPANG -> 1 jam buat 3 soal (live code 1), 90 menit buat 4 soal (LC2)
 buat strategi:
 - LC1 min 15%
 - LC2 min 10%
 - LC3 min 5%
 
 
 WEBSITE : pythontutor.com
 -> buat melihat eksekusi nya tuh gimana sih, terutama looping
 
 WEBSITE : text-compare.com
 -> buat ngebandingin expected result dan gimana ouput kita, kalo misal npm test nya eror
 
 - index dimulai dari 0
 - length jumlah, dimulai dari 1
 
 mundur:
 ```JavaScript
 var name = "afifah"
 for (var i = name.length - 1; i >= 0; i--) {
  console.log(name[i])
 }
 ```
 
 - kalo ada string, pake for pasti
 - kalo jumlah berapa perulangannya pasti/batas perulangan pasti (1-100 misal udah tau kan 100 kali) pake for
 - kalo while itu gatau berapa perulangannya
 mis : mencari jarum di tumpukan jerami
