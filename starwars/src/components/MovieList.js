import React, {useEffect, useState} from "react";
import axios from "axios";
import Characters from "./Characters"
import styled from "styled-components";
// import PageList from "./PageList"

const Li = styled.li`
    text-decoration: none;
    list-style-type: none;
`

const people = [
    "Luke Skywalker",
    "C-3PO",
    "R2-D2",
    "Darth Vader",
    "Leia Organa",
    "Owen Lars",
    "Beru Whitesun lars",
    "R5-D4",
    "Biggs Darklighter",
    "Obi-Wan Kenobi"
  ];

const MovieList = (props) => {
    const [characters, setCharacters] = useState([])
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] =useState(1);

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

// Get Current Posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts= characters.slice(indexOfFirstPost, indexOfLastPost);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
      setSearchTerm(e.target.value);
    };
    useEffect(() => {
      const results = people.filter(person =>
        person.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);
    return (
        <div>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        />
        <ul>
        {searchResults.map(item => (
          <Li>{item}</Li>
        ))}
      </ul>
        
          {/* <PageList /> */}
        {characters.map((item, index)=> {
            {/* console.log(item)  */}
            return(
                <Characters  key={item.name} data={item}/>
            )
                
        })}
        </div>
    )
}

export default MovieList