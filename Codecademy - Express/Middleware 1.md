# Introduction
Writing code is a creative process. Programmers will be quick to differ in opinion on whether the solution to a problem should be implemented in one way or another — citing tradeoffs in algorithms, structures, or even languages. Due to these trade-offs, the problems programmers face most frequently will have several different solutions, all correct but all written differently with various factors considered. Because “correct” code can take so many different forms, developers have cultural notions of code quality that is somewhat independent of these decisions.

One concept that is central to the notion of quality code is that all code is read many, many more times than it is written. Maintaining and updating code takes up much more of a software developer’s time than production. There are many ways to make this less of a burden, and these techniques frequently correspond to code quality principles. Naming variables consistently so that they’re identifiable is one way to improve the readability of a codebase. Another pillar of code quality is avoiding duplication of code within a codebase.

Code duplication is an invitation for bugs. If incorrect code is copy-and-pasted in multiple places, a developer might remedy the flaws in only a few of those places and fail to fix the buggy code everywhere. In this course, we will investigate several ways to avoid replication and reduce complexity. In programming in general, this often means putting the reused code into reusable containers like functions and objects. In Express specifically, this will also mean composing our desired functionality into a series of middleware functions.


# DRYing Code With Functions
Beyond labeling, good code will leverage the strength of its programming language to avoid performing the same tasks

Take a look at the following code:
```js
const addFive = number => {
  const fiveAdded = number + 5;
  console.log(`Your number plus 5 is ${fiveAdded}`);
}
 
const addTen = number => {
  const tenAdded = number + 10;
  console.log(`Your number plus 10 is ${tenAdded}`);
}
 
const addTwenty = number => {
  const twentyAdded = number + 20;
  console.log(`Your number plus 20 is ${twentyAdded}`);
}
```
The code above defines three different functions that accomplish the radically different tasks of: adding five to a number and logging the sum, adding ten to a number and logging the sum, and adding twenty to a number and logging the sum. While these three function definitions are not exact duplicates of each other, a well-designed application will be flexible enough to join similar functionality in a single element.
```js
const addNumber = (number, addend) => {
  const numAdded = number + addend;
  console.log(`Your number plus ${addend} is ${numAdded}`);
}
```
As you can see, by adding an argument to the earlier functions we can simplify our application code which will ultimately save time should we realize that we also want an addFifty() function and an addHundred() function. Code that performs the same task in multiple places is repetitive, and the quality coder’s credo is “Don’t Repeat Yourself” (DRY). If a program performs similar tasks without refactoring into a function, it is said to “violate DRY”. “Violating DRY” is a programmer’s way of complaining: “This script is saying the same thing over and over! We can do the same thing with less code!” Let’s try to not repeat ourselves in this codebase by repurposing some of the more glaringly repeated code into functions we can call instead.

**Instructions**
1. We have provided a front-end for testing out your routes throughout this lesson. To get it to display in each exercise, start your server (node app.js) and then refresh the browser to the right. A tool should appear that allows you to set request verbs, paths, and body information, and then make requests using that information. Use this tool to ensure your server is working as expected throughout this lesson, checking your server logs and examining the returned responses as you make changes.

2. Currently, each route logs a message with the HTTP method and a message that the request was received (i.e. 'GET Request Received'). Write a function logRequest that takes a single string parameter verb and logs a message formatted in the same fashion.

3. Replace the console.log calls that open each route and replace each with a call to logRequest. Pass in the method name for each route.

**Answer**
```js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Add your logging function here:
const logRequest = (verb) => {
  console.log(`${verb} Request Received`);
}


app.get('/beans/', (req, res, next) => {
  logRequest('GET');
  res.send(jellybeanBag);
  console.log('Response Sent');
});

app.post('/beans/', (req, res, next) => {
  logRequest('POST');
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const body = JSON.parse(queryData);
    const beanName = body.name;
    if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
      return res.status(400).send('Bean with that name already exists!');
    }
    const numberOfBeans = Number(body.number) || 0;
    jellybeanBag[beanName] = {
      number: numberOfBeans
    };
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.get('/beans/:beanName', (req, res, next) => {
  logRequest('GET');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    console.log('Response Sent');
    return res.status(404).send('Bean with that name does not exist');
  }
  res.send(jellybeanBag[beanName]);
  console.log('Response Sent');
});


app.post('/beans/:beanName/add', (req, res, next) => {
  logRequest('POST');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const numberOfBeans = Number(JSON.parse(queryData).number) || 0;
    jellybeanBag[beanName].number += numberOfBeans;
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.post('/beans/:beanName/remove', (req, res, next) => {
  logRequest('POST');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const numberOfBeans = Number(JSON.parse(queryData).number) || 0;
    if (jellybeanBag[beanName].number < numberOfBeans) {
      return res.status(400).send('Not enough beans in the jar to remove!');
    }
    jellybeanBag[beanName].number -= numberOfBeans;
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.delete('/beans/:beanName', (req, res, next) => {
  logRequest('DELETE');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  jellybeanBag[beanName] = null;
  res.status(204).send();
  console.log('Response Sent');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```
