import Navbar from "../components/navbar/Navbar";
import Home from "./homepage/Home";

const TempHome=(user)=> {
    return(
<>
<Navbar user={user}/>
<Home/> 
</>
    )
}

export default TempHome;