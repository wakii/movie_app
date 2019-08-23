# Movie App.

ReactJS Fundamental course Project

with Nomad academy - React로 웹서비스 만들기

app.js에서 app class 안에 작성하는 컴포넌트가 index.html 안 root에 작성된다.

react는 react와 js로 작성하는 element들을 html에 넣어준다.

react application을 div id = "root" div안에 넣는다.

index.js에서 import 한 app 을 reactDOM 객체를 이용해 App이라는 class를 index.js의 root라는 id를 가진 element에 render한다.

react는 소스코드에 처음부터 html을 넣지 않도 html을 제어할 수 있다.
따라서 application을 load할 때 빈 html(여기서는 index.html)을 load하고 react가 app.js로 만든 컴포넌트등를 html로 만들어 넣는다.

VirtualDOM
: 소스코드에는 존재하지 않지만 react가 만들어 낸다.

JSX : component에 정보를 보낼 수 있다. react에서는 ㅊomponent를 재사용할 수 있다.

component 에 정보를 보낼 때 : name = "podjook" 처럼 html과 같은 방법으로 정보를 보낸다.
`<Food name = "podjook">`
Food component에 name이라는 prop에 podjook이라는 value를 부여한다.

`<App />` : component
component : html을 반환하는 함수!!

react application은 한번에 하나의 component만 rendering 할 수 있다.
따라서 모든 component들은 app component안에 넣어야한다.

Food component에 podjook라는 을 부여한다.
react는 prop들을 Component의 인자로 접근할 수 있다.
prop들은 Component의 인자로 하나의 객체로 묶여 전달된다.
parent(App()) 가 children(Food)에게 data를 보내기 위해 props를 사용한다.
구조분해할당으로 props와 같은 이름을 바로 인자들로 할당하여 접근할 수 있다.
`{fav}` <- prop.fav
`{fav}` 와 같이 templete literal처럼 사용할 수 있다.
