import React from 'react';

import PokemonIndexItem from "./pokemon_index_item"

export default class PokemonIndex extends React.Component {
    constructor(props){
        super(props)

        this.state={ 

        }
    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }

    render(){

        return (
            <ul>
                {
                    this.props.pokemon.map(pkmn =>
                        <PokemonIndexItem key={pkmn.id} pokemon={pkmn}></PokemonIndexItem>
                    )
                }
            </ul>
        )
    }
}

