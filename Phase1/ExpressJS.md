# What is Express.js?
> Express is a light-weight web application framework to help organize your web application into an MVC architecture on the server side.

# What to build with Express?
- Real time chat
- Single page application
- Real time collaboration tools
- Streaming apps
- Microservices architecture

# Installing Express.js
Express gets installed via the Node Package Manager. This can be done by executing the following line in the command line.
```
npm init -y
npm install express
```

# Buat basic app.js
```
const express = require('express')
const app = express()
const port = 3000 // biasanya port developer 3000

app.get('/', function(request, response) { // handle request 'localhost:3000/'
    response.send('Hello World')
}) // get -> method yg dilakukan o/ si browser thd aplikasi kita.

app.get('/about', function(request, response) { // handle request 'localhost:3000/about'
    response.send('This is about page')
})

app.get('/profile', function(req, res) {
    res.send('This is profile page')
})

app.listen(port, function() {
  console.log('this app running on port :', port)
})
```

# Template Engine - EJS
-> agar tampilan lebih bagus, gacuma bentuk `p` html aja.

https://expressjs.com/en/guide/using-template-engines.html

https://ejs.co/




# Routing
- Routing refers to how an application's expoints(URls) respond to client requests.
- In other words, the application "**listens**" for requests that match the specified routes(s) and method(s), and when it detects a match, it calls the specified callback function.

Basic routing:
```js
const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(3000, function() {
  res.send('Server listening on port 3000')
})
```

# Route Method
A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
