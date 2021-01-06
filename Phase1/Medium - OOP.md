Sumber : https://medium.com/easyread/penerapan-oop-dalam-javascript-part-1-98ed3a427e77

# Penerapan OOP dalam Javascript (Part 1)

## Object Literal VS Object Class

Di Javascript ada tipe data yaitu object literal. Ya dia juga berupa object. Contoh kodenya seperti ini.
```js
const car = {
  color: 'red',
  racingCar: true,
  type: 'suv'
  engineStart: () => {
    console.log('engine start')
  }
}
```
tetapi kita tidak akan membahas mengenai object literal, melainkan kita akan membahas mengenai object class.
Walaupun dua-duanya adalah object, tetapi keduanya memiliki perbedaan.

```js
class Car {
  
  constructor(type, color) {
    this.type =  type
    this.color = color
    this.engineStatus = 'off'
  }
  
  engineStart () {
    
    this.engineStatus = 'on'
    console.log('engine start')
  }
  
  engingeStop () {
    this.engineStatus = 'off'
    console.log('engine start')
  }
  
  static isEngineOn (car) {
    if (car.engineStatus === 'on') {
      console.log('Engine On')
    } else {
      console.log('Engine off')
    }
  }    
  
}
```

Sebelum kita memiliki sebuah object, maka kita perlu cetakan untuk membuat object-nya. Nah cetakan itu disebut class. Sama seperti kita ingin membuat mobil, maka kita perlu cetakan atau blue print untuk membuat mobilnya.

Di dalam kelas ada beberapa attribut penting di dalamnya yaitu:
- Constuctor
- Property
- Class Method
- Static Method
- Getter & Setter
- Inheritance

1. Constuctor
Adalah sebuah method/function yang di jalankan pertama kali ketika object di buat. Misalnya seperti contoh kode di atas ketika `const car = new Car('suv', 'red')` di jalankan maka method `constructor` langsung di jalankan juga, yang isinya adalah memasukkan parameter `suv` dan `red` ke dalam property car `this.type` dan `this.color` .
2. Property
Adalah data yang di simpan di dalam sebuah object. Pada contoh di atas adalah `this.type` dan `this.color` , property dapat diakses di class method manapun yang ada di dalam object. Di atas saya memasukkan string `on` ke dalam `this.engineStatus` di dalam method `engineStart()`
3. Class Method
Adalah method/function yang ada di dalam sebuah object, dan untuk menggunakannya class harus di instance terlebih dahulu menjadi object baru bisa dijalankan. Contoh class mobil di atas, kita akan menggunakan method `engineStart` .
```js
const car = new Car('suv', 'red')
car.engineStart()
```
4. Static Method
Adalah method yang sama seperti class method, tetapi untuk menjalankannya tidak perlu meng instance class, cukup menggunakan `NamaClass.namaMehod()`
```js
const car = new Car('suv', 'red)
Car.isEngineOn(car) // Engine Off
car.engineStart()
Car.isEngineOn(car) // Engine On
```
