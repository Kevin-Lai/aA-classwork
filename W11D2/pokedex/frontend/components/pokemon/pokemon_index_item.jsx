import React from 'react'

const pokemonIndexItem = (props) => 
    (
        <li>
           <h6>{props.pokemon.name}</h6> <img src={props.pokemon.image_url} height="30"/>
        </li>
    )

export default pokemonIndexItem;