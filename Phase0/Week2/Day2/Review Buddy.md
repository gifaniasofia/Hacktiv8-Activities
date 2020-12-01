1. deklarasi function itu bebas mau dimana aja
2. parameter dari function kalo gadiisi maka defaultnya adalah undefined
3. console.log itu syntax untuk menampilkan sesuatu di terminal. bukan menghasilkan, tapi menampilkan doang
4. return --> hasil atau output dari sebuah fungsi dan bisa disimpan di dalam variabel lain
5. di function, ketika ketemu return, function auto stop (langsung selesai)
6. array --> wajib looping untuk tau isinya --> namaVariabel[i]
7. cek arr kosong atau engga, liat length nya. data kosong gabisa pake falsy.

```JavaScript
let name = 'afifah' // passing by value
let arrName = ['a', 'f', 'i''] // passing by reference

arrName[0] = 'A' // bisa
console.log(arrName)

name[0] = 'A' // gabisa soalnya itu satu kesatuan, yang bisa hanya array, karna struktur
console.log(name)
```

```JavaScript
function greet(arr) {
  if (arr.length === 0) {
    return 'data kosong'
  }
  
  let jumlah = 0
  for (let i = 0; i < arr.length; i++) {
    jumlah += arr[i]
  }
  return jumlah
}

let outputDariFunctionGreet = greet([1, 2, 3, 4, 5, 6])
console.log(outputDariFunctionGreet)

console.log(greet[]) // 'data kosong'
```
