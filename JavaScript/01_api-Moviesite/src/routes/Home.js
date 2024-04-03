import { Component } from "../core/heropy";

export default class Home extends Component {
  // constructor에 넘겨줄 내용이 없어서 생략!
  render() {
    this.el.innerHTML = `
      <h1>Home Page!</h1>
    `;
  }
}
