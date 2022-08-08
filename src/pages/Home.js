import Base from "../components/Base";
import { Button, Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Home=()=>{
return(
 <Base>
  
<div>
  <Card >
    <CardImg
      alt="Card image cap"
      src="https://crewconnected.com/wp-content/uploads/2013/06/Millennium-London-Mayfair-id90-cabin-crew5.jpg"
      style={{
        height: 800
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle  tag="h1" className="mt-5 text-center">
        <strong>A BEST PLACE TO STAY</strong>
      </CardTitle>
      {/* <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText> */}
    </CardImgOverlay>
  </Card>
</div>

 </Base>

)
}

export default Home;