import './App.css';
import React, {Component} from 'react';
import api from './api';

class App extends Component{
  
  state = {
    filmes: [],
  }
  async componentDidMount(){
    const response = await api.get('marvel');

    this.setState({filmes : response.data});
  }
  render(){
    //almacena la data del endpoint
    const {filmes} = this.state;
    return (
      <div className="container">
        <h1 className="text-center mt-5">Peliculas de Marvel</h1>
        <div className="row">
            {filmes.map(filme =>
              <h5>{filme.show.name}</h5>
            )}
        </div>
      
      </div>
    )
  }
}

export default App;
