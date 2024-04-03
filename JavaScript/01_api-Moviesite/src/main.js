import App from "./App";
import router from "./routes";

const root = document.querySelector("#app");
// 컴포넌트 생성
root.append(new App().el); // 생성자 함수로 App 호출, el(element)

router();
