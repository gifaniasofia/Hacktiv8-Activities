# Review Looping
- initial expression : kapan dimulai
- last expression : kapan berakhir
- increment/decrement

```JavaScript
var string = 'Selamat Pagi'
var hasil = ''

for (var i = string.length - 1; i >= 0; i--) {
  hasil += string[i]
}
console.log(hasil)
```

```JavaScript
var string = 'Selamat Pagi'

for (var i = string.length - 1; i >= 0; i--) {
  var hasil = '' // bakal ngereset si hasil
  hasil += string[i]
}
console.log(hasil)
```
