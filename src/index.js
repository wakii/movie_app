import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("notRoot"));

//  <App /> : component
//  component : html을 반환하는 함수!!

// react application은 한번에 하나의 component만 rendering 할 수 있다.
// 따라서 모든 component들은 app component안에 넣어야한다.