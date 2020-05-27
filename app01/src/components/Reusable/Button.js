import React from 'react'

const Button=({onClick,name,className})=>
<button
className={className}
onClick={onClick}
>
{name}
</button>


export default Button
