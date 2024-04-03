import { Component } from "./core/heropy";

// 상속
export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText: "",
      },
    });
  }
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input />
      <button type="button">Click!</button>
    `;

    console.log(this.el); // <div class="search"></div>
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      this.state.inputText = inputEl.value;
    });

    const buttonEl = this.el.querySelector("button");
    buttonEl.addEventListener("click", () => {
      console.log(this.state.inputText);
    });
  }
}
