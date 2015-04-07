//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
    this.name = name;
    this.age = age;
}


//Now create three instances of Person with data you make up

var person1 = new Person('Michael', '28');
var person2 = new Person('Jordan', '29');
var person3 = new Person('Andy', '31');

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.saName = function () {
    alert(this.name);
};
