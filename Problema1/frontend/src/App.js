import React from 'react';
import './App.css';
import UserInterface from './components/User/UserInterface';

class App extends React.Component {

  //Usando state para mudanças de tela
  state = {
    screen: 0,
  }

  changeScreen = (screenIndex) =>{
    this.setState({screen: screenIndex});
  }

  login = () => {

    //Integrar com API em breve...

    this.setState({screen:1})
  }


  logout = () => {

    //Integrar com API em breve...

    this.setState({screen:0})
  }

  render(){

    if(this.state.screen === 0){
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

              <button className='App-button' onClick={() => this.login()} >
                AUTENTICAR
              </button>
              <button className='App-button' type='submit' onClick={() => this.changeScreen(2)}>
                CRIAR CONTA
              </button>
            </form>
            
          </header>
        </div> 
      )
    }

    else if(this.state.screen === 1){
      return(
        <UserInterface logout={this.logout}/>
      )
    }


    else {
      return(<h1>Página não encontrada...</h1>)
    }
   
  }
}

export default App;
