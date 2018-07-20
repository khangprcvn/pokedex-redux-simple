import React from 'react';
import searchToggle from '../actions/action';
import { connect } from 'react-redux';
const pokedexContainer = props => {
  console.log(props);
  return (
    <div>
      <h2> Pokedex in Redux </h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Search Pokedex"
            onChange={e => props.dispatch(searchToggle(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      </form>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Species</th>
            <th>Caught?</th>
          </tr>
        </thead>
        <tbody>
          {props.pokedex.pokemon.map(data => (
            <tr key={data.name}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.stage}</td>
              <td>{data.species}</td>
              <td>{data.caught}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  pokedex: state.pokedex
});

export default connect(mapStateToProps)(pokedexContainer);
