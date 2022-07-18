import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';


function App() {

  const [workers, setWorkers] = useState([])

  const toNewAddedWorker = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner/>
      <Form toCadastredWorker={worker => toNewAddedWorker(worker)}/>
    </div>
  );
}

export default App;
