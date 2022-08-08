import { myAxios } from "./helper";


export const roomBook=(room)=>{

  return myAxios.post("/api/roombooks/",room).then((response)=>response.data)
};