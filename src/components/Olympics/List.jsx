import React from 'react'


const List=({ele, list, setList})=>{
  //삭제 함수(Delete)
  const deleteList = () => {
    const deleteData = list.filter((li)=>li.id!==ele.id)
    
    setList(deleteData)
    console.log(deleteData)
    localStorage.setItem('medal', JSON.stringify(deleteData))
  }
  return (<tr>
      <td>{ele.country}</td>
      <td>{ele.gold}</td>
      <td>{ele.silver}</td>
      <td>{ele.bronze}</td>
      <td>{ele.sum}</td>
      <td>
        <button onClick={deleteList}>삭제</button>
      </td>
    </tr>)
}


export default List