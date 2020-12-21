# What is a Promise?
Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:
- **Pending**: The initial state— the operation has not completed yet.
- **Fulfilled**: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
- **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:
- **Pending**: The dishwasher is running but has not completed the washing cycle.
- **Fulfilled**: The dishwasher has completed the washing cycle and is full of clean dishes.
- **Rejected**: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.

If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

![promises_page1_diagram](https://content.codecademy.com/courses/learn-javascript-promises/Art-346-01.svg)

# Constructing a Promise Object
Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:

```js
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The `Promise` constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. The `resolve()` and `reject()` functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own `resolve()` and `reject()` functions into the executor function.

- `resolve` is a function with one argument. Under the hood, if invoked, `resolve()` will change the promise’s status from `pending` to `fulfilled`, and the promise’s resolved value will be set to the argument passed into `resolve()`.
- `reject` is a function that takes a reason or error as an argument. Under the hood, if invoked, `reject()` will change the promise’s status from `pending` to `rejected`, and the promise’s rejection reason will be set to the argument passed into `reject()`.

Let’s look at an example executor function in a `Promise` constructor:

```js
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```

Let’s break down what’s happening above:
- We declare a variable `myFirstPromise`
- `myFirstPromise` is constructed using `new Promise()` which is the Promise constructor method.
- `executorFunction()` is passed to the constructor and has two functions as parameters: `resolve` and `reject`.
- If `someCondition` evaluates to true, we invoke `resolve()` with the string `'I resolved!'`
- If not, we invoke `reject()` with the string `'I rejected!'`

In our example, `myFirstPromise` resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.

**Instructions**
1. You’ll be writing your code in the code-editor, but we won’t be running it until the final step. To check your code for a step, you can press the “Check Work” button.

We’re going to create a promise representing ordering sunglasses from an online store. First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

myExecutor() should:
- Have two parameters: resolve and reject
- Check if the sunglasses property on the inventory object has a value greater than zero
- If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
- If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'

When you’re ready, press the “Check Work” button.

2. Create a function, orderSunglasses(). This function should have no parameters. It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.

Checkpoint 3 Passed

**Hint

You’ll need to use the new keyword and the Promise constructor method to create a new promise object:
```js
new Promise(anExecutorFunction);
```
Remember to pass the function in without invoking it and make sure your orderSunglasses() function returns the promise.

3. Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.

4. At the bottom of your app.js file, log orderPromise to the console.

5.
In this exercise and throughout the lesson, we’ll provide you with a bash terminal to execute your code. To run the app.js program, you’ll type node app.js in the terminal and hit enter (or return). You’ll be able to see the output of the program in the terminal.

Let’s try it! Type node app.js in the terminal and hit enter.

If you’d like, you can see an alternate output by changing the sunglasses property in the inventory object to 0 and executing app.js from the terminal again.

When you’re ready to move on, press the “Check Work” button.

**Answer**
```js
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.')
  } else {
    reject('That item is sold out.')
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise); 
```

**Result**
```
$ node app.js
Promise { 'Sunglasses order processed.' }
```

# The Node setTimeout() Function
Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key. Rather than constructing promises, you’ll be handling `Promise` objects returned to you as the result of an asynchronous operation. These promises will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using `setTimeout()`. `setTimeout()` is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. `setTimeout()` has two parameters: a callback function and a delay in milliseconds.
```js
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
```

Here, we invoke `setTimeout()` with the callback function `delayedHello()` and `2000`. In at least two seconds `delayedHello()` will be invoked. But why is it “at least” two seconds and not exactly two seconds?

This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the event-loop. After two seconds, `delayedHello()` is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before `delayedHello()` is actually executed.

Let’s look at how we’ll be using `setTimeout()` to construct asynchronous promises:
```js
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();
```

In the example code, we invoked `returnPromiseFunction()` which returned a promise. We assigned that promise to the variable `prom`. Similar to the asynchronous promises you may encounter in production, `prom` will initially have a status of pending.

Let’s explore `setTimeout()` a bit more.

**Instructions**
1. Create a function, usingSTO(). Your usingSTO() function should have no parameters. Inside the function body, it should print a string to the console. This can be any string you want (as long as it’s not either “This is the first line of synchronous code.” or “This is the last line of synchronous code.”).

Check your work to move on to the next step.

2. Now, let’s invoke the setTimeout() function. Remember, setTimeout() has two parameters. Invoke setTimeout() with your usingSTO() function as the first argument and a number between 0 and 3000 as the second argument.

3. Take a moment to predict the output of this program.

Whenever you’re ready, type node app.js in the terminal and hit enter.

See if the program’s output in the terminal lines up with what you expected.

**Answer**
```js
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log('Hello');
}

setTimeout(usingSTO, 2000);






// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
```

**Result**
```
$ node app.js
This is the first line of code in app.js.
This is the last line of code in app.js.
Hello
$ 
```

# Consuming Promises
The initial state of an asynchronous promise is `pending`, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named `.then()` method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”

In the case of our dishwasher promise, the dishwasher will run **then**:
- If our promise rejects, this means we have dirty dishes, and we’ll add soap and run the dishwasher again.
- If our promise fulfills, this means we have clean dishes, and we’ll put the dishes away.

`.then()` is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as **handlers**. When the promise settles, the appropriate handler will be invoked with that settled value.
- The first handler, sometimes called `onFulfilled`, is a success handler, and it should contain the logic for the promise resolving.
- The second handler, sometimes called `onRejected`, is a failure handler, and it should contain the logic for the promise rejecting.

We can invoke `.then()` with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, `.then()` will just return a promise with the same settled value as the promise it was called on. **One important feature of .then() is that it always returns a promise.** We’ll return to this in more detail in a later exercise and explore why it’s so important.

![promise_page5_diagram](https://content.codecademy.com/courses/updated_images/Art-347_v1_Updated_1-01.svg)

# The onFulfilled and onRejected Functions








