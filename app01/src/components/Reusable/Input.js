import React from 'react'

const Input = ({onChange,placeholder,type})=>
<input 
placeholder={placeholder}
type={type}
onChange={(e)=>onChange(e.target.value)}/>

export default Input
