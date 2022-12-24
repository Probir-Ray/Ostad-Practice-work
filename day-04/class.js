/*
class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  work() {
    console.log("Hello world");
    console.log(this.name, " is ", this.age, " years old");
  }
}

const one = new Teacher("Krishna", 9);
one.work();

console.log(one.name);

*/

class Human {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  work(now) {
    console.log("Eating", now);
  }
}

class Teacher extends Human {
  constructor(name, city, country) {
    super(name, city);
    this.country = country;
  }
  workOne(now) {
    super.work(now);
    console.log("Going to school");
    console.log(this.country);
  }

  static timeOfClass() {
    console.log("45 minutes");
  }
}

const teacherOne = new Teacher("Kamal", "Dhaka", "Bangladesh");
console.log(teacherOne.city);
Teacher.timeOfClass();
teacherOne.workOne(2022);
