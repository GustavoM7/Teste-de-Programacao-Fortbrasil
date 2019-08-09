import React, { Component } from 'react';


class CreateNewData extends Component {

    create = () => {
        //Integrar com a API em breve...
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h2>REGISTRAR NOVO ESTABELECIMENTO</h2>

                    <form className='App-form'>
                    <label htmlFor='userInput'>NOME:</label>
                    <input className='App-input' id='userInput' type='text'/>

                    <label htmlFor='passwordInput'>LOCAL:</label>
                    <input className='App-input' id='passwordInput' type='password'/>

                    <button className='App-button' onClick={() => this.create()} >
                        ENVIAR
                    </button>
                    <button className='App-button' type='submit' onClick={() => this.props.goBack(0)}>
                        CANCELAR
                    </button>
                    </form>
                    
                </header>
            </div> 
        )
    }
    
}

export default CreateNewData;