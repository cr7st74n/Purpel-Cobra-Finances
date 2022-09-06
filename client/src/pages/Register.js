import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
mutation AddUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      user {
        email
      }
      token
    }
  }
`;

export default function Register(props){
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const [addUser] = useMutation(ADD_USER, 
    {variables: formInput
  })

  const handleAddUser = async (event) => {
    event.preventDefault()
    let user, token
    const userData = await addUser()

    user = userData.user
    token = userData.token

    localStorage.setItem('token', token)
    props.setUser(user)

    navigate('/dash')
  }

  const handleInput = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
        <h2>Register a new account here.</h2>

        <div className='divEmail'>
          <input className='email' onChange={handleInput} name='email' value={formInput.email} type="email" placeholder="Email" />
        </div>
        <div className='divPass'>
          <input className='password' onChange={handleInput} name='password' value={formInput.password} type="password" placeholder="Password" />
        </div>
        <button className='btn' onClick={handleAddUser}>Submit</button>
    </div>
  )
}
