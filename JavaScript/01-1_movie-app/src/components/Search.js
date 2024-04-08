import { Component } from "../../core/heropy";
import moveStore, { searchMovies } from "../store/movie";

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
    inputEl.addEventListener("input", () => {
      moveStore.state.searchText = inputEl.value;
    });
    // input enter
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && moveStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    // button event
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      if (moveStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
