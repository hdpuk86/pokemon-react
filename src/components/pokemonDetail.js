import React from 'react';

class PokemonDetail extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemonDetails: {}
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.pokemonURL) {
      const url = nextProps.pokemonURL;
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.addEventListener('load', () => {
        if(request.status === 200){
          const jsonString = request.responseText;
          const data = JSON.parse(jsonString);
          console.log(data);
          this.setState({ pokemonDetails: data });
        };
      });
      request.send();
    }
  }

  render(){

    return(
      <article>
        <p>
          {this.state.pokemonDetails.name}
        </p>
      </article>
    )
  }
}

export default PokemonDetail;
