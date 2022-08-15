import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './details.css'
import { Link } from "react-router-dom";

const Details=()=> {

    const [details,setDetails] = useState({});


    const url = "https://www.omdbapi.com/?apikey=5e1f4b00";
    const {imdbID} = useParams();

    const getDetails = async()=> {
        
        const response = await axios.get(`${url}&i=${imdbID}`)
        console.log(response.data)
 
        setDetails(response.data)
    }

    useEffect(()=>{
        getDetails()
    },[])

return(
<>
<div>
    <img src={details.Poster} alt="" />
    <h1>Name: {details.Title}</h1>
    <h2>Director: {details.Director}</h2>
    <h2>Cast: {details.Actors}</h2>
    <h2>Genre: {details.Genre}</h2>
    <h2>Runtime: {details.Runtime}</h2>
    <h2>IMDB Rating: {details.imdbRating}/10</h2>
    <Link className="good" to="/watch">
        Watch the trailer
    </Link>
        
    
</div>
</>
);
}

export default Details;