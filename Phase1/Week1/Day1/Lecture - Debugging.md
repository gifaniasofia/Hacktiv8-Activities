# Debbuging

1. Is not defined
variabel tidak dideklarasikan sebelumnya

`Reference Error: ... is not defined`

2. Unexpected token vs unexpected identifier
masalah syntax

3. Using built in function on different data type
misal: menggunakan push pada string

4. Infinity looping
Maximum call stack exceeded

# Node Debugger
> alternatif/memudahkan untuk debugging

`node inspect <nama-file>.js`

### Debugger essentials
1. Breakpoint (debugger)
`debugger` berhenti di line berapa
2. cont `c` -> continuous -> mencari debugger selanjutnya
3. next `n` -> pindah per satuan line
4. step in `s` -> masuk ke function ya
5. step out `o` -> keluar dari function
6. `pause`
7. `watch('')` -> untuk console.log 1 variabel yang ingin dipantau, misal nama variabel c jadi
```
debug> watch('c')
debug> n
```
atau function juga bisa:

`watch('sum(5, 6)')`

kalo mau liat > 1 variabel :
```
debug> watch('a')
debug> watch('b')
debug> watch('c')
debug> n
```
8. unwatch('')
```
debug> unwatch('a')
debug> n
```

9. `restart` -> untuk restart

10. `.exit` -> keluar dari debug

11. `repl` -> buat masukin script-script javascript. atau cek kyk watch
misal cek:
```
> arr.push('1')
```

**note**
misalnya:
```js
for (let i = 0; i < str.length + 1; i++) {
    debugger
    arr.push(str[0]);
}
```

- `c` di dalam for loop itu untuk menambah iterasi `i = 0`, `i = 1` karena `c` kan untuk menemukan debugger selanjutnya, nah debugger nya ada di dalam looping, jadinya dia next i.
- `n` di dalam for loop ya biasa untuk next line aja

**note: letakkan debugger dimana kalian letakin console.log untuk mengecek sesuatu**
