import './style/App.css'
import { PokemonCard, PokemonType } from './components/PokemonCard';


function App() {
  const pokemons: PokemonType[] = [
    {
      name: "bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <section>
      <div>
        <PokemonCard 
          name={pokemons[0].name}
          imgSrc={pokemons[0].imgSrc}
        />
      </div>
    </section>
  );
}


export default App
