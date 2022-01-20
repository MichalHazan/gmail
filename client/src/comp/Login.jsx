import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export default function Login() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [msg, setmsg] = useState("")

  const navigate = useNavigate()

  const login = async () => {
    const res = await fetch('http://localhost:4001/users/login', {
      method: "post",
      headers: { 'content-type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await res.json()
    console.log(data);
    if (data.err) {
      setmsg(data.err)
    } else {
      localStorage.username = JSON.stringify(data.user.username)
      navigate('/allmails')
      setmsg(data.msg)
    }

  }

  const register = async () => {
    const res = await fetch('http://localhost:4001/users/register', {
        method: "post",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            username,
            password
        }),
        credentials: "include",
    })

    const data = await res.json()

    if (data.err) {
        setmsg(data.err)
    } else {
        navigate('/')
        setmsg(data.msg);
    }
}
  return <div className='login'>
    <label htmlFor="username">User Name</label>
    <input type="text" name='username' onChange={(e) => setusername(e.target.value)} />
    <label htmlFor="password">Password</label>
    <input type="password" name='password' onChange={(e) => setpassword(e.target.value)} />
    <button onClick={login}>Login</button>
    <button onClick={register}>Register</button>
    <p>{msg}</p>

  </div>;
}
