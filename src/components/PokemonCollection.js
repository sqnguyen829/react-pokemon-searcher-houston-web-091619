import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {this.props.pokemons.map(pokemonData=><PokemonCard pokemon={pokemonData}/>)}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
