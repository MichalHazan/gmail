import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function NewMail() {

  const [title, settitle] = useState("")
  const [to, setto] = useState("")
  const [text, settext] = useState("")
  const [msg, setmsg] = useState("")

  const navigate = useNavigate()
  let user = localStorage.username ? JSON.parse(localStorage.username)  : "unknown"
  console.log(user);

  const send = async () => {
    const res = await fetch(`http://localhost:4001/mails/${user}`, {
      method: "post",
      headers: { 'content-type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({
        title,
        to,
        text
      }),
    })

    const data = await res.json()
    console.log(data);
    if (data.err) {
      setmsg(data.err)
    } else {
      setmsg(data.msg)
    }

  }

  return (
    localStorage.username ?<div className='newMail'>
    <h1>new mail</h1>
    <label htmlFor="title">Title</label>
    <input type="text" name='title' onChange={(e) => settitle(e.target.value)} />
    <label htmlFor="to">TO</label>
    <input type="to" placeholder='name@gmail.com' name='to' onChange={(e) => setto(e.target.value)} />
    <label htmlFor="text">Text</label>
    <textarea name="text" onChange={(e) => settext(e.target.value)} cols="30" rows="10"></textarea>
    <button onClick={send}>send</button>
    <p>{msg}</p>
  </div> : <Link to="/"> <h4>Login</h4></Link>
  )
}
