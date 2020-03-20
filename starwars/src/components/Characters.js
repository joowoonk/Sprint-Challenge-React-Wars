import React from "react"
import styled from "styled-components";
import {Card, CardBody, CardText} from "reactstrap";
// import StarShips from "./StarShips";

const Characters = (props) =>{
    console.log(props)
  
    const FontMe = styled.h1`
        font-family: 'Codystar', cursive;
        margin: 4%;
`;
    const CardBody = styled.div`
        border: 2px solid grey;
        margin: 0 auto;
    `

    return(
        <Card>
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
    

        </Card>
    )
} 

export default Characters