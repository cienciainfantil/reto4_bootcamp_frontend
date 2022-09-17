import React from 'react'

const Footer = ({creditos}) => {
  const {year, autor}=creditos
  return (
    <footer className=" mt-auto py-3">
        <div className="container">
        <h2 className="text-light text-center fs-6 m-0">
            Copyright &copy; {year} | {autor}</h2>
        </div>
        
    </footer>
  )
}

export default Footer