JavaScript ES6 merupakan fitur yang membuat kamu menuliskan sintaks lebih singkat. ES6 memperkenalkan Const dan fitur-fitur lain seperti template strings (template literals), arrow functions, dll.

Tetapi untuk pembahasan kali ini kita hanya akan membahas perbedaan const, let dan var. Juga bagaimana menggunakan template literal.

# const, let dan var

`const` merupakan keyword baru di ES6. Konsep `const` biasanya dipakai ketika value pada variabel ini bersifat tetap, tidak dapat di-assign ulang.
```Javascript
const pi = 3.14
pi = 3  //output: TypeError: Assignment to constant variable.
```

sedangkan untuk `let` dapat di-assign ulang tetapi hanya dapat dikenali di dalam block bracket ‘{}’ terdekatnya saja
```Javascript
let me = 'foo';
let me = 'bar';
// SyntaxError: Identifier 'me' has already been declared

```Javascript
var word = 'foo';
var word = 'bar';
// No problem, `word` is replaced.
  for( let me = 0; me < 5; me++ ) {
      //me is visible here
  }

  for( var i = 0; i < 5; i++ ) {
      //i is visible here
  }

  console.log(me)  //output nya : error me is not defined
  console.log(i) 	 //output nya : 5
```

Variable, atau dalam bahasa Indonesia kita sebut variabel, bisa memegang atau berisi hampir semua tipe data yang tersedia. Variabel memungkinkan kita untuk memuat atau menyimpan nilai data ke dalam sesuatu. Biasanya bersifat sementara saat program dijalankan.
```Javascript
var tampung = 5;
console.log(tampung); // 5
var angkaGanjil = 1;
var angkaGenap = 2;
console.log(angkaGanjil); // 1
console.log(angkaGenap); // 2
```

⚠️ Waspadai pemanggilan variable yang tidak bernilai!

```Javascript
var tampungBaru;
console.log(tampungBaru); // undefined
```
 
# Template Literals
Template literals akan sangat membantu kamu! Kamu tidak perlu menggunakan operator tambah(+) untuk menggabungkan string saat menuliskan di console.log().

Caranya hanya dengan menggunakan backtick() kemudian jika ada variabel yang ingin diambil valuenya hanya menuliskan ${namaVariabel}

Menggunakan operator +
```JavaScript
var a = 5;
var b = 10;

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
```

Menggunakan template literals
```JavaScript
var a = 5;
var b = 10;

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
```
