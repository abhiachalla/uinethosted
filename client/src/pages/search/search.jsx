import './search.css';
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

const Search2 =() => {

    const searchRef=useRef(); 

    const {searchID} = useParams();
    console.log("search result: "+searchID)


    const [movies,setMovies] = useState([]);
    const url = "https://www.omdbapi.com/?apikey=5e1f4b00"

    const searchByTitle = async() => {
        setMovies([]);
        const searchString = searchRef.current.value || searchID ||'movie'
        const response = await axios.get(`${url}&s=${searchString}`)
        setMovies(response.data.Search)
        


    }

    useEffect(()=>{
        searchByTitle()
    },[])
    
    return( 
        <>

        <div id='abhi'>abhi</div>
        <div className='searchbar'>

            <input className='inputSearch' ref={searchRef}  placeholder='search any movie'></input>
            <button className='button' onClick={searchByTitle}>Search</button>


            {/* <ul className='list-group'>
                {
                    movies.map(movie=> {
                        
                        <li className='list-group-item'>
                            <img src={movie.Poster} height={20} alt="" />
                            {movie.title}
                        </li>
                    })
                }

            </ul> */}




{/* <pre>

            {JSON.stringify(movies,null,2)}
</pre> */}


        </div>
<div className='movies'>         
       
       <ul className='group-list'>
           {
           
           movies && movies.map(movie=>
           <li className='group-list-item'>
               <Link className="no-text-dec" to={`/details/${movie.imdbID}`}>
               <img src={movie.Poster} height={70} alt="" />
               <span className='good'>{movie.Title}</span>
               </Link>
           </li>
               
           )} 

           {
               !movies && <h1>No results found for this search!</h1>
           }
       </ul>

       </div>
        </>

    )
}

export default Search2;