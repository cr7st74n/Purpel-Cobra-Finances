import React from 'react'

export default function Dashboard(props){
  console.log(props.user);
  return (
    <div>
        <h2>Welcome {props.user.email}</h2>
    </div>
  )
}
