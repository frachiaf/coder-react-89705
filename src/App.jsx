import './App.css';
import Card from './components/Card'

function App() {
  //* <> fragment
  let titulo = 'Bienvenidos a React - 89705'
  return (
    <section>
      <h1>{titulo}</h1>
      <div className="card-container">
        <Card title="Remera" price={99+10} img="https://cdn.shopify.com/s/files/1/1568/2063/files/37547_WHI_360x.jpg?v=1733170851"></Card>
        <Card title="Short" price={79/2} img="https://cdn.shopify.com/s/files/1/1568/2063/files/86475_BUGR_360x.jpg?v=1757617994"></Card>
        <Card title="Gorra" price={29/2} img="https://cdn.shopify.com/s/files/1/1568/2063/files/38296_HGSS_360x.jpg?v=1762374773"></Card>
      </div>
    </section>
  )
}

export default App
