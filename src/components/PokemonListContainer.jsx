// import React, { useState, useEffect} from 'react'
import { useState, useEffect } from 'react';
import PokeCard from './PokeCard'

function PokemonListContainer({title}) {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);

    function fetchDePokemons() {
        const request = fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        request.then( resp => {
            return resp.json()
        }).then(data => {
            const pokemons = data.results
            console.log("Data Poke: " + JSON.stringify(pokemons))
            setPokemonList(pokemons)
        });
    }

    useEffect(fetchDePokemons, [offset])
    

    return (
        <section className='pokeList-wrapper'>
            <h2 className='title'>{title}</h2>
            <ul className="card-container poke-container">
                { 
                    pokemonList.map( (poke) => <PokeCard 
                    key={poke.name} 
                    name={poke.name} 
                    /> 
                    )
                }
            </ul>
            <div className="btn-containers">
                <button
                    onClick={() => {
                    return setOffset(offset - 20);
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={() => {
                    return setOffset(offset + 20);
                    }}
                >
                    Next
                </button>
            </div>
        </section>
    )
}

export default PokemonListContainer;