import { Component } from "../../core/heropy";
import aboutStore from "../store/about";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    const { photo } = aboutStore.state;
    this.el.innerHTML = `
      <a href="#/" class="logo">
        <span>OMDBAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return `
              <li>
                <a class="${isActive ? "active" : ""}"
                href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="${photo}" alt="User">
      </a>
    `;
  }
}