
class User {
  
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


  hello() {
    console.log(`hello, ${this.firstName} ${this.lastName}`);
  }
}

const user1 = new User('John', 'Doe');

console.log(user1.firstName, user1.lastName);


user1.hello();


const user2 = new User('Jane', 'Doe');


user2.hello();

// -----------------  2 task: --------------------------------------------------

class User {

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }


  set firstName(name) {
    this._firstName = name;
  }


  get lastName() {
    return this._lastName;
  }


  set lastName(name) {
    this._lastName = name;
  }


  hello() {
    return "Hello World!";
  }
}


const user = new User();

user.firstName = 'John';
user.lastName = 'Doe';

console.log(user.hello());

console.log(`My name is ${user.firstName} ${user.lastName}`);

// -----------------  3 task: --------------------------------------------------

// In this task your are required to create an Admin class, which is a  child class of the User  class:

// 1. Create a  User class:
// § Add to the class a property with the name of username.

// § Create a setter method that can set the value of the username.

// 2. Create the Admin class that inherits the User class:
// § Add a method by the name of expressYourRole(), and make it return the string: "Admin".

// § Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.

// 3. Create an object admin out of the class Admin:
// § Set its name to "Balthazar" and say hello to the user.

class User {
  constructor(username) {
    this._username = username;
  }


  set username(name) {
    this._username = name;
  }


  get username() {
    return this._username;
  }
}

class Admin extends User {

  expressYourRole() {
    return "Admin";
  }

  
  sayHello() {
    return `Hello admin, ${this.username}`;
  }
}

const admin = new Admin();

admin.username = "Balthazar";

console.log(admin.expressYourRole()); 
console.log(admin.sayHello());

// -----------------  4 task: --------------------------------------------------

// In order to implement the polymorphism principle, you will create a User class that commits the classes that inherit from it to calculate the number of scores that a user has depending on the number of articles that he has authored or edited.

// On the basis of the User class, we are going to create the Author and Editor classes, and both will calculate the number of scores with the method calcScores(), although the calculated value will differ between the two classes.

// This is the skeleton for the User class:

// Example:

// class User {
//   constructor() {
//     this.numberOfArticles = 0;
//   }
// }
// 1. Add to the User class the methods to set and get the number of articles:

// setNumberOfArticles(int numberOfArticles)
// getNumberOfArticles() 


// 2. Add to the User class a third method: 

// calcScores(), that performs the scores calculations separately for each class.


// 3. Create an Author class that inherits from the User class. 

// In the Author create a calcScores() method that returns the number of scores from the following calculation: 

// numberOfArticles * 10 + 20


// 4. Create an Editor class that inherits from the User class. 

// In the Editor create a calcScores() method that returns the number of scores from the following calculation: 

// numberOfArticles * 6 + 15


// 5. Create an object, author, from the Author class, set the number of articles to 8, and print the scores that the author gained.



// 6. Create another object, editor, from the Editor class, set the number of articles to 15, and print the scores that the editor gained.

class User {
  constructor() {
    this._numberOfArticles = 0;
  }

  setNumberOfArticles(numberOfArticles) {
    this._numberOfArticles = numberOfArticles;
  }

  getNumberOfArticles() {
    return this._numberOfArticles;
  }

  calcScores() {
    return 0; 
  }
}

class Author extends User {

  calcScores() {
    return this.getNumberOfArticles() * 10 + 20;
  }
}


class Editor extends User {
 
  calcScores() {
    return this.getNumberOfArticles() * 6 + 15;
  }
}


const author = new Author();
author.setNumberOfArticles(8); 
console.log(`Author's scores: ${author.calcScores()}`); 


const editor = new Editor();
editor.setNumberOfArticles(15); 
console.log(`Editor's scores: ${editor.calcScores()}`); 

// -----------------  5 task: --------------------------------------------------

// In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.

// 1. Create an abstract class with the name of User: 

// Add to the class, a property with the name of username. 
// Add to the class, an abstract method with the name of stateYourRole().
// Add to the class, the setter and getter methods to set and get the username.


// 2. Create an Admin class that inherits the User abstract class: 

// Add to the class a method stateYourRole() and let it return the string "admin".


// 3. Create another class, Viewer that inherits the User abstract class: 

// Add to the class a method stateYourRole() and let it return the string "viewer".


// 4. Create an object, admin, from the Admin class, set the username to "Balthazar", and make it return the string "admin".



// 5. Create an object, viewer, from the Viewer class, set the username to "Melchior", and make it return the string "viewer".

class User {
  constructor(username) {
    this._username = username;
    if (this.constructor === User) {
      throw new Error("Cannot instantiate abstract class User directly.");
    }
  }

  
  get username() {
    return this._username;
  }

  
  set username(name) {
    this._username = name;
  }

  
  stateYourRole() {
    throw new Error("Method 'stateYourRole()' must be implemented in subclass.");
  }
}


class Admin extends User {
  
  stateYourRole() {
    return "admin";
  }
}


class Viewer extends User {
  
  stateYourRole() {
    return "viewer";
  }
}


const admin = new Admin();
admin.username = "Balthazar";
console.log(admin.username); 
console.log(admin.stateYourRole()); 


const viewer = new Viewer();
viewer.username = "Melchior";
console.log(viewer.username); 
console.log(viewer.stateYourRole()); 