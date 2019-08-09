import React, { Component } from 'react';


class UserInterface extends Component {


    render(){
        return(
            <div className='App'>
                <header className='App-header'>
                    <p>ESTABELECIMENTOS</p>
                    <button className='App-button' type='button'>
                        GERENCIAR
                    </button>
                    <button className='App-button' type='button'>
                        CRIAR NOVO
                    </button>
                    <button className='App-button' type='button'>
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

}

export default UserInterface;
