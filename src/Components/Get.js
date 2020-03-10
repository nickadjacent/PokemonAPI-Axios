import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FetchButton = styled.button`
    margin: 25px;
    width: 300px;
    padding: 15px;
    border-radius: 10px;
    outline-width: 0;
    font-size: 1.5rem;
    font-weight: bolder;
    display: inline-block;
    background-color: rgb(100, 100, 100);
    color: white;
`;

const Li = styled.li`
    border: 1px solid black;
    border-radius: 8px;
    outline-width: 0;
    font-size: 1rem;
    width: 30vw;
    margin: 5px 35%;
    list-style-type: none;
`;


const Get = () => {

    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=40&limit=964")
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))

    };

    return (
        <div>
            <FetchButton onClick={fetchPokemon}>Fetch Pokémon</FetchButton>
            <br /><hr /><br />
            <ul>
                {pokemon ? pokemon.results.map((pokemons, i) => (
                    <Li key={i}>
                        {pokemons.name}
                    </Li>
                )) : ''}
            </ul>
        </div>
    )
};

export default Get;