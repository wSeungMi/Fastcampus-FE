// 배열 리터럴!
// const snack = ["통크", "빼빼로", "꽃게랑", "스윙칩"];

// 생성자 함수
// length, includes .. => prototype property, prototype method
// const snack = new Array("통크", "빼빼로", "꽃게랑", "스윙칩");

// console.log(snack);
// console.log(snack.length);
// console.log(snack.includes("통크"));
// console.log(snack.includes("감자칩"));

// heropy 메서드 등록
// Array.prototype.icecream = function () {
//   console.log(this);
// };

// snack.icecream();

// const arr = [];
// arr.icecream();

const icecream = {
  firstName: "Corn",
  lastName: "Bravo",
  // getFullName: function () {
  // :과 function 키워드 생략 가능
  // 일반 함수에서의 this => 함수가 호출되는 곳에서 정의됨
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// const drink = {
//   firstName: "Cola",
//   lastName: "Coke",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// 같은 구조의 코드 중복을 제거해보자.
const drink = {
  firstName: "Cola",
  lastName: "Coke",
};

console.log(icecream.getFullName());
console.log(icecream.getFullName.call(drink)); // call 메서드를 통해 빌려서 사용

// call 메서드 방법 개선하기 -> 메서드를 효율적으로 사용하는 방법!
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const icecreams = new User("Corn", "World"); // 객체 데이터 생성
const drinks = new User("Milk", "Coffee");

console.log(icecreams);
console.log(drinks);
console.log(icecreams.getFullName());
console.log(drinks.getFullName());
