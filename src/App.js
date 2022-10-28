import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Paty'

  return (
    <div className='App'>
      <SayMyName nome="Sandro" />
      <SayMyName nome="Rafael" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Sandro"
        idade="49"
        profissao="Dev"
        imagem="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App;
