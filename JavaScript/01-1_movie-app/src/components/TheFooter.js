import { Component } from "../../core/heropy";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = `
      <div>
        <a href="https://github.com/wSeungMi/Fastcampus-FE/tree/main/JavaScript/01_api-Moviesite">
        GitHub Repository
      </div>
      <div>
        <a href="https://github.com/wSeungMi/">
        ${new Date().getFullYear()}
        WOOSEUNGMI
        <a>
      </div>
    `;
  }
}
