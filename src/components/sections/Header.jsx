import React from 'react'

const Header = ({company}) => {
  const {logo, nombre, slogan}=company
  return (
    <header className="py-3 text-center">
      <div className="container">
        <img className="my-3" src={logo} width="96" height="58"/>
        <h2 className="text-warning fs-2 m-0">{nombre}</h2>
        <h1 className="text-light fs-5 m-0">{slogan}</h1>
      </div>
    </header>
  )
}

export default Header