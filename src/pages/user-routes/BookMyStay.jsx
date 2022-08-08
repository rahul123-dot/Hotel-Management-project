import React, { useEffect, useState } from 'react'
import AfterLoginBase from '../../components/AfterLoginBase'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { roomBook } from '../../services/room-service';
import {toast} from "react-toastify";
const BookMyStay=()=> {
  const[data, setData]=useState({
    fname:'',
    lname:'',
    nOP:'',
    location:'',
    inDate:'',
    outDate:'',
    type:'',
    payed:'',
  })
  const [error, setError] = useState({
    errors:{}
   })
  //  useEffect(()=>{
  //   console.log(data);
  // },[data])
   const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
}
const resetData=()=>{

  setData({
    fname:'',
    lname:'',
    nOP:'',
    location:'',
    inDate:'',
    outDate:'',
    type:'',
    payed:'',
  })

}
 // submiting form
 const submitForm=(event)=>{
  event.preventDefault()
  //call server api for sending data
  roomBook(data).then((resp)=>{
  console.log(resp);
  console.log("room sucess");
  toast.success("Room Booked Sucessfully!! Thank you!!")

  }).catch((error)=>{
    console.log(error)
    console.log("Error log")
  });
 }


  return (
    
    <AfterLoginBase>
    <Container className='mt-4'>
    <Row>
      <Col sm={{size:11,offset:1}}>
      <Card color='dark' inverse>
      <CardHeader>
        <h3>Book My Stay</h3>
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
      onChange={(e)=>handleChange(e,"fname")}
      value={data.fname}
      />

    </FormGroup>
    <FormGroup>
      {/* lname field */}
      <Label for="lname">Last Name</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="lname"
      onChange={(e)=>handleChange(e,"lname")}
      value={data.lname}
      />
    </FormGroup>
    <FormGroup>
      {/* number of person field */}
      <Label for="nOP">No. of Person</Label>
      <Input type="number"
      placeholder="Enter here..."
      id="nOP"
      onChange={(e)=>handleChange(e,'nOP')}
      value={data.nOP}
      />
    </FormGroup>
    <FormGroup>
      {/* location field */}
      <Label for="location">Location</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="location"
      onChange={(e)=>handleChange(e,'location')}
      value={data.location}
      />
    </FormGroup>
    <FormGroup>
      {/* inDate field */}
      <Label for="inDate">Check In</Label>
      <Input type="Date"
      placeholder="Enter here..."
      id="inDate"
      onChange={(e)=>handleChange(e,'inDate')}
      value={data.inDate}
      />
    </FormGroup>
    <FormGroup>
      {/* outDate field */}
      <Label for="outDate">Check Out</Label>
      <Input type="Date"
      placeholder="Enter here..."
      id="outDate"
      onChange={(e)=>handleChange(e,'outDate')}
      value={data.outDate}
      />
    </FormGroup>
    <FormGroup>
      {/* type field */}
      <Label for="type">Room Type: AC or Non AC</Label>
      <Input type="text"
      placeholder="Enter here..."
      id="type"
      onChange={(e)=>handleChange(e,'type')}
      value={data.type}
      />
    </FormGroup>
    <FormGroup>
      {/* payment field */}
      <Label for="payed">payment type</Label>
      <Input type="text"
      placeholder="type card here"
      id="payed"
      onChange={(e)=>handleChange(e,'payed')}
      value={data.payed}
      />
    </FormGroup>

    <Container className="text-center">
      <Button outline color="light">Book Now</Button>
      <Button onClick={resetData}color="secondary" type="reset"className="ms-2">Reset</Button>
    </Container>
  </Form>
</CardBody>      


      </Card>

      </Col>
    </Row>


    </Container>
    </AfterLoginBase>
    
  )
}

export default BookMyStay