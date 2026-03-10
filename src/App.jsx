import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import PokemonListContainer from './components/PokemonListContainer';

function App() {
  //* <> fragment
  let titulo = 'Clase 03'
  return (
    <main>
      <NavBar></NavBar>
      <h1>{titulo}</h1>
      <ItemListContainer title="Listado de productos"></ItemListContainer>
      <PokemonListContainer title="Pokedex"></PokemonListContainer>
    </main>
  )
}

export default App
