// ES6 Classes

// prototype 방식
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// class 방식
class User {
  constructor(first, last) {
    // 함수 역할
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const drink = new User("Milk", "Coffee");
const bread = new User("Cookies", "Choco");

console.log(drink);
console.log(bread.getFullName());
