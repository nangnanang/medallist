import React from 'react'
import List from './List'
import Th from './Th'

//메달 리스트 출력(Read) + 정렬(Sort) 부분
const Table = ({ list, setList }) => {
  const nameArr = ['국가명', '금메달', '은메달', '동메달','기능']
  return (
  <div className='tableDiv'>
    <table>
      <thead>
        <tr>
          {nameArr.map((name)=>{
            return (<Th key={name} name={name} />)
          })}
        </tr>
      </thead>
      <tbody>
        {list.sort((a,b)=>(b.gold)-(a.gold)).map((ele)=>{
          return (<List key={ele.id} ele={ele} list={list} setList={setList}/>)
        })}
      </tbody>
    </table>
  </div>)
}

export default Table