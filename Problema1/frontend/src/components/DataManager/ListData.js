import React, { Component } from 'react';
import api from '../API/Api';
import UpdateData from './UpdateData';


class ListData extends Component {

    state = {
        data: [],
        loaded: false,
        updateScreen: false
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
            this.props.goBack(0);
        })
        
        
    }

    update = (data) => {
        this.setState({
            updateScreen: true,
            data: data,
        })
    }

    delete = (id) => {
        api.delete('/estabelecimentos/'+id, {}).then(res => {
            console.log(res);
            alert("Estabelecimento removito!")
            this.props.goBack(0);

        }).catch(error => {
            alert("Erro inesperado...");
            console.log(error);
            this.props.goBack(0);
        })
    }

    goBack = () => {
        this.setState({
            updateScreen: false,
        })
    }

    render(){

        if(this.state.updateScreen){
            return(
                <UpdateData data={this.state.data} goBack={this.props.goBack}/>
            )
        }

        else {
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
                                                    <td className="App-table-update" onClick={() => this.update(estab)}>
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

        }

        
    componentDidMount(){
        this.getData();
    }

}

export default ListData;