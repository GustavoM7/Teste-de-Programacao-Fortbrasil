import React, { Component } from 'react';
import api from '../API/Api';


class UpdateData extends Component {

    state = {
        id: this.props.data.id,
        nome: this.props.data.nome,
        local: this.props.data.local,
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    update = () => {
        api.put('/estabelecimentos/'+this.state.id, this.state).then(res => {
            console.log(res);
            alert("Estabelecimento atualizado!");
            this.props.goBack(0);

        }).catch(error => {
            alert("Erro inesperado...");
            console.log(error);
            this.props.goBack(0);
        })
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h2>ATUALIZAR {this.props.data.name}</h2>

    
                    <label htmlFor='userInput'>NOME:</label>
                    <input className='App-input' id='userInput' type='text' name="nome" onChange={this.handleInputs} value={this.state.nome}/>

                    <label htmlFor='passwordInput'>LOCAL:</label>
                    <input className='App-input' id='passwordInput' name="local" onChange={this.handleInputs} value={this.state.local}/>

                    <button className='App-button' onClick={() => this.update()} >
                        ENVIAR
                    </button>
                    <button className='App-button' type='button' onClick={() => this.props.goBack(0)}>
                        CANCELAR
                    </button>
                    
                </header>
            </div> 
        )
    }
    
}

export default UpdateData;