import App from "./App";
import router from "./routes";

// app 요소 찾기
const app = document.querySelector("#app");
app?.append(new App().el);

router();
