import React from 'react';
import { useLocation } from 'react-router-dom'

export default function FullMail() {
  const location = useLocation()
  const { mail } = location.state

  return (<div className='fullmail'>
    <h1>{mail.title}</h1>
    <p>from {mail.from}</p>
    <h2>{mail.text}</h2>
  </div>)
}
