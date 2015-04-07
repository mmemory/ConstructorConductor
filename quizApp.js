//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriately

  //code here
function User(name, email, password, totalScore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
function Question(title, answersArray, rightAnswer, difficulty) {
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer = rightAnswer;
    this.difficult = difficulty;
}


//Create a users Array which is going to hold all of our users.

  //code here
var users = [];



//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
var user_1 = new User('Michael Memory', 'michael@gmail.com', 'pass', '100%');
var user_2 = new User('John Deere', 'john@gmail.com', 'changeme', '50%');
var user_3 = new User('Alan Sheppard', 'alan@gmail.com', 'goosebumps', '70%');

users.push(user_1, user_2, user_3);


//Create a questions Array which is going to hold all of our questions

  //code here
var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
var question_1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', ['T', 'F'], 'T', '2/4');
var question_2 = new Question('T/F: JavaScript is just a scripting version of Java', ['T', 'F'], 'F', '1/4');
var question_3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ['T', 'F'], 'F', '2/4');


//Now push all of your instances of Question into the questions Array

  //code here
questions.push(question_1, question_2, question_3);


//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
function displayContents(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (key in arr[i]) {
            console.log(key, ':', arr[0][key]);
        }
    }
}

console.log('My questions array is ...');
displayContents(questions);
console.log('My users array is ...');
displayContents(users);
