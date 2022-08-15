import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './otherusers.css'

const OtherUsers =()=> {
    const {currentUserID} = useParams();
    const [finalRes,setFinalRes] = useState({});
    // console.log(currentUserID)

    //retrieve all the users
    const getAllUsers= async()=> {
        const res = await axios("http://localhost:8800/api/users");
        // console.log(res.data)
        setFinalRes(res.data);

    }

    useEffect(()=> {
        getAllUsers();
    },[])

    console.log("tjhis os final result")
console.log(finalRes)

let finalRes2 = Object.values(finalRes);


finalRes2=finalRes2.filter(user=>user.username!==currentUserID)


    
    return(
        <>
        <img className="netflix" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAclBMVEUAAACxBg/lCRNMAwdOAwe3BhC6BxDqCROpBg+sBg4qAQKIBAw7AgWUBA6eBQ/vCRSiBQ4nAQONAw3TCBI1AQXABxGAAg3LCBHbCBIxAQQkAQRGAwYeAARCAgYtAAVWAwhlBApuBQkXAQJ2AQ0OAAJdAQoP//n7AAAD3klEQVR4nO2bUVPqMBCF20LaxJA0pjRFQUSq//8v3qRFBXNGX+hm7kzOo3bGb/Zsdo8pFEVWVlZWVlZWVtb/qhUrf6pe3T5ylJHs5u4gr02klt8+smGR+vXdQfZdU/1Ud7wFiWoWFe0OWrMYpDmlABG7GKRMAcL6CKSqDilAeMzRuAQgtQbesAQgjIN2bc8JQEoTe9Nee0MGorvYmz4FiBGxN9XV6CQDEQp4YxOAlGqIStJ0KUAMGiWvCUC4BSA6AYiwsTfVtzd0IKXWYKZ9eUMIYiwY8yIBCLf9L/GIEERo1cYleUsAYtwvK5gQxDcJWMFVAhCuwJj/jEeUIEI7sILrBCBGghXcPJODeG/AmG9lAhAth7giAz2I0NaAc/NKD2KUA02iwiNbIehAfJM4sIJ34ZENLQj0ZopHtBXxTSLBmA/xaMsjkiVBfJOgFXwOIJwQJBxghePR1lCCCN8kaAWXHkRHJVmyIsJYVwNvHosnHZVkWRAtZRyP2tGDaFIQ780IvKknEE4HEvKiK8EoKY4q8mZZEKMkjEcHapBwblA8OlpPcjvTlgZRDsWjvYxKsiiIH2lKytibVjlfElIQ472J41HVzSCCDGTyhoN4pCJvlgexKB7VkTfLgnhvPAiIR9VIDuLbFdxQNLM3dCCTNyge9T+9WRwkeAPi0U5KWhARvEE3FDp4QwdSTiAoHg3O3kz5xUEmb0A82kmrricJAYgviQXnhrsbb5YGucy0+H1j042WGMQohdJ8M8prbyhAfEn26LLTXR/gxUEmb1QBRsl8bkhBtHp38Sip/EyjBTFanw8xR8OCN4QgoSSHAqT5nffmq0lIQIwHGWE8+m6S5UGCN+a5KIA3tVO0IJx7EOTNqDQliJhATuCGwk86TgfiSyI8yDn+T6vqv72hASnDhTO4UPMrmBKknEH2MB59ThISEFE++p+/g3fBg1OkICyAFGAFV19TnhJkD0C41IQg5QxSgHg0uEuTkIKAC7XGH2B6EBiPJCVIPYOgeNRdmoQI5GH+FYpHaj7AtCBnkKHZ7A0tCI5HkzfEICgeaZUABMYjyxOAgMvO3dQk1CAgHjVaJwA5oI/KWUEPUoALtV2YJOQgG7BvjE4AUoDoOtgUICge+UlCD7ICo0SYBCAF+qicTgECVnCjUoC8AG9KngCkQO+CTQqQEcSjJBUpwL7pWQoQtILF/b9N8jfIG5hpS1rDGKsnsf4WpKjai8KXby7tur8/iP/LbHqJJsfTx2rzdEBPPT/tP0apOeuHrmo80/2t2bjT+mX7cP77yVmH7X59cvz+FcnKysrKysrKyqLRPxZBT7QswyOzAAAAAElFTkSuQmCC" alt="" />
        <h1 className='text'>
            Other Users:
        </h1>
            {finalRes2.map(user => 
            <div className='col-flex'>
                <img className='br' src={user.profilePic} height={40}/>
                <h2 className='text'>Name: <span className='text2'>{user.username}</span></h2>
                <h2 className='text'>email: <span className='text2'>{user.email}</span></h2>
                
                <Link to={`/profile/${user._id}`}>
                    
                <h3 className='no-dec text'>View Profile {user.username}</h3>
                    </Link>
                </div>           

        )}
        </>
    );

}

export default OtherUsers;