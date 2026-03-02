import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  //* <> fragment
  let titulo = 'Pre Entrega 1 - 89705'
  return (
    <main>
      <NavBar></NavBar>
      <h1>{titulo}</h1>
      <ItemListContainer title="Listado de productos"></ItemListContainer>
    </main>
  )
}

export default App
