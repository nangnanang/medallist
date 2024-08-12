# React + Vite

index.html에 연결된
main.jsx에
App.jsx를 연결함

다시 App.jsx에
Header 컴포넌트, MedalInput 컴포넌트, Table 컴포넌트를 연결하고 전체적인 ui를 구성함

Header 컴포넌트는 제목

MedalInput 컴포넌트는
필요한 것들을 모아 만든 객체 배열 dataArr를 map으로 돌려서
생성한 input 데이터 조각

Table 컴포넌트는 입력한 데이터가 출력되는 아웃풋 조각으로
Th.jsx와 List.jsx의 컴포넌트를 가지고 구성됨
두 컴포넌트 다 map으로 돌렸고,
금메달의 수로 아웃풋 데이터를 정렬하기 위해 List.jsx에는 sort를 적용했음
