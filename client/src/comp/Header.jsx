import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const logout = async () => {
    const res = await fetch('http://localhost:4001/users/logout', {
      method: "delete",
      credentials: "include",
    })

    const data = await res.json()

    if (data.err) {
      alert(data.err)
    } else {
      localStorage.removeItem("username")
      navigate('/')
    }
    console.log(data);
  }
  let user = ""
  if (localStorage.username) {
    user = JSON.parse(localStorage.username)
  }

  return <div className='header'>
    {
      localStorage.username ? <button onClick={logout}>logout</button> : <Link to="/"> <h4>Login</h4></Link>
    }


  </div>;
}
