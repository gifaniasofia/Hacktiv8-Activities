# Tipe data :
1. Primitive : number, string, boolean, dll
2. Structural : array, object

# Array
- a data structured that can conatain an ordered collections of data
- kita menggunakan kalau kita membutuhkan untuk contains related data together
- sebuah list/lemari untuk menyimpan banyak data yang umumnya tipe data nya sama
- dapat diakses dengan menggunakan index -> bisa di-looping

# Create and Display an Array
```JavaScript
let bookshelf = ['Harry Potter', 'Eloquent Javascript']
console.log(bookshelf)
```

array seperti -> list/lemari data

```JavaScript
let bookshelf = ['Harry Potter', 'Eloquent Javascript']
array[0] = 'angels and demons' // mengganti array di index 0
console.log(bookshelf)
```

# Properti 
- array.length

# Loop an Array
> u/ mengakses setiap item di array/string menggunakan looping
```JavaScript
let bookshelf = ['Harry Potter', 'Eloquent Javascript', 'Twilight']

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

for (let i = 0; i < array[0].length; i++) {
  console.log(array[0][i])
}
```

# Array method
- .push() --> menambahkan array baru di index terakhir
- .pop() --> menghilangkan 1 array di index terakhir
- .indexOf() --> mencari index keberapa dari suatu nilai yang dicari // kalo gaada return -1
- .shift() --> menghilangkan 1 array di index pertama
- .unshift() --> menambahkan 1 array di depan

```JavaScript
let bookshelf = ['Harry Potter', 'Eloquent Javascript', 'Twilight']

array.push('Criminology of place')

console.log(array)
console.log(array.indexOf('Harry Potter')

```

# Rekomendasi
- Mengisikan array yang memiliki tipe data yang sama

Misalnya array isinya judul buku, merk baju

- Membuat nama array yang representatif

Misalnya : books, clothes, scores


# Quiz

```JavaScript
let scores = [100, 30, 40, 80, 0]

function getAverage(arr) {
    let nilai = 0;
    for (let i = 0; i < arr.length; i++) {
        nilai += arr[i];
    }
    return nilai / arr.length;
}

console.log(getAverage(scores));
```


