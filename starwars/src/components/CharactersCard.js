import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
background: white;
margin: 10px auto;
padding: 5px;
border-radius: 10px;
border: 2px black solid;  
margin: 10px auto;
width: 370px;
box-shadow: 0 0 10px black;
`;

const CharHead = styled.div`
    font-size:2rem;    
    font-style:italic;
`;

const CharDetails = styled.div`    
    font-size: 1.5rem; 
    line-height: .5rem;     
`;

const CharactersCard = (props) => {
    return (
        <Card className='charCard'>
            <CharHead>Name: {props.value.name} </CharHead>
            <CharDetails>
                <p>Gender: {props.value.gender}</p> 
                <p>Height: {props.value.height}</p>
                <p>Eye Color: {props.value.eye_color}</p>
                <p>Mass: {props.value.mass}</p>
                <p>Hair Color: {props.value.hair_color}</p>
                <p>Skin Color: {props.value.skin_color}</p>   
            </CharDetails>         
        </Card>
    )
}

export default CharactersCard;


