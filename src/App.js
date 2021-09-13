import { useState } from 'react';
import Form from './components/form';
import MyContext from './context/Context';

function App() {

  //declaração dos states
  const[nome, setNome] = useState('Fernando Simoes')
  const[email, setEmail] = useState('fernando.simoes90@hotmail.com')
  const[idade, setIdade] = useState('31')

   return (
      <MyContext.Provider value={{nome, setNome, email, setEmail,   idade, setIdade}}>
        Nome: {nome}
        <br></br>
        email: {email}
        <br></br>
        idade: {idade}
        <br></br>
        <Form></Form>
      </MyContext.Provider>
    )
}

export default App;
