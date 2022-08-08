import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/user-service";
import {toast} from "react-toastify";
const Signup=()=>{

  const [data, setData] = useState({
        fname:'',
        lname:'',
        mob:'',
        idp:'',
        email:'' ,
        password:'',
        about:'',

  })
  const [error, setError] = useState({
        errors:{}
  })

  useEffect(()=>{
    console.log(data);
  },[data])
  // fetch the data from client
  const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
  }
// reset the form
  const resetData=()=>{
    setData({fname:'',
    lname:'',
    mob:'',
    idp:'',
    email:'',
    password:'',
    about:'',})
  }
      // submiting form
      const submitForm=(event)=>{
        event.preventDefault()
        console.log(data);

        //call server api for sending data
        signUp(data).then((resp)=>{

          console.log(resp);
          console.log("Sucess log");
          toast.success("User is Registered Sucessfully !!")
          setData({fname:'',
    lname:'',
    mob:'',
    idp:'',
    email:'',
    password:'',
    about:'',})
        }).catch((error)=>{
          console.log(error)
          console.log("Error log")
        });
      };
  return(
    <Base>
     <Container className="mt-4">
     <Row >

      <Col sm={{size:6,offset:3}}>

      <Card color="dark" inverse>

<CardHeader>
  <h3>Fill Information to Register</h3>
</CardHeader>
<CardBody>
  {/* creating form */}
  <Form onSubmit={submitForm}>

    <FormGroup>
      {/* fname field */}
      <Label for="fname">First Name</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="fname"
      onChange={(e)=>handleChange(e,'fname')}
      value={data.fname}
      />

    </FormGroup>
    <FormGroup>
      {/* lname field */}
      <Label for="lname">Last Name</Label>
      <Input type="textbox"
      placeholder="Enter here..."
      id="lname"
      onChange={(e)=>handleChange(e,'lname')}
      value={data.lname}
      />
    </FormGroup>
    <FormGroup>
      {/* mob field */}
      <Label for="mob">Mob No.</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="mob"
      onChange={(e)=>handleChange(e,'mob')}
      value={data.mob}
      />
    </FormGroup>
    <FormGroup>
      {/* idp field */}
      <Label for="idp">Pancard No.</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="idp"
      onChange={(e)=>handleChange(e,'idp')}
      value={data.idp}
      />
    </FormGroup>
    <FormGroup>
      {/* email field */}
      <Label for="email">Email</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="email"
      onChange={(e)=>handleChange(e,'email')}
      value={data.email}
      />
    </FormGroup>
    <FormGroup>
      {/* password field */}
      <Label for="password">Password</Label>
      <Input type="password"
      placeholder="Enter here..."
      id="password"
      onChange={(e)=>handleChange(e,'password')}
      value={data.password}
      />
    </FormGroup>
    <FormGroup>
      {/* about field */}
      <Label for="about">about yourself:</Label>
      <Input type="textarea"
      placeholder="Enter here..."
      id="about"
      style={{height:"250px"}}
      onChange={(e)=>handleChange(e,'about')}
      value={data.about}
      />
    </FormGroup>

    <Container className="text-center">
      <Button outline color="light">Register</Button>
      <Button onClick={resetData} color="secondary" type="reset"className="ms-2">Reset</Button>
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
  
  export default Signup;