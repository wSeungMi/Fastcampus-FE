import { Component } from "../../core/heropy";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieLIstMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      // movieStore.state.page,
      // movieStore.state.pageMax,
      const { page, pageMax } = movieStore.state;
      // if (pageMax > page) {
      //   this.el.classList.remove("hide");
      // } else {
      //   this.el.classList.add("hide");
      // }
      pageMax > page
        ? this.el.classList.remove("hide")
        : this.el.classList.add("hide");
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more";

    this.el.addEventListener("click", async () => {
      this.el.classList.add("hide");
      // 버튼 클릭시 API 통신하는 store 함수 활용
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
