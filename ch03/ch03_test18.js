function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var person1 = new Person('소녀시대', 20);
var person2 = new Person('걸스데이', 20);

console.log(person1.name);
person1.walk(10);
