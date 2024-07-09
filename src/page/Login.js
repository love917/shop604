import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Login({setAuthenticate}) {
  const navigate=useNavigate();
  const loginUser=(e)=>{
    e.preventDefault(); //react는 새로고침 되면 안됨
    setAuthenticate(true);
    navigate("/"); //3000번 메인페이지를 말함
  }
  return (
    <Form onSubmit={loginUser} className='loginForm'>
      <FormGroup>
        <Label for="exampleAddress">
          Email address
        </Label>
        <Input
          id="exampleAddress"
          name="address"
          placeholder="Enter email"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleAddress2">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
        />
      </FormGroup>

      <Button type="submit" color="danger">
        Submit
      </Button>
    </Form>
  );
}

export default Login