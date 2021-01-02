Source : https://www.w3schools.com/js/js_asynchronous.asp

# JS Callbacks
> A callback is a function passed as an argument to another function

- This technique allows a function to call another function
- A callback function can run after another function has finished

Example:

Using a callback, you could call the calculator function (`myCalculator`) with a callback, and let the calculator function run the callback after the calculation is finished:

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

In the example above, `myDisplayer` is the name of a function. It is passed to `myCalculator()` as an argument.

**When you pass a function as an argument, remember not to use parenthesis.**
- Right: `myCalculator(5, 5, myDisplayer);`
- Wrong: `myCalculator(5, 5, myDisplayer());`

# JS Asynchronous
> Functions running in parallel with other functions are called asynchronous

- In the real world, callbacks are most often used with asynchronous functions.
- A good example is JavaScript `setTimeout()`

When using the JavaScript function `setTimeout()`, you can specify a callback function to be executed on time-out:

```js
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```
**1000 ==> 1000 milliseconds ===> 1 seconds**

In the example above, `myFunction` is used as a callback.

The function (the function name) is passed to `setTimeout()` as an argument.

3000 is the number of milliseconds before time-out, so `myFunction()` will be called after 3 seconds.

When you pass a function as an argument, remember not to use parenthesis.
- Right: `setTimeout(myFunction, 3000);`
- Wrong: `setTimeout(myFunction(), 3000);`

Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

```js
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```

In the example above, `function(){ myFunction("I love You !!!"); }` is used as a callback. It is a complete function. The complete function is passed to `setTimeout()` as an argument.

3000 is the number of milliseconds before time-out, so `myFunction()` will be called after 3 seconds.

### Waiting for Intervals:

When using the JavaScript function `setInterval()`, you can specify a callback function to be executed for each interval:
```js
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```

In the example above, `myFunction` is used as a callback.

The function (the function name) is passed to `setInterval()` as an argument.

1000 is the number of milliseconds between intervals, so `myFunction()` will be called every second.

### Waiting for Files
If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.

This is the perfect time to use a callback.

This example loads a HTML file (`mycar.html`), and displays the HTML file in a web page, after the file is fully loaded:

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);
```

In the example above, `myDisplayer` is used as a callback.

The function (the function name) is passed to `getFile()` as an argument.

Below is a copy of mycar.html:

mycar.html
```
<img src="img_car.jpg" alt="Nice car" style="width:100%">

<p>A car is a wheeled, self-powered motor vehicle used for transportation.
Most definitions of the term specify that cars are designed to run primarily on roads, to have seating for one to eight people, to typically have four wheels.</p>

<p>(Wikipedia)</p>
```
