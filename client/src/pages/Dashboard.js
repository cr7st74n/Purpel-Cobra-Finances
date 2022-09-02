import React from 'react'

export default function Dashboard(props){
  return (
    <div>
        <h2>Welcome {props.user.email}</h2>
    </div>
  )
}
