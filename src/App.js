import React from 'react';
import './App.css';
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import { Line } from 'react-chartjs-2';



class App extends React.Component {

  state = {
    currentWord: '',
    definition: '',
    etymology: '',
    data: '',
    content: '',
    setContent: '',
    chartData: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [{
        label: "Usage over Time",
        backgroundColor: "rgba(255, 0, 255, 0.75)",
        data: [4, 5, 1, 10, 32, 2, 12]
      }]
    }
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

  setTooltipContent = (value) => {
    this.setState({ content: value })
  }

  setGraphData = (label, data) => {
    this.setState({
      chartData: {
        labels: label,
        datasets: [
          {
            label: "Usage over Time",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: data
          }
        ]
      }
    })
  }

  sanitise = () => {
    const newLabels = []
    const newDataset = []
    const newData = this.state.data.split('|')
    const myData = newData.map(item => item.split(":"))
    myData.forEach(element => {
      newLabels.push(2008 - element[0])
      newDataset.push(element[1])
    })
    const finalDataset = newDataset.map(element => (Number(element) / 100))
    // return [newLabels, finalDataset]
    this.setGraphData(newLabels, finalDataset)
  }

  // this.renderGraph(this.state.data)

  render() {
    return (
      <>
        <div className="scrolls">
          <div className="up"><span>↑</span>
            <div className="center"><span>mouse <br></br> scrolling </span> </div>
          </div>
          <div className="down"><span>↓</span></div>
        </div>
        <div className="smooth">
          <div className="header">
            <ul>
              <li><a href="#search">search</a></li>
              <li><a href="#overview">overview</a></li>
              <li><a href="#etymology">etymology</a></li>
              <li><a href="#usage" onClick={this.sanitise}>usage</a></li>
            </ul>
          </div>
          <section id="search">
            <h2>The Gist</h2>
            <form onSubmit={this.fetchIt}>
              <div className="ui input focus">
                <input onChange={this.handleChange} placeholder="Search"></input>
                <button className='ui button' type='submit' >Search</button>
              </div>
            </form>
          </section>





          <section id="overview">
            <h2>overview</h2>
            <div className='row'>
              <div className='col-2 descriptionText'>
                <p>{this.state.definition} my butt </p>
              </div>
              <div className='col-6 offset-1'>
                <MapChart setTooltipContent={this.setTooltipContent} />
                <ReactTooltip>{this.state.content}</ReactTooltip>
              </div>
            </div>

          </section>



          <section id="etymology">
            <h2>etymology</h2>
            <p>{this.state.etymology} </p>
          </section>



          <section id="usage">
            <h2>usage</h2>
            <div className='row'>
              <div className='col-3 offset-1'>
                <p className='descriptionText'>To the right is the usage data for the word "{this.state.currentWord}". <br></br><br></br> By hovering on any point, you can see the number of times a word can be found in a sample text of One Million words. <br></br><br></br> {this.state.chartData.datasets[0].data[4]} </p>
              </div>
              <div className='col-6 offset-1'>
                <div className='dataGraph' style={{ position: 'relative', width: 700, height: 350 }}>
                  <Line
                    options={{
                      responsive: true
                    }}
                    data={this.state.chartData}
                  />
                </div>
                <div className='col-1'></div>
              </div>
            </div>


          </section>

        </div>

      </>
    );
  }
}

export default App;
