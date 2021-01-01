# What is Model View Controller (MVC)?
MVC is one possible pattern for organizing your code. It's a popular one.

- Model - Manages the data of an application
The model is the data. In this todo application, that'll be the actual todos, and the methods that will add, edit, or delete them.

- View - A visual representation of the model
The view is how the data is displayed. In this todo application, that will be the rendered HTML in the DOM and CSS.

- Controller - Links the user and the system
The controller connects the model and the view. It takes user input, such as clicking or typing, and handles callbacks for user interactions.

**The model never touches the view. The view never touches the model. The controller connects them.**

