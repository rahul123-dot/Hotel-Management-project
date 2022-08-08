import NavbarAfeterLogin from "./NavbarAfterlLogin";

const AfterLoginBase=({title="Welcome to our website",children})=>{

  return(
    <div className="container-fluid p-0 m-0">
      <NavbarAfeterLogin/>
           {
        children
      }
   
    </div>
) ;
};

export default AfterLoginBase;