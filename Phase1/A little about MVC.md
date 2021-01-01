Source : https://www.taniarascia.com/javascript-mvc-todo-app/

> Build a Simple MVC App From Scratch in JavaScript

# What is Model View Controller (MVC)?
MVC is one possible pattern for organizing your code. It's a popular one.

- Model - Manages the data of an application
The model is the data. In this todo application, that'll be the actual todos, and the methods that will add, edit, or delete them.

- View - A visual representation of the model
The view is how the data is displayed. In this todo application, that will be the rendered HTML in the DOM and CSS.

- Controller - Links the user and the system
The controller connects the model and the view. It takes user input, such as clicking or typing, and handles callbacks for user interactions.

**The model never touches the view. The view never touches the model. The controller connects them.**

# Getting Started
We're going to make this really nice and simple to understand what class pertains to what part of MVC. I'll make a Model class, View class, and Controller class, which takes in the model and view. The app will be an instance of the controller.

```js
class Model {
  constructor() {}
}

class View {
  constructor() {}
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}

const app = new Controller(new Model(), new View())
```
Very nice and abstract.

