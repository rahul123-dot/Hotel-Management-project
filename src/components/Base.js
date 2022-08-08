import { isLoggedIn } from "../auth";
import CustomeNavbar from "./CustomNavbar";
import NavbarAfeterLogin from "./NavbarAfterlLogin";

const Base=({title="Welcome to our website",children})=>{
       if(isLoggedIn){
        return(
          <div className="container-fluid p-0 m-0">
            <CustomeNavbar/>
                 {
              children
            }
         
          </div>
     ) }else{
      return(
        <div className="container-fluid p-0 m-0">
          <NavbarAfeterLogin/>
               {
            children
          }
       
        </div>
   )
     }
};

export default Base;