//Module wrapper function - it's wraps around the code but i don't see it
// (function (exports, require, module, __filename, __dirname) {});

//console.log(__filename, __dirname);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("name  " + this.name + " & age " + this.age);
  }
}

module.exports = Person;
