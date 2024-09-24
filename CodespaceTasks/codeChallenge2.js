
// Coding task 1. Clases and objects
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

// Coding task 2 Encapsulation ///////////////////////////////////////////

class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }


    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    
    hello() {
        return "Hello World!";
    }
}


const user = new User('John', 'Doe');

user.firstName = 'John';
user.lastName = 'Doe';


console.log(user.hello());  
console.log(`My name is ${user.firstName} ${user.lastName}`); 

//Coding task 3. Inheritance /////////////////////////////////////////////

class User {
    constructor() {
        this.username = '';
    }

   
    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
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

const admins = new Admin();
admins.setUsername('Balthazar');

console.log(admins.sayHello()); 

// ////////////////////////Coding task 4. Polymorphism  ///////////////////////////////////

class User {
    constructor() {
        this.numberOfArticles = 0;
    }

    // Setter method for number of articles
    setNumberOfArticles(numberOfArticles) {
        this.numberOfArticles = numberOfArticles;
    }

    
    getNumberOfArticles() {
        return this.numberOfArticles;
    }

    
    calcScores() {
        return 0;
    }
}


class Author extends User {
    
    calcScores() {
        return this.numberOfArticles * 10 + 20;
    }
}


class Editor extends User {
    
    calcScores() {
        return this.numberOfArticles * 6 + 15;
    }
}


const author = new Author();
author.setNumberOfArticles(8);
console.log(`Author's scores: ${author.calcScores()}`); 


const editor = new Editor();
editor.setNumberOfArticles(15);
console.log(`Editor's scores: ${editor.calcScores()}`);

// Coding task 5. Abstraction /////////////////////////////////////////////

class User {
    constructor() {
        if (this.constructor === User) {
            throw new Error("Cannot instantiate abstract class User");
        }
        this.username = '';
    }

    stateYourRole() {
        throw new Error("Abstract method 'stateYourRole' must be implemented");
    }

    
    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
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

let admin = new Admin();
admin.setUsername("Balthazar");
console.log(admin.getUsername());  
console.log(admin.stateYourRole());  

const viewer = new Viewer();
viewer.setUsername("Melchior");
console.log(viewer.getUsername());  
console.log(viewer.stateYourRole());

//   finish this task tomorrow  and pass it to Jorge .https://moodle.edinburghcollege.ac.uk/mod/quiz/attempt.php?attempt=296917&cmid=2718944
