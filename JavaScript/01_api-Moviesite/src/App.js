import { Component } from "./core/heropy";
import FruitItem from "./components/FruitItem";

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
      <ul></ul>
    `;
    const ulEl = this.el.querySelector("ul");
    ulEl.append(
      ...this.state.fruites
        // .filter((fruit) => fruit.price < 3000)
        .map(
          (fruit) =>
            new FruitItem({
              props: {
                name: fruit.name,
                price: fruit.price,
              },
            }).el
        )
    );
  }
}
