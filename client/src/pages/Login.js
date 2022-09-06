import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client';
import "../styles/Login.css"

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        email
      }
      token
    }
  }
`;

export default function Login(props){
  const navigate = useNavigate()
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput
  })

  const handleLoginUser = async (event) => {
    event.preventDefault()
    let user, token
    const userData = await loginUser()

    user = userData.data.loginUser.user
    token = userData.data.loginUser.token

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
    <div className='Login'>
        <h2>This is the login page</h2>
        <div className='divEmail'>
          <input onChange={handleInput} name='email' value={formInput.email} type="text" placeholder="Email" />
        </div>
        <div className='divPass'>
          <input onChange={handleInput} name='password' value={formInput.password} type="password" placeholder="Password" /> 
        </div>
        <button className='btn' onClick={handleLoginUser}>Submit</button>
    </div>
  )
}
