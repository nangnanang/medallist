import React from 'react'

//input 박스 컴포넌트
//props로 받아온 객체 배열의 객체 'data'의 value타입으로 input 박스의 타입을 결정한다. 
const MedalInput = ({data}) => {
    if(typeof(data.data)==='string') {
      return (
      <div>
        <label>{data.name}</label>
        <input type='text' value={data.data} onChange={data.func}/>
      </div>)
    } else if(typeof(data.data)==='number') {
      return (
      <div>
        <label>{data.name}</label>
        <input type='number' value={data.data} onChange={data.func}/>
      </div>)
    }
}
export default MedalInput