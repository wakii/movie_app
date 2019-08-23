import React from "react";

function Food(wow) {
  console.log(wow);
  return <h1>hoihoi</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>HELLOOOOOOO!!!!</h1>
      <Food fav="podjook" something />
    </div>
  );
}
//Food component에 podjook라는 을 부여한다.
//react는 prop들을 Component의 인자로 접근할 수 있다.
//prop들은 Component의 인자로 하나의 객체로 묶여 전달된다.

export default App;
