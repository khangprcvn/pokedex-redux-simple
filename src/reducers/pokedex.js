import Pokemon from '../database_pokemon/pokemon';

const initialState = {
  pokemon: Pokemon,
  searchValue: ''
};

const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ACTION':
      const { searchValue } = action.payload;
      return {
        ...state,
        searchValue: searchValue,
        pokemon: searchValue
          ? Pokemon.filter(
              pokemon =>
                pokemon.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
            )
          : Pokemon
      };
    default:
      return state;
  }
};

export default pokedexReducer;
