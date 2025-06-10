import { Outlet , Link ,useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar"; 
import Footer from "./Footer/Footer";



const MasterLayout= ()=>{
return (
   <>
    <Navbar/>
    <main>
        <Outlet/>
         
    </main>
    <Footer/>
    
   </>
)
}

export default MasterLayout;