import React from "react"
import styled from "styled-components";
import {CardText} from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import StarShips from "./StarShips";

const FontMe = styled.h1`
font-family: 'Codystar', cursive;
margin: 4%;
color: red;
&:hover {color: blue}
`;
const CardBody = styled.div`
border: 2px solid grey;
margin: 3% 10%;
&:hover{background-color: white}
`

const Characters = (props) =>{
    // console.log(props)
  


    return(

    
        <div>
            <FontMe>{props.data.name}</FontMe>
            <CardBody>
                <CardText>Height: {props.data.height} cm</CardText>
                <CardText>Mass: {props.data.mass} kg</CardText>
                <CardText>Hair Color: {props.data.hair_color}</CardText>
                <CardText>Skin Color: {props.data.skin_color}</CardText>
                <CardText>Eye Color: {props.data.eye_color}</CardText>
                <CardText>Birthday Year: {props.data.birth_year}</CardText>
                <CardText>Gender: {props.data.gender}</CardText>
             </CardBody>
        </div>
    )
} 

export default Characters