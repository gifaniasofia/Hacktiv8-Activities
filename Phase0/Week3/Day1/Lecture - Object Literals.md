# Object
- diapit `{}`
- formatnya `key: value`
- Jika penamaan key ada spasi/symbol maka key perlu dikutip
- Penamaan key lebih baik camelCase
- Value dapat berupa tipe data apa aja

contoh:
```js
let sofa = {
  brand : 'IKEA',
  color : 'orange',
  weight : 20,
  price : {
    member : 300000,
    'non-member': 400000
  }
  createdBy : ['Harry Potter', 'Ron']
}

console.log(sofa.price)
console.log(sofa['price'])

let field = 'price'
console.log(sofa[field])
```

Sama halnya dengan array, object juga pass reference. Oleh karena itu, looping/built in function.

```js
let student = {
  name : "Agus",
  age : 20,
  score : 100,
  "rata-rata" : 80
}

console.log(student.name) // titik itu nyari di objectnya
console.log(student['name'])
console.log(student['rata-rata']) // untuk simbol dan spasi harus pake []

let props = 'age'
console.log(student[props]) // ini juga gabisa kalau akses variabel pake titik .props
```

menambahkan key/properti baru :
```js
student.hobi = ['Singing', 'Swimming']
student['parent'] = {
  father : 'Budi',
  mother : 'Susi'
}

student['parent']['brother'] = 'Bram'
```

re-assigned:

```js
student['name'] = 'Markus'
```

Pengen akses:

```js
console.log(student['hobi'][0]) // Singing
console.log(student['parent']['father'] // Budi
```

Bisa push ke array:
```js
student['hobi'].push('Running')
```

Looping
```js
let student = {
  name : "Agus",
  age : 20,
  score : 100,
  "rata-rata" : 80,
  hobi : ['Singing', 'Swimming'],
  parent : {
    father : "Budi",
    mother : "Susi" 
  }
}

for (let props in student) {
  console.log(props) // name, age, score, rata-rata, hobi, parent
  console.log(student[props])
}

// mau kasih batas
for (let props in student) {
  if (key === 'hobi') {
    break
  }
}

for (let props in student) {
  for (let i = 0; i < student['hobi'].length; i++) {
    console.log(student['hobi'][i] // looping sebanyak props
  }
}

// makanya bisa langsung looping gini aja: gaperlu dalem for (let props in student)
for (let i = 0; i < student['hobi'].length; i++) {
    console.log(student['hobi'][i] // looping sebanyak props
}
```

Delete key/value

```js
delete student['rata-rata']
student['hobi'].pop() // untuk array
delete student['parent']['mother']
```

- Object : punya properti/key dan value
- Array : akses pakai index dan hanya value nya aja

```js
let student2 = {}
for (let key in student) {
  student2[key] = student[key] // ngecopy student ke student2
}

student["name"] = "Alex" // ini bisa student2 aja yg keubah
```

Latihan soal :
```js
let students = {
  'Budi' : [100, 90, 80, 75, 90],
  'Alex' : [50, 60, 70, 100, 20],
  'Amir' : [100, 80, 80, 80]
}
/*
  'Budi' : rata-ratanya,
  'Alex' : rata-ratanya,
  'Amir' : rata-ratanya
*/

let output = {}
for (let key in students) {
  let totalNilai = 0
  for (let i = 0; i < students[key].length; i++) {
    // console.log(students[key][i])
    totalNilai += students[key][i]
  }
  console.log(totalNilai)
  output[key] = totalNilai/students[key].length
}

console.log(output)
```

Latihan soal berikutnya:

Odd even numbers:
Terdapat sebuah function dengan nama oddEven, function ini akan menerima 1 buah parameter berupa array yang berisi kumpulan angka.
Function akan mengembalikan object dengan property/key genap dan ganjil
```
input : [1,3,5,2,6,15,9,10,12]
output : {
  genap : [2, 6, 10, 12],
  ganjil : [1, 3, 5, 15, 9]
}

```
```js

function oddEven(arr) {
  let output = {
    genap: [],
    ganjil: []
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      output['genap'].push(arr[i])
    } else {
      output['ganjil'].push(arr[i])
    }
  }
  
  return output
}

console.log(oddEven([1,3,5,2,6,15,9,10,12]))
```

Cek outputnya di setiap test case nya hasilnya selalu pasti atau tidak key nya. Misalnya selalu pasti kayak genap ganjil key-nya ya langsung aja bikin key genap ganjil di dalam outputnya.


Latihan soal berikutnya : Grouping countries. yang outputnya dinamis.

```js
let output = {}

for (let i = 0; i < arr.length; i++) {
  if (output[arr[i][1]] === undefined) { // kalau properti arr[i][1] undefined, dibuatin properti object output. properti yg undefined : Amerika, Asia, dll. Kenapa ga berkali-kali Amerikanya? soalnya kan udah ga undefined pas udah dibuatin.
    output[arr[i][1]] = [] // dengan array kosong atau empty string atau 0 (number)
  }
  output[arr[i][1]].push(arr[i][0])
}
```
