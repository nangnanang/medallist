import React from 'react'

const MedalInput = ({data}) => {
    if(data.name==='국가명') {
      return (
      <div>
        <label>{data.name}</label>
        <input type='text' value={data.data} onChange={data.func} placeholder='국가명을 입력하시오'/>
      </div>)
    } else {
      return (
      <div>
        <label>{data.name}</label>
        <input type='number' value={data.data} onChange={data.func}/>
      </div>)
    }
    
  }
export default MedalInput