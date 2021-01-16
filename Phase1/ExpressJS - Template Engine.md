# What is Template Engine?
Template engine enables you tu use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

# Commonly used express.js template engine
- Ejs => Embedded JavaScript template engine.
- Pug => Haml-inspired template engine (formerly Jade).
- Hbs => Adapter for Handlebars.js and extension of Mustache.js template engine.

# Installing EJS
To Install EJS and use it in our express app, we have to use npm install it by using the command below:
```
npm install ejs --save
```
Once installed it can be used in express app by adding app.set('view engine', 'ejs') line:
```js
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/home', function(req, res) {
  res.render('home')
})
```

# Parsing a data
Once of many advantages using a template engine is a capability to serving a dynamic data which later can be display in a frontend as a static HTML. The data can be passed by adding object literal as a second parameter in render method.
```js
const express = require('express')
const app = express()

app.get('/home', function(req, res) {
  res.render('home', {'title': 'Homepage', 'description': 'Short Description'})
})
```

# What is Middleware?
Middleware is a functions that have access to the **request object(req)**, the **response object(res)**, and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named **next**. enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

# What is Body Parser?
- Body Parser is an express.js middleware that parse incoming request bodies in a middleware before your handlers.
- Body Parser usually paired with POST method and it provides the following parsers:
  - JSON body parser
  - Raw body parser
  - Text body parser
  - URL Encoded form body parser
  
# Using Body Parser
If you want using Body Parser, you can add code below.
```js
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.user(express.urlencode({extended: true}))
app.post('/home', function(req, res) {
  res.render('home')
})
```

# Available Parsers
As the Body Parser is a middleware, it can be passed through all the route using app.use()

```js
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.user(express.urlencode({extended: true}))
app.post('/home', function(req, res) {
  res.render('home', {'title': req.body.title })
})
```

# Serve Static Resource
Express hasmthe ability to serve static resources like images, css, javascript, or other static files using the built=in method called "express.static()". The method can serve a static resources directly by specifying the folder name where the resources are stored.

For example, use the following code to serve images, CSS files, and Javascript files in a directory named *public*.
```js
app.use(express.static('public'))
```

Now it can load the files that are in the public directory from the /*public* path prefix such as:
```
http://localhost:3000/hello.html
http://localhost:3000/css/style.css
http://localhost:3000/images/kitten.jpg
```
