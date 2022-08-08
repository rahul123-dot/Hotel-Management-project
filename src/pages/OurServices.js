import { Card, CardBody, CardGroup, CardImg,  CardText, CardTitle } from "reactstrap";
import Base from "../components/Base"

const OurServices=()=>{
  return(
    <Base>
     
    <CardGroup className="mt-5">
 <Card>
   <CardImg
     alt="Card image cap"
     src="https://th.bing.com/th/id/OIP.yQE1Y1KNLUodZvLFKmVwLwHaHa?pid=ImgDet&w=500&h=500&rs=1"
     top
     width="100%"
   />
   <CardBody>
     <CardTitle tag="h5">
       No Minimum Order
     </CardTitle>
     {/* <CardSubtitle
       className="mb-2 text-muted"
       tag="h6"
     >
       Card subtitle
     </CardSubtitle> */}
     <CardText>
       order in for yourself or for the group, with no restrictions on order value.
     </CardText>
   </CardBody>
 </Card>
 <Card>
   <CardImg
     alt="Card image cap"
     src="https://i.pinimg.com/736x/04/ee/4b/04ee4b1659f5d7d8f95078645719accb.jpg"
     top
     width="100%"
   />
   <CardBody>
     <CardTitle tag="h5">
       Lightning-Fast Delivery
     </CardTitle>
     {/* <CardSubtitle
       className="mb-2 text-muted"
       tag="h6"
     >
       Card subtitle
     </CardSubtitle> */}
     <CardText>
     </CardText>
     Experience superfast delivery for food delivered fresh and on time
   </CardBody>
 </Card>
 <Card>
   <CardImg
     alt="Card image cap"
     src="https://static.thenounproject.com/png/466018-200.png"
     top
     width="100%"
   />
   <CardBody>
     <CardTitle tag="h5">
       Luxury Rooms
     </CardTitle>
     {/* <CardSubtitle 
       className="mb-2 text-muted"
       tag="h6"
     >
       Card subtitle
     </CardSubtitle> */}
     <CardText>
       Luxury rooms have been extensively refurbished with modern amenities and facilities
     </CardText>
     
   </CardBody>
 </Card>
</CardGroup>
    </Base>
  )
  }
  
  export default OurServices;