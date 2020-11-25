# Loop
- make it dynamic is much better
- adhere to DRY (DONT REPEAT YOURSELF)
- not using iteration leads you to :
  - hard to maintain code
  - error prone code

Process loop:
- initialize (start)
- expression -> expression increment/decrement dan expression action
- limit (condition)

Looping in JS
1. For
```JavaScript
for (var i = 0; i < 10; i++) {
  // Statements to execute
}
```

Contoh :
```JavaScript
for (var itung = 1; i < 10; i++) {
  console.log("HACKTIV8 MANTAB)
}
```

**i++ =====> i+=1**

**i-- =====> i-=1**

**selain i += 1 bisa i += 2 dst buat loncat 2*

**PSEUDOCODE**
```JavaScript
FOR itung FROM 1 TO 10 INCREMENT BY 1
  DISPLAY "HACKTIV8 MANTAB"
END FOR
```

2. While
```JavaScript
while(conditions) {
  // Statement to execute
  // Expression increment/decrement
}
```

Contoh :
```JavaScript
var itung1 = 0
while (itung1 < 10) {
  console.log("HACKTIV8 MANTAB);
  itung1++;
}
```
**PSEUDOCODE**
```JavaScript
STORE i WITH 0
WHILE i LESS THAN 10
  DISPLAY 'Hello'
  SET i WITH i PLUS 1
END WHILE
```

3. Do While
```JavaScript
do {
  // Statements to execute
  // Expression increment/decrement
} while (condition)
```

Contoh:
```JavaScript
var itung2 = 5
do {
  console.log("HACTIV8 MANTAB")
  itung2++
} while (itung2 < 10)
```
Melakukan do dulu (console.log) terus increment, baru dicek kondisinya.

**PSEUDOCODE**
```JavaScript
STORE itung2 WITH 5
DO
  DISPLAY "HACKTIV8 MANTAB"
  SET itung2 WITH itung2 PLUS 1
WHILE itung2 LESS THAN 10
```

# How to loop string?
> by using property of length

```JavaScript
var nama = "Fajrin Noor Rachman"

for (var i = 0; i <= nama.length; i++) {
  console.log(nama[i])
}
```
kalo mau kesamping:

```JavaScript
var nama = "Fajrin Noor Rachman"
var tampung = ""

for (var i = 0; i < nama.length; i++) {
  tampung = tampung + nama[i] + "|"
}
console.log(tampung)
```

keisengan:
```JavaScript
var nama = "Fajrin Noor Rachman"
var tampung = ""

for (var i = 0; i < nama.length; i++) {
  tampung = tampung + nama[i] + "|"
  console.log(tampung)
}

// kalo begitu JADI
// Loop 1 -> tampung = "F|"
// Loop 2 -> tampung = "F|a|"
// Loop 3 -> tampung = "F|a|j|"
DST
```

# infinite looping
```JavaScript
var index = 0
while (index < 10) {
  console.log("INFINITE LOOPING NIH")
  index = 1 + 1 // 2 ==> jadi index nya terus < 10 gaberes-beres
}
```

# Looping doesn't work
```JavaScript
var index = 10 // nilainya udah falsy dari awal, gakepenuhin conditionnya
while (index < 10) {
  console.log("INFINITE LOOPING NIH")
  index = 1 + 1
}
```

# for and if
```JavaScript
for (var i = 1; i < 10; i++) {
  if (i > 5) {
    console.log("i udah lebih dari 5 bos")
  }
}

var itung1 = 0
while (itung1 < 10) {
  if (itung1 > 5) {
    console.log ("HACKTIV8 MANTAB")
   }
  itung1++
}
```
