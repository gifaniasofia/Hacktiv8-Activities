# OOP
> Paradigma dalam programming yang menggunakan objek sebagai orientasi

# Why OOP?
- Lebih mudah dipahami karena menggunakan dunia nyata sebagai reference
- Bisa memakai class berulang kali

# Characteristic OOP
1. Abstraction
  - bikin blueprint
  - menyembunyikan kerumitan
  - Contoh : method attack dalam class Character
2. Encapsulation
  - menyembunyikan properti dari dunia luar
  - Contoh : attribute private dalam constructor -> makanya pakai getter setter
3. Inheritance
  - penurunan sifat
  - suatu class memperoleh attr dan methods dari class yang sudah ada
  - Contoh: class Wizard yang memiliki attributes dan methods class Characters
4. Polymorphism
  - method nya sama tapi output nya beda
  - Contoh: method attack di class Character(parent) berbeda dengan method attack di class Wizard(child)

# Association between Class
1. Composition
  - class A mempunyai class B
  - tanpa class A, class B tidak akan ada
  - Contoh : hubungan Dungeon dan DungeonMaster
2. Aggregation
  - hub suatu kelas memiliki referensi pada kelas main
  - class A berisikan class B
  - Contoh : hubungan Dungeon dan Players
  
# Player Factory
- Mempersimpel -> misalnya membuat class berbagai character
