# OOP - Composition


# OOP - Aggregation


# Pattern - Factory
  - Static Method




- instanciate -> new

- inheritance : terjadi hubungan org tua dan anaknya
  - Namun, apakah mungkin kalau kita mendefinisikan relasi lainnya yang merupakan suatu keterikatan antar class yang setara ataupun class yang berbeda sama sekali? Nah, untuk mengetahui ini, kita butuh mengerti tentang suatu istilah baru:
  
1. Composition - sebuah relasi menyatakan bahwa "apalah aku tanpamu"
2. Aggregation - bisa ditambahin kapanpun

# Composition
- merupakan hubungan yang menyatakan bahwa sebuah class merupakan BAGIAN DARI (part-of) class lainnya
- Saya menginstance sebuah class di dalam class lainnya
- Langsung ada class lainnya pas ngeinstanciate suatu class. Alias ada di bagian constructor pas new class lain.
- tight => pas dibuat class A langsung ada instanciate lainnya (B, C, dll) di constructor

# Aggregation
- merupakan hubungan yang menyatakan sebuah class memiliki sebuah referensi (has-a ===> alias boleh ada boleh engga) pada class lainnya 
- Disebut juga loosely couple
- Contoh lain:
  - Department <> Pegawai => saling memiliki hub, dengan artian kalo departmennya baru dibikin blm ada hub dengan pegawai manapun ya masih punya hub cuma nilainya 0.

# Factory method
- pabrik untuk membuat class
- metode atau pola desain pemrograman, dimana kita membuat pabrik untuk class yang akan kita buat

// cara kurang teladan
```js
vsCodeMenuItems.arrMenuItem.push(new MenuItem('Help'))
```

// cara baik :
menggunakan suatu method untuk bisa ngepush new MenuItem yg baru. yaitu pakai factory method

# Static method
- adalah sebuah method (fungsi) yang bisa digunakan tanpa perlu kita menginstantiate class dimana method tersebut berada.
