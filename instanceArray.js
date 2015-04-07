/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) 'Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'
    2) 'Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var user3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

users.push(user1, user2, user3);

//console.log('Tyler\'s information is', 'Name:', users[0].name, 'Email:', users[0].email, 'Password:', users[0].pw);
//Console.log all of Tylers information


//console.log('Lenny\'s information is', 'Name:', users[1].name, 'Email:', users[1].email, 'Password:', users[1].pw);
//Now console.log all of Lennys information



//Now create another instance of User using your own information and then add that to your users array.

var me = new User('Michael', 'michael@gmail.com', 'pass');
users.push(me);



var userLoop = function (arr, cb) {
    var nameArray = [];

    for (var i = 0; i < arr.length; i++) {
        nameArray.push(arr[i].name);
    }
    return cb(nameArray);
};

userLoop(users, function (user) {
    var names = user.join(', ');
    console.log('All my users names are', names);
});


//Now loop through your users Array and console.log every users name. 


