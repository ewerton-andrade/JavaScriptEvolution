import Banner from './componentes/Banner';
import TextField from './componentes/TextField';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextField label="Nome" placeholder="Digite o seu nome"/>
      <TextField label="Cargo" placeholder="Digite o seu cargo"/>
      <TextField label="Imagem" placeholder="Digite o endereco da imagem"/>
    </div>
  );
}

export default App;
