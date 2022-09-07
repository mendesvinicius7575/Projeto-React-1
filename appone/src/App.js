import './App.css';
//mport Amigos from './components/Amigos';
//import Carros from './components/Carros'
import CartaoPessoa from './components/CartaoPessoa'

function App() {


  return (
    <div className="App">
        <CartaoPessoa nome="João" foto="FotoAqui" profissao="Programador" bio="Nascido em tatatataa as montanhas tao tao tao do alto do paquistão norte e veio a correr taltalatal" />
        <CartaoPessoa nome="José" foto="FotoAqui" profissao="Programador" bio="Nascido em tatatataa as montanhas tao tao tao do alto do paquistão norte e veio a correr taltalatal" />
        
    </div>
  )
}

export default App;
