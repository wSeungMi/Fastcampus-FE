import { Component } from "../core/heropy";
import TextField from "../components/TextField";
import Message from "../components/Message";

export default class Home extends Component {
  // constructor에 넘겨줄 내용이 없어서 생략!
  render() {
    this.el.innerHTML = `
      <h1>Home Page!</h1>
    `;
    this.el.append(new TextField().el, new Message().el);
  }
}
