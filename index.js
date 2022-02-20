// const Person = require("./person");
// import Person from "./person";
// const person1 = new Person("Ahmed", 30);

// person1.greeting();

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log(`Called Listener`, data));

logger.log("Hello World");

//calculateBirthday();
function calculateBirthday() {
  console.log(`Birthday is ${new Date().getFullYear() - 1992} years old`);
}

// function to get current date
function getCurrentDate() {
  return new Date();
}
