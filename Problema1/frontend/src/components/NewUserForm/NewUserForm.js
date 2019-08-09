import React, { Component } from 'react';


class NewUserForm extends Component {

    createUser = () => {
        //Integrar com a API em breve...

        this.props.goBack(0);
    }

    render(){
        return(
            <div className='App'>
                <header className='App-header'>
                    <p>NOVO USUÁRIO</p>
                    <label htmlFor='userInput'>USUÁRIO:</label>
                    <input className='App-input' id='userInput' type='text'/>

                    <label htmlFor='passwordInput'>SENHA:</label>
                    <input className='App-input' id='passwordInput' type='password'/>

                    <button className='App-button' type='button' onClick={() => this.createUser()}>
                        CRIAR
                    </button>

                    <button className='App-button' type='button' onClick={() => this.props.goBack(0)}>
                        CANCELAR
                    </button>

                </header>
            </div>
        )
    }

}

export default NewUserForm;