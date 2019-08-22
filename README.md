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
