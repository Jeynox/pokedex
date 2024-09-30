import './style/App.css'
import { PokemonCard } from './components/PokemonCard';


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <section>
      <div>
        <PokemonCard 
          name={pokemonList[0].name}
          img={pokemonList[0].imgSrc}
        />
      </div>
    </section>
  );
}


export default App
