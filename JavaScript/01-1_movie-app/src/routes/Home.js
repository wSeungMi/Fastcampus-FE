import { Component } from "../../core/heropy";

export default class Home extends Component {
  render() {
    this.el.innerHTML = `
      <h1>Home page</h1>
    `;
  }
}
