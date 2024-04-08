import { Store } from "../../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
});

export default store;

// data fetch
export const searchMovies = async (page) => {
  store.state.page = page;
  // 만약 첫 페이지를 받아온다면 페이지 & 화면 초기화
  if (page === 1) {
    store.state.movies = [];
  }
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
  );
  const { Search, totalResults } = await res.json();
  // 기존에 불러온 페이지 번호가 있을 수 있기에 불변성을 지켜주자!
  store.state.movies = [...store.state.movies, ...Search];
  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
};
