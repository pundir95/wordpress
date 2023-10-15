import React from 'react'

interface btnProps{
    type?:"submit",
    text:string,
    className:string,
    onClick:()=>void
}

const Button = ({type,text,className,onClick}:btnProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  )
}

export default Button