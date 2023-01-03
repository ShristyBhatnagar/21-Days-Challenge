import React from 'react'
import { useState } from 'react'

function Account() {
    const [user,setUser]=useState("Nancy")
  return (
    <>
    <h1>Hello {user}</h1>
    <Account2 user={user}/>
    </>
  )
}


function Account2({user}) {
  return (
    <>
    <h2>index</h2>
    <Account3 user={user}/>
    </>
  )
}
function Account3({user}) {
    return (
      <h2>Hello {user} again!</h2>
    )
  }

export default Account
