# Sorting
- Untuk mempermudah jika ingin menghilangkan duplikasi/data yang tidak diperlukan
- bisa pake teknik splice-ing
- atau swap juga bisa

## insertion sort

```
....

9
    1 5 7 8 9 3
            ^
    9 < 8 => no swap
    9 < 7 => no swap
    9 < 5 => no swap
    9 < 1 => no swap => 1 5 7 8 9 3
3
    1 5 7 8 9 3
```

## selection sort

```
unsorted = [33, 2, 52, 106, 73]   result = []

loop 1:
len = 5
min = 2
unsorted = [33, 52, 106, 73]      result = [2]

loop 2:
len = 4
min = 33
unsorted = [52, 106, 73]          result = [2, 33]

....

loop 5
len = 1
min = 106
unsorted = []                     result = [2, 33, 52, 73, 106]

loop 6
len = 0

result = [2, 33, 52, 73, 106]
```

# Search :
https://www.cs.usfca.edu/~galles/visualization/Search.html

## linear search
-> ngeloop sampai ketemu, kalo ketemu return. kalo gaketemu return -1

## binary search
-> harus di sorting dulu
-> sistem choping

```
search = 23

step 1
L = 0
H = 9
Mid = Math.floor(0+9/2)
nilai tengah = 16

Apakah 23 === 16? No.
Apakah 23 > 16? Yes.
Pindahin L jadi L = Mid + 1

step 2
L = 5
H = 9
Mid = 7
Nilai tengah = 56

Apakah 23 === 56? No.
Apakah 23 < 56 ? Yes.
Pindahin H jadi H = Mid - 1

step 3
L = 5
H = 6
Mid = 5
Nilai tengah = 23

Apakah 23 === 23 ? Yes.

return position
```

Misal datanya :
1 2 3 4 .... 1000000

2 => linear => 2 x loop aja udah ketemu. prosesnya lebih cepet => best case scenario
     binary => lebih dari 10 kali loop. berat

999999 => linear => worst case scenario
