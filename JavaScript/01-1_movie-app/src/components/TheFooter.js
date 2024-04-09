import { Component } from "../../core/heropy";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    const { github, repository } = aboutStore.state;
    this.el.innerHTML = `
      <div>
        <a href="${repository}">
        GitHub Repository
      </div>
      <div>
        <a href="${github}">
        ${new Date().getFullYear()}
        WOOSEUNGMI
        <a>
      </div>
    `;
  }
}
