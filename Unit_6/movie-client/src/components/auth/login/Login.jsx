import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import FullButton from '../../buttons/FullButton';

function Login({updateToken}) {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("email:", emailRef.current.value)
    console.log("password:", passwordRef.current.value)

  let bodyObj = JSON.stringify({
    email: email, password: password
  })
  const url = `http://localhost:4005/user/login`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  //* Setting our headers to accept the JSON object within the browser.

  const requestOptions = {
    headers,
    body: bodyObj,
    method: 'POST'
  }

  try{

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);

    if(data.message === 'Success! User logged in!') {
    updateToken(data.token)
    navigate('/movie')
    } else {
      alert(data.message)
    }

  } catch (err){
    console.error(err.message);
  }

  }
  return (
    <>
    <h2>Login</h2>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
        innerRef={emailRef}
        autoComplete={'off'}
        placeholder='Email'
        
        />
      </FormGroup>

      <FormGroup>
        <Input
        innerRef={passwordRef}
        autoComplete={'off'}
        placeholder='Password'
        type="password"
        
        />
      </FormGroup>
      <FullButton>
        <Button type='login'>Login</Button>
      </FullButton>
      
      </Form>
    </>
  )
}

export default Login

/* 
   
    - Setup a form:
        
        
        
        
    - Import useRef:
        
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/