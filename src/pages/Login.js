
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import {toast} from "react-toastify";
import { loginUser } from "../services/user-service";
import { dologin } from "../auth";
import {Privateroute} from "../components/Privateroute";
import { useLocation, useNavigate } from "react-router-dom";

const Login=()=>{
  const navigate = useNavigate();

  //step 1.0
  const [loginDetail,setLoginDetails]=useState({
    username:'',
    password:''
  })
  // step 2.1
  const handleChange=(event, field)=>{
    let actualValue=event.target.value
    setLoginDetails({
      ...loginDetail,
      [field]:actualValue
    })
  }
  const handleReset = ()=>{
    setLoginDetails({
      username:'',
      password:'',
    })
  }
  // step 3.1
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    console.log(loginDetail);
    if(loginDetail.username.trim()==="" || loginDetail.password.trim()===""){
      toast.error("Username or password is required !!")
      return
    }
  

  //submit the data to server to generate token
  loginUser(loginDetail).then((data)=>{
console.log(data)
// save the data to localstorage
dologin(data,()=>{
  console.log("login detail is saved to localstorage");
  //redirect to user dashboard page
    navigate("/dashboard")
})
toast.success("login sucessfully")


}).catch(error=>{
  console.log(error);
  toast.error("something went wrong") 
})
  }
  return(
  <Base>

    <Container>
    <Row className="mt-4">
      <Col sm={{size:6,offset:3}}>
        <Card color="dark" inverse>
         <CardHeader>
          <h3>Login Here </h3>
         </CardHeader>
        <CardBody>
             {/*  step 3.0*/}
          <Form onSubmit={handleFormSubmit}>
          {/* email */}
          <FormGroup>
            <Label for="email">UserName</Label>
            <Input
            type="text"
            id="email"
            // step 1.1
            value={loginDetail.username}
            // step 2.0
            onChange={(e)=>handleChange(e,'username')}
            />
          </FormGroup>
          {/* password */}
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
            type="password"
            id="password"
            value={loginDetail.password}
            onChange={(e)=>handleChange(e,'password')}
            />
          </FormGroup>
          <Container className="text-center">
            <Button color="light" outline>Login</Button>
            <Button onClick={handleReset}className="ms-2" color="secondary" outline>Reset</Button>
          </Container>
          </Form>
          
        </CardBody>

        </Card>
      </Col>
    </Row>
    </Container>
  </Base>
  )
  }
  
  export default Login;