import React, { Component } from 'react';


class SearchData extends Component {

    search = () => {
        //Integrar com a API em breve...
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h2>BUSCAR ESTABELECIMENTOS MAIS PRÓXIMOS</h2>

                    <form className='App-form'>
                    <label htmlFor='userInput'>LOCAL:</label>
                    <input className='App-input' id='userInput' type='text'/>

                    <label htmlFor='passwordInput'>DISTÂNCIA:</label>
                    <input className='App-input' id='passwordInput' type='password'/>

                    <button className='App-button' onClick={() => this.search()} >
                        ENVIAR
                    </button>
                    <button className='App-button' type='submit' onClick={() => this.props.goBack(0)}>
                        VOLTAR
                    </button>
                    </form>
                    
                </header>
            </div> 
        )
    }
    
}

export default SearchData;