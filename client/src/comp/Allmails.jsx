import React, { useEffect, useState } from 'react'
import Item from './Item';

export default function Allmails({ }) {
  const [msg, setmsg] = useState("")
  const [mails, setmails] = useState([])
  let user = localStorage.username ? JSON.parse(localStorage.username) : "unknown"
  console.log(user);
  const [update, setupdate] = useState(true);

  useEffect(async () => {
    const res = await fetch(`http://localhost:4001/mails/${user}`)
    const data = await res.json()
    console.log(data);
    if (data.err) {
      setmsg(data.err)
    } else {
      setmails(data)
      setmsg("")
    }
  }, [update]);




  return (
    <div className='allmails'>
      <p>{msg}</p>
      {
        mails.map(mail => <Item mail={mail} setupdate={setupdate}/>)
      }
    </div>

  )
}
