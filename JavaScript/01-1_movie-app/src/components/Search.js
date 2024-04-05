import { Component } from "../../core/heropy";
import movieStroe, { searchMovies } from "../store/movie";

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
      movieStroe.state.searchText = inputEl.value;
    });
    // input enter
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStroe.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    // button event
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      if (movieStroe.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
