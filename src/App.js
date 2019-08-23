import React from "react";

function Food({ fav }) {
  return <h1>Give me {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>HELLOOOOOOO!!!!</h1>
      <Food fav="podjook" />
      <Food fav="coffee" />
      <Food fav="jeon" />
    </div>
  );
}

export default App;
