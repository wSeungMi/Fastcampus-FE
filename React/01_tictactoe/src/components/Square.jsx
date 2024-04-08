import React from "react";
import "./Square.css";

// 클래스형 컴포넌트
export default class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
