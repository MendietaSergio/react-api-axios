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
              <div className="col-md-3 mt-5">
                <img src={filme.show.image.medium} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{filme.show.name}</h5>
                    <p className="card-text module line-clamp">{filme.show.summary}</p>
                    <div className="text-center">
                        <a href={filme.show.url} className="btn-primary" target="_blank">Ver detalle</a>
                    </div>
                </div>
              </div>
            )}
        </div>
      
      </div>
    )
  }
}

export default App;
