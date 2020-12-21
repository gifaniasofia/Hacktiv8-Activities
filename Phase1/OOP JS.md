# Class
Class adalah sebuah blueprint pada konsep OOP. Secara umum, pengertian blueprint berdasarkan Oxford Dictionary adalah deskripsi yang mendetil mengenai suatu rencana. Dalam hal pemrograman, class adalah rancangan struktur awal dari objek yang akan dibuat. Misalnya kita ingin membuat sebuah objek yang memuat data dan fungsi dari mobil, maka sebelum kita membuat objek mobil tersebut, kita akan membuat sebuah class terlebih dahulu.
```js
class mobil{
    merk;
    harga;
    statusFuel;

    checkFuel(){
        return this.statusFuel;
    }
}
```

Pada snippet diatas, class mobil memiliki data : merk, harga, dan statusFuel dan fungsi : checkFuel.

# Property
Property adalah data yang ada pada sebuah class yang juga akan dimiliki oleh objek dari class tersebut. Property pada class mobil ada 3 yaitu : merk, harga, dan statusFuel.

# Object
Object adalah satu data tunggal yang memiliki struktur dari sebuah class.

Contoh pembuatan sebuah objek:
```js
let mobilPertamaSaya = new mobil();
mobilPertamaSaya.merk = 'BMW';
console.log(mobilPertamaSaya.merk); // BMW;
```

Snippet diatas berisi :
- Membuat objek bernama `mobilPertamaSaya` dari class mobil.
- Mengisi data merk dengan nilai `BMW`
- Menampilkan data `merk` pada objek `mobilPertamaSaya`.

# Constructor
Constructor adalah sebuah method yang akan langsung dijalankan ketika sebuah objek dibuat. Contoh constructor:

```js
class mobil{
    merk;
    harga;
    statusFuel = 100;

    constructor(merk,harga){
        this.merk = merk;
        this.harga = harga;
    }

    checkFuel(){
        return `this.statusFuel l`;
    }

}

let mobilPertamaSaya = new mobil("BMW",1000000);
console.log(mobilPertamaSaya.merk);
```

Snippet diatas berisi :
- Fungsi constructor di class mobil akan menerima parameter merk dan harga ketika sebuah objek dibuat.
- `this` pada fungsi constructor merujuk pada nilai sebuah objek. Dalam snippet diatas, `this` menunjukan objek mobilPertamaSaya.
`this.merk = merk` berfungsi memberi nilai merk pada objek mobilPertamaSaya dengan nilai merk yang dijadikan parameter saat inisialisasi objek dalam hal snippet ini ( `let mobilPertamaSaya = new mobil('BMW',1000000);` ) adalah string `"BMW"`.

# Method
Method / fungsi / behaviour adalah segala sesuatu yang bisa dilakukan oleh sebuah objek.

```js
class mobil{
    merk;
    harga;
    statusFuel = 100;

    constructor(merk,harga){
        this.merk = merk;
        this.harga = harga;
    }

    checkFuel(){
        return this.statusFuel l;
    }

    updateFuel(jarak){
        this.statusFuel -= ( jarak / 10 );
        return this.checkFuel();
    }

    fillFuel(liter){
        this.statusFuel += liter;
        return this.checkFuel();
    }
}

let mobilPertamaSaya = new mobil('BMW',1000000);
mobilPertamaSaya.updateFuel(10) // mobil melakukan perjalanan sejauh 10 km , dan akan mengembalikan nilai bahan bakar sekarang yaitu = 100 - ( 10 / 10 ) = 99
mobilPertamaSaya.fillFuel(10) // mobil mengisi bahan bakar sebanyak 10 l, dan akan mengembalikan nilai bahan bakar sekarang yaitu = 100 + 10  = 109
```

Pada class mobil kita membuat 2 fungsi baru, sehingga objek dari mobilPertamaSaya dapat melakukan 3 method:
1. `checkFuel` : untuk mengecek bahan bakar sekarang.
2. `updateFuel` : untuk memperbarui data bahan bakar setelah digunakan beberapa km. ( asumsi berkurang 1 liter setiap 10 km )
3. `fillFuel` : untuk memperbarui data bahar bakar setelah diisi dengan parameter berapa jumlah pengisian ( dalam liter )
