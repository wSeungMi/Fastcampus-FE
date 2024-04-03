// Component //
export class Component {
  // 원하는 태그를 동적으로 처리하기 위해 매개변수로 태그명 받아옴
  constructor(payload = {}) {
    const { tagName = "div", state = {} } = payload; // tagName의 기본값으로 div 할당
    this.el = document.createElement(tagName);
    this.state = state;
    this.render();
  }
  render() {
    // ...
  }
}
