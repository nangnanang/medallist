import React from 'react'

const Header = () => {
  const css = {
    width:'100%',
    height:'100px',
    backgroundColor:'brown',
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
  }
  return (
    <h1 style={css}>2024 파리 올림픽</h1>
  )
}

export default Header