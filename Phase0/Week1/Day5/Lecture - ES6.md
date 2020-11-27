# let
> let sebuah keyword yang memungkinkan kita untuk mendeklarasikan variabel dengan block scope.
> gabisa di redeclare dengan let -let. cuma bisa reassigned
let a = 5
a = 1

# const
> sifatnya konstant.
> ketika udah di declare gabisa di re-assigned lagi, gabisa diubah-ubah lagi

```JavaScript
var nomor = 0
var nomor = 5
console.log(nomor) // bisa

var nomor = 0
nomor = 5
console.log(nomor) // bisa

let nomor = 0
let nomor = 5
console.log(nomor) // gabisa

let nomor = 0
nomor = 5
console.log(nomor) // bisa
```

const -> value yang gaakan berubah

const rumusKelilingLingkaran = 2 * 3.14 // kelilingLingkaran kan udh pasti ya. jadi buat menghindari reassignment, pake const aja.
let jariJari = 5
console.log(rumusKelilingLingkaran * jariJari)
