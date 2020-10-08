
// import {receiveAllPokemon} from "../actions/pokemon_actions"

export const fetchAllPokemon = function(){
    return $.ajax(
        {
            url: "/api/pokemon",
            method: "GET"
        }
    )
}

// export const requestAllPokemon = () => (dispatch) => (
//     APIUtil.fetchAllPokemon()
//       .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
//   )