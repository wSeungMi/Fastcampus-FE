import { Component } from "./core/heropy";
import TheHeader from "./components/TheHeader";

// 상속
export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view");
    this.el.append(new TheHeader().el, routerView);
  }
}
