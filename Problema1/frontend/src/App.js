import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>GERENCIAMENTO DE ESTABELECIMENTOS</h2>
          <p>BEM-VINDO(A)</p>

          <form className='App-form'>
            <label htmlFor='userInput'>USUÁRIO:</label>
            <input className='App-input' id='userInput' type='text'/>

            <label htmlFor='passwordInput'>SENHA:</label>
            <input className='App-input' id='passwordInput' type='password'/>

            <button className='App-button' type='submit'>AUTENTICAR</button>
            <button className='App-button' type='submit'>CRIAR CONTA</button>
          </form>
          
        </header>
      </div>
    )
  }
}

export default App;
