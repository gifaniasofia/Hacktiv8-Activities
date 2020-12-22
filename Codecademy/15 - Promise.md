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
To handle a “successful” promise, or a promise that resolved, we invoke `.then()` on the promise, passing in a success handler callback function:
```js
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
```

Let’s break down what’s happening in the example code:
- `prom` is a promise which will resolve to `'Yay!'`.
- We define a function, `handleSuccess()`, which prints the argument passed to it.
- We invoke prom‘s `.then()` function passing in our `handleSuccess()` function.
- Since prom resolves, `handleSuccess()` is invoked with prom‘s resolved value, `'Yay'`, so `'Yay'` is logged to the console.

With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both an `onFulfilled` and `onRejected` callback to `.then()`.
```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
```

Let’s break down what’s happening in the example code:
- `prom` is a promise which will randomly either resolve with `'Yay!'` or reject with `'Ohhh noooo!'`.
- We pass two handler functions to `.then()`. The first will be invoked with `'Yay!'` if the promise resolves, and the second will be invoked with `'Ohhh noooo!'` if the promise rejects.

Let’s write some `onFulfilled` and `onRejected` functions!

**Instructions**
1. Take a look at the provided code. We require in a function, checkInventory(). It builds on the logic of the orderSunglasses() function you wrote in a previous exercise.
- checkInventory() takes in an array representing an order and returns a promise.
- If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
- Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".

We used setTimeout() to ensure that the checkInventory() promise settles asynchronously.

If you’d like, look at the library.js file to see how it works. Press “Check Work” when you’re ready to move on.

2. Write a function, handleSuccess(). You’ll use this function later on as your success handler. handleSuccess() should have one parameter, representing a resolved value. Inside the body of handleSuccess(), log the parameter to the console.

3. Write a function, handleFailure(). You’ll use this function later on as your failure handler. handleFailure() should have one parameter, representing a rejection reason. Inside the body of handleFailure(), log the parameter to the console.

4. Invoke checkInventory() with order. This will return a promise. Attach a .then() function to this. Pass into .then() the two handlers you wrote as callback functions.

5. Type node app.js in the terminal and hit enter.

**library.js**
```js
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

module.exports = { checkInventory };
```

**Answer**
-> app.js

```js
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order)
  .then(handleSuccess, handleFailure);
```

**Result**
```
$ node app.js
Thank you. Your order was successful.
$ 
```

# Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, `.then()` will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one `.then()`, we can chain a second `.then()` with a failure handler to a first `.then()` with a success handler and both cases will be handled.
```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
```

Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: `.catch()`.

The `.catch()` function takes only one argument, `onRejected`. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using `.catch()` accomplishes the same thing as using a `.then()` with only a failure handler.

Let’s look at an example using `.catch()`:
```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

Let’s break down what’s happening in the example code:
- `prom` is a promise which randomly either resolves with `'Yay!'` or rejects with `'Ohhh noooo!'`.
- We pass a success handler to `.then()` and a failure handler to `.catch()`.
- If the promise resolves, `.then()`‘s success handler will be invoked with `'Yay!'`.
- If the promise rejects, `.then()` will return a promise with the same rejection reason as the original promise and `.catch()`‘s failure handler will be invoked with that rejection reason.

Let’s practice writing .catch() functions.

**Instructions**
1. We’re going to refactor the functionality of the previous exercise but this time we’ll use .catch()! First invoke the checkInventory() function with the order. Remember, this function will return a promise.
2. Add a .then() to the returned promise. Pass in the success handler handleSuccess().
3. Add a .catch() to the returned promise. Pass in the failure handler handleFailure().
4. We set our inventory of sunglasses to 0, so the order shouldn’t go through. Let’s make sure our code has the expected results. Type node app.js in the terminal and hit enter.

**library.js**
```js
const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    });
};

module.exports = {checkInventory};
```

**Answer** 
-> app.js

```js
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure)
```

**Result**
```
$ node app.js
We're sorry. Your order could not be completed because some items are sold out.
$ 
```

#






**Instructions**
1. Take a look at the provided code. We require in three functions: checkInventory(), processPayment(), shipOrder(). These functions each return a promise.

- checkInventory() expects an order argument and returns a promise. If there are enough items in stock to fill the order, the promise will resolve to an array. The first element in the resolved value array will be the same order and the second element will be the total cost of the order as a number.
- processPayment() expects an array argument with the order as the first element and the purchase total as the second. This function returns a promise. If there is a large enough balance on the giftcard associated with the order, it will resolve to an array. The first element in the resolved value array will be the same order and the second element will be a tracking number.
- shipOrder() expects an array argument with the order as the first element and a tracking number as the second. It returns a promise which resolves to a string confirming the order has shipped.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on to the next checkpoint.

2. We set up a promise chain but it’s missing a couple important lines of code to make it function properly.

We invoked checkInventory() with order and chained a .then() function to it. This .then() has an anonymous function as its success handler, but it’s missing a return statement.

The success handler should return a processPayment() promise.

3. We have a second .then() function on the chain. This .then() also has an anonymous function as its success handler and is missing a return statement.

The success handler should return a shipOrder() promise.

4. Type node app.js in the terminal and hit enter.

**library.js**
```js
const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};
```

**Answer**
```js
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
```

**Result**
```
$ node app.js
All of the items are in stock. The total cost of the order is 35.97.
Payment processed with giftcard. Generating shipping label.
The order has been shipped. The tracking number is: 816628.
$ 
```
