import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='contaiber-app'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda!"} />
    </div>
  )
}

export default App
