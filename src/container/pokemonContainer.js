import React from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';

class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonz: [],
      selectedPokemon: null
    }
  }
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
  }
  render(){
    return(
      <div>
        <h1>Pokemon</h1>
        <PokemonSelector />
        <PokemonDetail />
      </div>
    )
  }
}

export default PokemonContainer;
