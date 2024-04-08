import { Component } from "../../core/heropy";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = `
      <div class="movies"></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    // 전달해줘야하는 데이터 형식은 객체
    moviesEl.append(
      ...movieStore.state.movies.map(
        (movie) =>
          new MovieItem({
            movie,
          }).el
      )
    );
  }
}
