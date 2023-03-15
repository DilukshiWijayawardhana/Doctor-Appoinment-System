import React from 'react';
import { Form, Input } from 'antd';//add Input component from 'antd' library 
import "../styles/RegisterStyles.css";//link css file
const Register = () => {

  //form handler
  const onFinishHandler = (values) => {
    console.log(values)
  }
  return (
  <>
    <div className = "form-container " >
      <Form layout= "vertical" onFinish={onFinishHandler} class="card">
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" placeholder = "Enter your name" required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="text" placeholder = "Enter your email" required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder = "Enter your password" required/>
          </Form.Item>
          <button className='btn btn-primary' type="submit">
            Register
          </button>
      </Form>

    </div>

  </>
  );
};

export default Register