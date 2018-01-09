import React from 'react';

class PokemonSelector extends React.Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event){
    this.props.onSelect(parseInt(event.target.value, 10));
  }

  render(){

    const options = this.props.pokemonz.map((pokemon, index) => {
      return <option value={index} key={index}>{pokemon.name}</option>
    })

    return(
      <select id="pokemonSelector" onChange={this.handleChange}>
        {options}
      </select>
    )
  };
};

export default PokemonSelector;
