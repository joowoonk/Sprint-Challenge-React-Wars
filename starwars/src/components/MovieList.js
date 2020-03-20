import React, {useEffect, useState} from "react";
import axios from "axios";
import Characters from "./Characters"

const MovieList = (props) => {
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        axios
        .get("https://swapi.co/api/people")
        .then(response =>{
            // console.log(response.data.results)
            setCharacters(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
        {characters.map((item, index)=> {
            {/* console.log(item)  */}
            return(
                <Characters key={item.name} data={item}/>
            )
                
        })}
        </div>
    )
}

export default MovieList