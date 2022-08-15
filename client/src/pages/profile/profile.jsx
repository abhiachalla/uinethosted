import './profile.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

const Profile = (user) => {

    const updateUser=async ()=> {
        await axios.put("http://localhost:8800/api/users/"+profileID, {"username":usernameRef})
    }


    user=user.user
    const {profileID} = useParams();
    const [newUser,setNewUser] = useState({});
    const usernameRef = useRef();



        const getNewUser = async() => {
            const res = await axios.get("http://localhost:8800/api/users/find/"+profileID)
            setNewUser(res.data);

        } 

        useEffect(()=>{
            getNewUser()
        },[])
    
    // console.log("user is : " + user);
    // console.log(user.user.username)



    // console.log("fetch new user")
    // console.log(newUser)


 


    if(profileID) {
        user = newUser
        }




    return(
        <>
        <img className="netflix" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAclBMVEUAAACxBg/lCRNMAwdOAwe3BhC6BxDqCROpBg+sBg4qAQKIBAw7AgWUBA6eBQ/vCRSiBQ4nAQONAw3TCBI1AQXABxGAAg3LCBHbCBIxAQQkAQRGAwYeAARCAgYtAAVWAwhlBApuBQkXAQJ2AQ0OAAJdAQoP//n7AAAD3klEQVR4nO2bUVPqMBCF20LaxJA0pjRFQUSq//8v3qRFBXNGX+hm7kzOo3bGb/Zsdo8pFEVWVlZWVlZWVtb/qhUrf6pe3T5ylJHs5u4gr02klt8+smGR+vXdQfZdU/1Ud7wFiWoWFe0OWrMYpDmlABG7GKRMAcL6CKSqDilAeMzRuAQgtQbesAQgjIN2bc8JQEoTe9Nee0MGorvYmz4FiBGxN9XV6CQDEQp4YxOAlGqIStJ0KUAMGiWvCUC4BSA6AYiwsTfVtzd0IKXWYKZ9eUMIYiwY8yIBCLf9L/GIEERo1cYleUsAYtwvK5gQxDcJWMFVAhCuwJj/jEeUIEI7sILrBCBGghXcPJODeG/AmG9lAhAth7giAz2I0NaAc/NKD2KUA02iwiNbIehAfJM4sIJ34ZENLQj0ZopHtBXxTSLBmA/xaMsjkiVBfJOgFXwOIJwQJBxghePR1lCCCN8kaAWXHkRHJVmyIsJYVwNvHosnHZVkWRAtZRyP2tGDaFIQ780IvKknEE4HEvKiK8EoKY4q8mZZEKMkjEcHapBwblA8OlpPcjvTlgZRDsWjvYxKsiiIH2lKytibVjlfElIQ472J41HVzSCCDGTyhoN4pCJvlgexKB7VkTfLgnhvPAiIR9VIDuLbFdxQNLM3dCCTNyge9T+9WRwkeAPi0U5KWhARvEE3FDp4QwdSTiAoHg3O3kz5xUEmb0A82kmrricJAYgviQXnhrsbb5YGucy0+H1j042WGMQohdJ8M8prbyhAfEn26LLTXR/gxUEmb1QBRsl8bkhBtHp38Sip/EyjBTFanw8xR8OCN4QgoSSHAqT5nffmq0lIQIwHGWE8+m6S5UGCN+a5KIA3tVO0IJx7EOTNqDQliJhATuCGwk86TgfiSyI8yDn+T6vqv72hASnDhTO4UPMrmBKknEH2MB59ThISEFE++p+/g3fBg1OkICyAFGAFV19TnhJkD0C41IQg5QxSgHg0uEuTkIKAC7XGH2B6EBiPJCVIPYOgeNRdmoQI5GH+FYpHaj7AtCBnkKHZ7A0tCI5HkzfEICgeaZUABMYjyxOAgMvO3dQk1CAgHjVaJwA5oI/KWUEPUoALtV2YJOQgG7BvjE4AUoDoOtgUICge+UlCD7ICo0SYBCAF+qicTgECVnCjUoC8AG9KngCkQO+CTQqQEcSjJBUpwL7pWQoQtILF/b9N8jfIG5hpS1rDGKsnsf4WpKjai8KXby7tur8/iP/LbHqJJsfTx2rzdEBPPT/tP0apOeuHrmo80/2t2bjT+mX7cP77yVmH7X59cvz+FcnKysrKysrKyqLRPxZBT7QswyOzAAAAAElFTkSuQmCC" alt="" />

<div className='card'>
<img className="round left" src={user.profilePic} alt="" />
        <h1 className='left2'>
             Name:<span className='special'>{user.username}</span>
        </h1>
        <h1 className='left2'>
            Email: <span className='special'> {user.email}</span>
        </h1>
        {Object.keys(newUser).length===0 && user.isAdmin && <h1 className='left2'>You are an admin</h1>}
       
        {Object.keys(newUser).length===0 &&
<Link to={`/otherusers/${user.username}`}>

        <h1 className='left2'>
            view other users
        </h1>
</Link>}

<input className="input2" type="username" ref={usernameRef} placeholder='enter new username'/>
<button className="button2" onClick={updateUser}>
    Update user
</button>

</div>
        {/* <h1>
            Your password: {user.user.password}
        </h1> */}

        
        </>
    );
}

export default Profile;
