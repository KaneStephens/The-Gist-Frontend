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

  renderGraph = (data) => {
    let values = this.sanitise(data)
    let [newLabels, newDataset] = values
    this.setGraphData(newLabels, newDataset)
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
      newLabels.push(element[0])
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
            <h2>search</h2>
            <form onSubmit={this.fetchIt}>
              <div className="ui input focus">
                <input onChange={this.handleChange} placeholder="Search"></input>
                <button className='ui button' type='submit' >Search</button>
              </div>
            </form>
          </section>





          <section id="overview">
            <h2>overview</h2>
            
              <MapChart setTooltipContent={this.setTooltipContent} />
              <ReactTooltip>{this.state.content}</ReactTooltip>
            
            <p>{this.state.definition} </p>
          </section>



          <section id="etymology">
            <h2>etymology</h2>
            <p>{this.state.etymology} </p>
          </section>



          <section id="usage">
            <h2>usage</h2>
            <div style={{ position: 'relative', width: 600, height: 550 }}>
              <Line
                options={{
                  responsive: true
                }}
                data={this.state.chartData}
              />
            </div>
          <p></p>
          </section>




        </div>
      </>





    );
  }
}

export default App;
