// Component //
export class Component {
  // 원하는 태그를 동적으로 처리하기 위해 매개변수로 태그명 받아옴
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload; // tagName의 기본값으로 div 할당
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    // ...
  }
}

// Router //
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }

  const routerView = document.querySelector("router-view");
  const [hash, querySting = ""] = location.hash.split("?");

  // a=123&b=456
  // ['a-=123', 'b=456']
  // { a:'123', b:'456' }
  const query = querySting.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});

  history.replaceState(query, "");

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes); // 최초 호출 코드
  };
}
