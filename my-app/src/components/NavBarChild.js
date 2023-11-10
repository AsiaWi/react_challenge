import React from 'react'

function NavBarChild(props) {
  return (
    <div>
      <form>
      
      <label>Username</label>
           <input name="name" placeholder='Username' />
           <label>Password</label>
           <input name="name" placeholder='password' />
           <button onClick = {props.handleClick}>Submit</button>

      </form>
    </div>
  )
}

export default NavBarChild