import React from 'react';
import PokemonSelector from '../components/pokemonSelector';
import PokemonDetail from '../components/pokemonDetail';

class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonz: [],
      pokemonURL: ""
    }
    this.handleSelectedPokemon = this.handleSelectedPokemon.bind(this);
  };

  componentDidMount(){
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({pokemonz: data.results});
      }
    })
    request.send();
  };

  handleSelectedPokemon(index){
    this.setState({pokemonURL: this.state.pokemonz[index].url});
  };

  render(){
    // console.log(this.state.selectedPokemon);

    return(
      <div>
        <h1>Pokemon</h1>
        <PokemonSelector pokemonz={this.state.pokemonz} onSelect={this.handleSelectedPokemon}/>
        <PokemonDetail pokemonURL={this.state.pokemonURL}/>
      </div>
    )
  }
}

export default PokemonContainer;
