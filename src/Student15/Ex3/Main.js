import React from 'react'
import './Main.css'

export const Main = () => {
  return (
    <div>
        Hello I'm student id: 1.
    </div>
  )
}
import React from 'react'
import Account from './Account'
import './Main.css'

export const Main = () => {

  
  const handleClick = ({direction}) =>{
    console.log(direction)
  }

  return (
    <div>
        <Account onClicked = {handleClick}/>
       
    </div>
  )
}

export default Main()