import { Component } from "../../core/heropy";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
      <input type="text" placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">
        Search!
      </button>
    `;

    // input event
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {});
    // input enter
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
      }
    });

    // button event
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {});
  }
}
