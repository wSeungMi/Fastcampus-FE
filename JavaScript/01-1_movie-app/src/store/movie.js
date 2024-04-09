import { Store } from "../../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
  message: "Search for the movie title!",
});

export default store;

// data fetch
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  // 만약 첫 페이지를 받아온다면 페이지 & 화면 초기화
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }

  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
      store.state.pageMax = 1;
    }
  } catch (error) {
    console.log("searchMovies error:", error);
  } finally {
    store.state.loading = false;
  }
};
