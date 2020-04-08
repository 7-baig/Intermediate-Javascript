JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.
***Constructor***
In the last exercise, you created a class called Dog, and used it to produce a Dog object.
Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
Dog is the name of our class. By convention, we capitalize and CamelCase class names.
JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
This constructor() method accepts one argument, name.
Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.
***Instance***
Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values
We use the new keyword to generate a new instance of the class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
***Inheritance*** 
With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.
*The extends keyword makes the methods of the parent class available inside the child class.*
*The super keyword calls the constructor of the parent class.*
One benefit is that when you need to change a method or property that multiple classes share, you can change the parent class, instead of each subclass.
***Static Methods***
Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.
Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now() method is static, so you can call it directly from the class, but not from an instance of the class.
***REVIEW***
1  Classes are templates for objects.
2  Javascript calls a constructor method when we create a new instance of a class.
3  Inheritance is when we create a parent class with properties and methods that we can 
   extend to child classes.
4  We use the extends keyword to create a subclass.
5  The super keyword calls the constructor() of a parent class.
6  Static methods are called on the class, but not on instances of the class.
