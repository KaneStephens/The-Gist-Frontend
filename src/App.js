import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    currentWord: '',
    definition: '',
    etymology: '',
    data: ''
  }

  fetchIt = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/bot', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }, body:
        JSON.stringify({ word: this.state.currentWord })
    })
      .then(res => res.json())
      .then(results => this.setState({
        definition: results['word']['definition'],
        etymology: results['word']['etymology'],
        data: results['word']['frequency']
      }))

  }

  handleChange = (e) => {
    this.setState({ currentWord: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.fetchIt}>
          <div className="ui input focus">
            <input onChange={this.handleChange} placeholder="Search"></input>
            <button className='ui button' type='submit' >Search</button>
          </div>
          <p>{this.state.definition} </p>
          <p>{this.state.etymology} </p>
          <p>{this.state.data} </p>
        </form>

      </div>
    );
  }
}

export default App;
