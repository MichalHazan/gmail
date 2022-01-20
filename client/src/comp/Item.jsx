import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Item({ mail, setupdate }) {
  const [IsRead, setIsRead] = useState(false);

  const deleteBtn = async (id) => {
    const res = await fetch('http://localhost:4001/mails/' + id, {
      method: "delete",
      headers: { 'content-type': 'application/json' },
      credentials: "include",
    })

    const data = await res.json()
    console.log(data);
    if (data.err) {
      alert(data.err)
    } else {
      setupdate(upd => !upd)
    }

  }
  const linkStyle = {
    margin: 0,
    textDecoration: "none",
    color: IsRead? 'black' : "red"
  };
  return (
    <div className='item'>
      <p>from : {mail.from}</p>

      <Link to="/fullMail" state={{ mail: mail }} style={linkStyle}><h3 className='title'>{mail.title}</h3></Link>
      <p className='time'>at {new Date(mail.created).toLocaleDateString('he-IL')}</p>
      <button onClick={() => deleteBtn(mail.id)}>X</button>
    </div>
  )
}
