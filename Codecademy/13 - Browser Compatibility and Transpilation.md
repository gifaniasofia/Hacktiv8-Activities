# Introduction
You’re probably prompted to update your web browser every few months. Do you know why? A few reasons include addressing security vulnerabilities, adding features, and supporting new HTML, CSS, and JavaScript syntax.

The reasons above imply there is a period before a software update is released when there are security vulnerabilities and unsupported language syntax.

This lesson focuses on the latter. Specifically, how developers address the gap between the new JavaScript syntax that they use and the JavaScript syntax that web browsers recognize.

This has become a widespread concern for web developers since Ecma International, the organization responsible for standardizing JavaScript, released a new version of it in 2015, called ECMAScript2015, commonly referred to as ES6. Note, the 6 refers to the version of JavaScript and is not related to the year it was released (the previous version was ES5).

Upon release, web developers quickly adopted the new ES6 syntax, as it improved readability and efficiency. However, ES6 was not supported by most web browsers, so developers ran into browser compatibility issues.

In this lesson, you will learn about two important tools for addressing browser compatibility issues.
- caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support.
- Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers.

Let’s get started by running ES6 JavaScript on a fake old web browser version.

**Instructions**
1. Copy the following code into main.js. The code includes three features of ES6 syntax: const, let, and ES6 string interpolation.
```js
var pasta = "Spaghetti"; // ES5 syntax
 
const meat = "Pancetta"; // ES6 syntax
 
let sauce = "Eggs and cheese"; // ES6 syntax
 
// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
```

Run the code when you are ready. Look at the errors displayed in our LetScape

**Answer**
```js
var pasta = "Spaghetti"; // ES5 syntax
 
const meat = "Pancetta"; // ES6 syntax
 
let sauce = "Eggs and cheese"; // ES6 syntax
 
// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
```

**Result**

![browser result1](img/codecademy-browser1.png "CODECADEMY-browser-page1")

# caniuse.com I
Since Ecma’s release of ECMAScript2015 (ES6), software companies have slowly added support for ES6 features and syntax. While most new browser versions support the majority of the ES6 library, there are still a couple sources of compatibility issues:

- Some users have not updated to the latest, ES6 supported web browser version.
- A few ES6 features, like modules, are still not supported by most web browsers.

Because companies add support for ES6 features gradually, it’s important for you to know how to look up browser support on a feature-by-feature basis. The website caniuse.com is the best resource for finding browser compatibility information.

In caniuse, you can enter an ES6 feature, like let, and see the percentage of browsers that recognize it. You can also see when each major web browser (Chrome, Safari, Edge, etc.) added support for the keyword.

The video to the right shows you how to get started with caniuse.com.

**Instructions**

In the video, we will use caniuse.com to find the percentage of browsers that support the entire ES5 library, then we will look at the percentage of browsers that support modules, a feature introduced in ES6.

# caniuse.com II
Now, it’s your turn to get some practice with caniuse.com. In a new tab, open caniuse.com and complete the tasks below.

**Instructions**
1. Look up the percentage of browsers that support JavaScript ES5. Save the value, as a number, to the variable esFivePercentageSupport.
2. Look up the percentage of browsers that support “Template Literals”, a feature that was introduced in ES6.

Save the value, as a number, to the variable esSixTemplateLiterals.

**Answer**
```js
// Set the variable below to a number
let esFivePercentageSupport = 99.44;

// Set the variable below to a number
let esSixTemplateLiterals = 95.99;
```

# Why ES6?
Before we learn how to set up a JavaScript project that converts ES6 to an older version, it’s worth understanding a few of the reasons Ecma made such substantial updates.

The version of JavaScript that preceded ES6 is called JavaScript ES5. Three reasons for the ES5 to ES6 updates are listed below:
- Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
- Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls.
- A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.

Because ES6 addressed the above issues, Ecma knew that adoption by web developers would occur quickly, while web browser support lagged behind.

To limit the impact of ES6 browser compatibility issues, Ecma made the new syntax backwards compatible, which means you can map JavaScript ES6 code to ES5.

**Instructions**
1. In these tasks, you will manually change the code in main.js to ES5 syntax.

The let and const keywords were introduced in ES6. Before that, we declared all variables with the var keyword.

Change the let and const keywords in main.js to var.

2. The following line of code is written with ES6 string interpolation:

`You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`
In ES5, we used plus signs (+) to interpolate variables into strings.

In main.js, use ES5 string interpolation to set carbonara to the same string as above.

**Answer**
```js
var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = 'You can make carbonara with ' + pasta + meat + ' and a sauce made with ' + sauce + '.';
```

# Transpilation With Babel
In the last exercise, you manually converted ES6 code to ES5. Although manual conversion only took you a few minutes, it is unsustainable as the size of the JavaScript file increases.

Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript library called Babel that transpiles ES6 JavaScript to ES5.

Transpilation is the process of converting one programming language to another.

In the remaining exercises of this lesson, you will learn how to use Babel to transpile the new, easy-to-write version of JavaScript (ES6) to the old, browser-compatible version of JavaScript (ES5).

In the instructions below, you will pass JavaScript ES6 code to Babel, which will transpile it to ES5 and write it to a file in the lib directory.

**Instructions**
1. In the terminal window type:

`npm install babel-cli`

This installs one of the two required Babel packages.

2. In the terminal window type:

`npm install babel-preset-env`

This installs the second of two required Babel packages.

3. In the terminal, type `npm run build` and press enter.

You can view the ES5 code in ./lib/main.js.

You may need to refresh to see the newly created lib directory.

**Result**

ES6 version

```js
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
```
ES5 version yang udah diubah sama si Babel
```js
"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";
```
