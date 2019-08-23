# Movie App.

## ReactJS Fundamental course Project with Nomad academy - React로 웹서비스 만들기

### 1 Setup

- react 작동방식
  app.js에서 app class 안에 작성하는 컴포넌트가 index.html 안 root에 작성된다.
  react는 react와 js로 작성하는 element들을 html에 넣어준다.
  react application을 div id = "root" div안에 넣는다.
  index.js에서 import 한 app 을 reactDOM 객체를 이용해 App이라는 class를 index.js의 root라는 id를 가진 element에 render한다.

- react는 소스코드에 처음부터 html을 넣지 않도 html을 제어할 수 있다.
  따라서 application을 load할 때 빈 html(여기서는 index.html)을 load하고 react가 app.js로 만든 컴포넌트등를 html로 만들어 넣는다.

- VirtualDOM : 소스코드에는 존재하지 않지만 react가 만들어 낸다.

### 2 JSX & Props

#### 2.1 Reusable Components with JSX + Props

- JSX : JS 문법의 확장판. 리액트에서 html tag 등이 포함된 element들을 제공하며 Component를 통해 html+js의 정보들을 처리한다.
- react에서는 component를 재사용할 수 있다.

- Props : component 에 data를 보낼 때 html과 유사한 방법으로 작성한다. (JSX의 문법)
  `<Food name = "podjook">`
  : Food component에 name이라는 prop에 podjook이라는 value를 부여한다.

- component : html을 반환하는 함수!!
  `<App />`

- prop들은 Component의 인자로 하나의 객체로 묶여 전달된다.
  parent(App()) 가 children(Food)에게 data를 보내기 위해 props를 사용한다
  구조분해할당으로 props와 같은 이름을 바로 인자들로 할당하여 접근할 수 있다.
  `{fav}` <- prop.fav
  `{fav}` 와 같이 templete literal처럼 사용할 수 있다.

- react application은 한번에 하나의 component만 rendering 할 수 있다. 따라서 모든 component들은 app component안에 넣어야한다.

#### 2.2, 2,3 map Recap

- map을 이용하여 동적으로 데이터를 처리할 수 있다.
  FoodILike와 같은 JSON data 등을 API 등을 통해 가져와
  새로운 List로 전달하여 동적으로 component들에 데이터를 전달한다.

- create-react-app 등은 Component 를 작성할 때 권장되는 사항들을 가르켜준다.
  `<img src={picture} alt={name} />`
  에서 시각장애인분들을 위한 속성인 alt 등을 추가하는 것을 권장한다.

- react는 동적으로 component들을 생성할시 각 component 들을 구분할 수 있는 고윳값 key를 필요로하며 이를 가지지 않을 시 경고문을 console에 띄운다.

```javascript
<div>
  {foodILike.map(dish => {
    return <Food key={dish.id} name={dish.name} picture={dish.image} />;
  })}
</div>
```

#### 2.4 Protection with PropTypes

- prop-types : 부모로부터 전달받은 prop 확인하는 방법
  전달받은 props가 내가 원하는 props인지를 확인해준다.
  `npm i prop-types`

- prop-types 로 type뿐만 아니라 어떤 prop들이 빠졌는지 알 수 있다. prop-types doc 참고
  [https://reactjs.org/docs/typechecking-with-proptypes.html]

- .isRequired
  propTypes.~~.isRequired는 그것이 있어야 하는 것을 의미하며 `Proptypes.number` 과 같이 쓸경우 type이 number인 것만 확인하고, 제공되지 않는 data(즉 undefined일 경우) warning을 반환한다.

- propTypes 는 'prop-types' module를 사용하기 위해 예약된 method명이다. 다른 method 명(ex sexyTypes)들은 사용할 수 없다.

### 3 State

#### 3.0 class Components and State

- state
  보통 가변적이고 하드코딩되지 않는 Dynamic Data(동적데이터)와 함께 작업할 때 만들어진다.

- function component

```javascript
function App() {
  return (
  );
}
```

- dynamic data를 다룰 떄에는 props가 유용하지 않다.
- state를 사용한다.

- react automatically execute render method(function) of its class component
- class component vs funcion component
  class components have state which is object having data of itself.
  the data in state object can change.

- react provides component with its own onClick prop.
  `<button onClick={this.add}>Add</button>`
  if onClick prop has been assigned `this.add()`. it is called immediately.

#### 3.1 All yoyu need to know about State

- state should not be **MUTATED** directly.

- when setState() is called, REACT re-render with new state.

- Whenever the state need to be changed, we should use setState().
  if state changed directly, react doesn't call render function again.
  setState() calls render func which refresh its view after changing state.

- the way for state not being dependent of external state

```javascript
add = () => {
  this.setState(current => ({ count: current.count + 1 }));
};
```
