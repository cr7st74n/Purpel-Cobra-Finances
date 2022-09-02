import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client';

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
    <div>
        <h2>This is the login page</h2>
            <form>
            <input onChange={handleInput} name='email' value={formInput.email} type="text" placeholder="Email" />
            <input onChange={handleInput} name='password' value={formInput.password} type="password" placeholder="Password" />
            <button onClick={handleLoginUser}>Submit</button>
            </form>
    </div>
  )
}
