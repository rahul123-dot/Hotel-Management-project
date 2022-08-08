import AfterLoginBase from "../../components/AfterLoginBase"
import Base from "../../components/Base"
import { Card,CardImg, CardImgOverlay,CardTitle} from "reactstrap";

const UserDashboard=()=>{
  return(

<AfterLoginBase>

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

  </AfterLoginBase> 

  )
}
export default UserDashboard