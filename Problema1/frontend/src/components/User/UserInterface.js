import React, { Component } from 'react';
import ListData from '../DataManager/ListData';


class UserInterface extends Component {

    //usando state para renderizar componentes
    state = {
        content: 0
    }

    changeContent = (contentIndex) => {
        this.setState({content: contentIndex});
    }

    render(){

        if(this.state.content === 0){
            return(
                <div className='App'>
                    <header className='App-header'>
                        <p>ESTABELECIMENTOS</p>
                        <button className='App-button' type='button' onClick={() => this.changeContent(1)}>
                            GERENCIAR
                        </button>
                        <button className='App-button' type='button' onClick={() => this.changeContent(2)}>
                            CRIAR NOVO
                        </button>
                        <button className='App-button' type='button' onClick={() => this.changeContent(1)}>
                            BUSCAR PRÓXIMO
                        </button>

                        <hr width="100"/>

                        <p>USUÁRIO</p>
                        <button className='App-button' type='button' onClick={() => this.props.logout()}>
                            SAIR
                        </button>
                        <button className='App-button' type='button' onClick={() => this.props.logout()}>
                            EXCLUIR CONTA
                        </button>

                    </header>
                </div>
            )            
        }

        else if (this.state.content === 1){
            return(
                <ListData goBack={this.changeContent}/>
            )
        }

        else if (this.state.content === 2){
            return(
                <h1>Criar novo...</h1>
            )
        }

        else {
            return(
                <h1>Buscar...</h1>
            )
        }

    }

}

export default UserInterface;
