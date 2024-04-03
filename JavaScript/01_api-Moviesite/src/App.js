import { Component } from "./core/heropy";

// 상속
export default class App extends Component {
  constructor() {
    super({
      state: {
        fruites: [
          {
            name: "Apple",
            price: 1000,
          },
          {
            name: "Banana",
            price: 2000,
          },
          {
            name: "Cherry",
            price: 3000,
          },
        ],
      },
    });
  }
  render() {
    this.el.innerHTML = `
      <h1>Fruits</h1>
      <ul>
        ${this.state.fruites
          .filter((fruit) => fruit.price < 3000)
          .map((fruit) => `<li>${fruit.name}</li>`)
          .join("")}
      </ul>
    `;
  }
}
