# React + Vite

index.html에 연결된
main.jsx에
App 컴포넌트를 연결함

다시 App.jsx에
Header 컴포넌트, MedalInput 컴포넌트, Table 컴포넌트를 연결하고 전체적인 ui를 구성함

App.jsx
├─Header.jsx
├─<form>
│ ├─MedalInput.jsx <-input 데이터 유효성 검사
│ ├─<button>추가 <-로컬 스토리지에 데이터 변경 반영
│ └─<button>업데이트 <-로컬 스토리지에 데이터 변경 반영
└─Table.jsx
│ ├─Th.jsx
│ └─List.jsx <-정렬
│ │ └─<button>삭제 <-로컬 스토리지에 데이터 변경 반영

주요 기능 -추가 -업데이트 -삭제

서브 기능 -정렬 -input 데이터 유효성 검사 -로컬 스토리지에 이전 데이터 저장

Header 컴포넌트는 제목

MedalInput 컴포넌트는
필요한 것들을 모아 만든 객체 배열 dataArr를 map으로 돌려서
생성한 input 박스 컴포넌트

Table 컴포넌트는 입력한 데이터가 출력되는 '아웃풋' 컴포넌트로
Th.jsx와 List.jsx의 컴포넌트를 가지고 구성됨
두 컴포넌트 다 'map'으로 돌렸고,
금메달의 수로 아웃풋 데이터를 '정렬'하기 위해 List.jsx에는 map을 돌리기 전 'sort'를 적용했음

1. jsx 문법이란?
   jsx 문법이란 기존 js에 html을 더한 것으로
   js로 html요소를 구성하고 변경하기 쉽도록 만들어진 리액트 파일 형식이다.

2. 이번 애플리케이션의 상태를 관리하기(추가, 변경, 삭제) 위해 어떤 리액트 기능을 사용하였나?
   기본적으로 useState를 사용하여 데이터를 관리하였다.
   input 박스의 value와 onChange에 각각 데이터를 정의하고 저장하는 useState 구조분해 할당 요소들을 집어넣고(예-<input type='number' value={data.data} onChange={data.func}/>) useState 자체는 필요한 만큼 가장 높은 부모요소에 선언하여 input 데이터를 통해 값을 저장하고 변경할 수 있도록 하였다.
   단, 삭제 기능에는 input 값이 아닌 이미 저장된 데이터만을 필요로 하기
   때문에 useState만을 활용했다.

3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하였나?
   props의 구조분해할당으로 공유하였다.
   props는 특정 명령어가 아닌 위치로 결정되는 요소로 부모 컴포넌트로부터 자식 컴포넌트로 넘겨주는 정보이다. 때문에 자식 컴포넌트의 특정 위치에서 구조분해할당을 하면 부모요소로부터 특정 값만을 넘겨 받아 활용할 수 있다.

4. 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면?
   추가 기능 구현 시, setList를 해야했는데 이때 스프레드 오퍼레이터(...)를 사용하여 불변성을 유지하였다. 왜냐하면 setList로 저장되는 데이터는 불변성을 유지하면서 특정 조작으로만 변경이 되어야하는데, 불변성을 유지하지 못하면 예상치 못한 오류를 일으킬 수 있기 때문이다.

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해 보셨나요? 그렇다면 어떠한 이점이 있었나요?
   컴포넌트를 분리해보았다.
   컴포넌트를 분리해 보니, 가장 먼저 코드가 짧아져서 가시성이 높아진 것이 느껴졌다.
   또 이렇게 코드를 분리하면 각 기능 별로 코드를 살펴볼 수 있어서 개선이나 수정을 할 때 문제가 될 만한 곳이 어디인지 인지하고 쉽게 찾아낼 수 있었다.
