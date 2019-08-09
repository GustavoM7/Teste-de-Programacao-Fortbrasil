import React, { Component } from 'react';
///import Data from '../API/Data';
import api from '../API/Api';


class ListData extends Component {

    state = {
        data: [],
        loaded: false
    }

    getData = () => {
        
        api.get('/estabelecimentos', {}).then(res => {
            this.setState({
                data: res.data,
                loaded: true
            })
        }).catch(error => {
            alert("Erro inesperado...");
            console.log(error);
            this.props.goBack(0)
        })
        
        
    }

    update = () => {
        //Integrar com a API em breve...
    }

    delete = () => {
        //Integrar com a API em breve...
    }

    render(){
        if(this.state.loaded){
            return(
                <div className='App'>
                    <header className='App-header'>
                        <h3>ESTABELECIMENTOS</h3>

                        <table className="App-table">
                            <thead>
                                <tr>
                                    <th>
                                        NOME
                                    </th>
                                    <th>
                                        LOCAL
                                    </th>
                                    <th>
                                        --
                                    </th>
                                    <th>
                                        --
                                    </th>
                                </tr>      
                            </thead>

                            <tbody>

                                {
                                    this.state.data.map(estab => {
                                        return(
                                            <tr key={estab.id}>
                                                <td>
                                                    {estab.nome}
                                                </td>
                                                <td>
                                                    {estab.local}
                                                </td>
                                                <td className="App-table-update" onClick={() => this.update(estab.id)}>
                                                    ATUALIZAR
                                                </td>
                                                <td className="App-table-delete" onClick={() => this.delete(estab.id)}>
                                                    DELETAR
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>


                        </table>
                        
                        <button className='App-button' type='button' onClick={() => this.props.goBack(0)}>
                            VOLTAR
                        </button>
                    </header>
                </div>
            )
        } else {
            return(
                <div className='App'>
                    <header className='App-header'>
                        <h2>Carregando...</h2>
                    </header>
                </div>
            )
        }
    }

    componentDidMount(){
        this.getData();
    }

}

export default ListData;