import React, { useState } from 'react'
import Header from './Header'
import MedalInput from './MedalInput'
import Table from './Table'

const Olympics = () => {
  // state 부분
  const [list, setList] = useState([])
  const [country, setCountry] = useState('')
  const [gold, setGold] = useState(0)
  const [silver, setSilver] = useState(0)
  const [bronze, setBronze] = useState(0)

  //input 값 저장 함수들
  const addCountry = (event)=>{
    setCountry(event.target.value)
  }
  const addGold = (event)=>{
    setGold(Number(event.target.value))
  }
  const addSilver = (event)=>{
    setSilver(Number(event.target.value))
  }
  const addBronze = (event)=>{
    setBronze(Number(event.target.value))
  }

  //input박스 생성에 필요한 배열
  const inputBoxArr = [{name:'국가명', data:country, func:addCountry}, 
    {name:'금메달', data:gold, func:addGold}, 
    {name:'은메달', data:silver, func:addSilver}, 
    {name:'동메달', data:bronze, func:addBronze}];

  //input박스 초기화 함수
  const inputReset = () => {
    setCountry('')
    setGold(0)
    setSilver(0)
    setBronze(0)
  }
  
  // 추가(Create) 함수
  const addList = ()=> {
    const newList = {
      id:new Date().getTime(),
      country:country,
      gold:gold,
      silver:silver,
      bronze:bronze,
      sum:Number(gold+silver+bronze),
    }

    const countryData = list.map((li)=>li.country)
    
    if(countryData.includes(country)) {
      alert('국가명이 중복되었습니다')
    } else if((!country)||(country.trim()==='')) {
      alert('국가명을 입력하시오')
      inputReset()
    } else {
      setList([...list,newList])
      // localStorage.setItem('medal', JSON.stringify(list))
      inputReset()
    }
  }

  //업데이트(Update) 함수
  const updateList = () => {
    const updateDataIndex = list.findIndex((li)=>(country===li.country));
    const updateData = {
      id:new Date().getTime(),
      country:country,
      gold:gold,
      silver:silver,
      bronze:bronze,
      sum:Number(gold+silver+bronze),
    }
    const countryData = list.map((li)=>li.country)
    if(countryData.includes(country)) {
      list.splice(updateDataIndex,1,updateData)
      setList([...list])
      // localStorage.setItem('medal', JSON.stringify(list))
      inputReset()
    } else if(!country) {
      alert('국가명을 입력하시오')
    } else {
      alert('존재하지 않는 국가명입니다')
    }
    
  }

  return (
    <div className='container'>
      <Header/>
      <form style={{display:'flex', flexDirection:'row'}}>
        {inputBoxArr.map((data)=>{
          return (
            <MedalInput key={data.name} data={data}/>
          )
        })}
        <div style={{display:"flex",alignItems:"end"}}>
          <button type='button' onClick={addList}>추가</button>
          <button type='button' onClick={updateList}>업데이트</button>
        </div>
      </form>
      <Table list={list} setList={setList} />
      
    </div>
  )
}

export default Olympics





