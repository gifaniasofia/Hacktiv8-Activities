# Basic OOP
- Class
- Constructor
- Instansiate & Instance
- Property
- Instance_Method
- this
- Method_Chaining

# FS (File_System)
- fs.readFileSync
- fs.writeFileSync

# OOP - Basics (Object Oriented Programming)
> sebuah paradigma programming yang melihat ke dunia nyata (*programming paradigmn that uses abstraction to create models based on the real world*)

Kenapa menggunakan OOP?
- Jika membuat aplikasi yg besar, sulit jika menggunakan function yg banyak dan berbeda file. Kalau OOP dia lebih mudah di update/develop, tinggal mengedit blueprint (class) tersebut.
- mudah untuk di develop -> kalo pake obj literal, kalo misal ada mau tambah key, harus diubah satu persatu. gimana kalau datanya ada 1000?

OOP :
- properties (kalo di object literal itu key aja)
- berpikir seperti dunia nyata -> disimpan dalam method suatu class.
Misal mobil : start engine, refuel, drive, horn

Class : 
- berfungsi sebagai template/blueprint
- mendefinisikan initial values dan behaviors
- penulisan huruf -> pascal case -> huruf besar disetiap kata

```js
class Person {

}

var person1 = new Person(); // ---> instansiate
```

1. Constructor -> sebuah method yg pertama kali dijalankan. digunakan untuk prepare object for use.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

var person1 = new Person(); // melakukan instanciate tapi gamasukin parameter padahal ada parameter yg harus input, bakal jd undefined
// result:
/*
Person {
  firstName: undefined,
  lastName: undefined
}
*/
```

Array of instance :
```js
[
  Person {
  
  },
  Person {
  
  }
]
```




