import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LeftSide() {
  

  return <div className='leftside'>
    <Link to="/allmails"> <p>Inbox</p></Link>
    <Link to="/newMail"> <p>New E-mail</p></Link>
  </div>;
}
