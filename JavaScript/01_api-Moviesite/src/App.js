export default class App {
  // 클래스를 생성하면 하나의 객체 데이터가 완성됨
  // 만들어진 객체 데이터는 this 키워드를 통해 el 속성으로 메모리 상에만 만들어져 있는 div 요소를 하나 가짐
  constructor() {
    // 생성될 때
    this.el = document.createElement("div"); // 자기 자신의 el 변수에 메모리상에만 추가하는 div 생성
    this.el.textContent = "Hello world!"; // div요소에 textContent로 문자 할당
  }
}
