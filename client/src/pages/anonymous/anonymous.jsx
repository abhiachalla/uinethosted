
import Navbar from "../../components/navbar/Navbar.js";
import AnonFeatured from "../../components/featured/anonfeatured.jsx";
import List from "../../components/list/anonlist.jsx";
import "./anonymous.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Shuffle } from "@material-ui/icons";




let movieSent = null;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const Anonymous = ({type}) => {

  const user= {
    
      user:{
        username:"",
        profilePic:"data:image/jpeg;base64,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"  
    
      
    }
  }

    console.log("entered anonymoys") 


    const [lists1, setlists1] = useState([]);
    const [lists2, setlists2] = useState([]);
    const [lists3, setlists3] = useState([]);
    const [lists4, setlists4] = useState([]);




    const [ranmov, setRanMovie] = useState(null);

    
    

    const [genre, setGenre] = useState(null);


    useEffect( () => {
        const getRandomLists = async() => {
            try {

              const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
                  'X-RapidAPI-Key': '47ffa63576msh4bb35592f73ecc1p137d0ajsna21fa7d7526b'
                }
              };
              
              let countNo = 1
              let tempArr = [] 
              while(countNo<5) {
              
              fetch('https://movie-database-alternative.p.rapidapi.com/?s=Movie&r=json&page='+countNo, options)
                .then(response => response.json())
                .then(response => {
                
                response.Search.map(movie=>{
                tempArr.push(movie)
                })

                  setlists1(tempArr.slice(0,8));

                let ta2 = [...tempArr]
                shuffle(ta2)

                setlists2(tempArr.slice(9,17));

                let ta3 = [...tempArr]
                shuffle(ta3)



                setlists3(tempArr.slice(18,26));
 
                let ta4 = [...tempArr]
                shuffle(ta4)


                setlists4(tempArr.slice(27,35));

                const temptempArr  = tempArr.Shuffle
                // setRanMovie(temptempArr[0])

                // movieSent = temptempArr[0]

                
                
                })
                .catch(err => console.error(err));
                countNo++;
              }
              

              // const options = {
              //   method: 'GET',
              //   headers: {
              //   'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
              //   'X-RapidAPI-Key': '47ffa63576msh4bb35592f73ecc1p137d0ajsna21fa7d7526b'
              //   }
              //   };
                
              //   fetch('http://www.omdbapi.com/?i=tt3896198&apikey=728f5910&s=batman', options)
              //   .then(response => response.json())
              //   .then(response => {
              //     // setRanMovie(response.results[0])

              //   // console.log(response.results[0])
              //   let temparr = []

              //   response.results.map(movie=> {
              //     temparr.push(movie);
              //   })

              //   setlists1(temparr);

              //   let ta2 = [...temparr]
              //   shuffle(ta2)

              //   setlists2(ta2);

              //   let ta3 = [...temparr]
              //   shuffle(ta3)



              //   setlists3(ta3);
 
              //   let ta4 = [...temparr]
              //   shuffle(ta4)


              //   setlists4(ta4);







              //   // console.log(lists);

                
              //   }
              //   )
              //   .catch(err => console.error(err));

                // const res = await axios.get(
                //   `lists${type ? "?type=" + type : ""}${
                //     genre ? "&genre=" + genre : ""
                //   }`,
                //   {
                //     headers: {
                      
                //         token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2FhMzExNjRkODQ4M2MwMDNiODhhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTc2NjUzOX0.KeneoUYrptd15uhaqt7TjN-YC3CtazKcvRRZQ5cVPsA"
                //     },
                //   }
                // );
              
                // setlists(res.data);
              
              }catch(err) {
                  
                console.log(err);
            }
        };
        getRandomLists()
    },[type, genre]);



    return (
        <div className="Home">
            {/* <Navbar user={user}/> */}

           
            {/* <AnonFeatured ranmov={lists1} /> */}


        <List list={lists1} />
        <List list={lists2} />
        <List list={lists3} />
        <List list={lists4} />



        </div>
    )
}

export default Anonymous

