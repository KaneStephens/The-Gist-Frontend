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
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Usage over Time",
          backgroundColor: "rgba(255, 0, 255, 0.75)",
          data: [4, 5, 1, 10, 32, 2, 12]
        }
      ]
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
    this.setState({ setContent: value })
  }

  setGraphData = (label, data) => {
    this.setState({
      chartData: {
        labels: label,
        datasets: [
          // add the rest of the data here
        ]
      }
    })
  }

  sanitise = (data) => {
    const newLabels = []
    const newDataset = []
    const newData = data.split('|')
    const myData = newData.map(item => item.split(":"))
    myData.forEach(element => {
      newLabels.push(element[0])
      newDataset.push(element[1])
    })
    const finalDataset = newDataset.map(element => (Number(element) / 100))

    console.log(newLabels)

    console.log(finalDataset)
  }


  // setGradientColor = (canvas, color) => {
  //   const ctx = canvas.getContext('2d');
  //   const gradient = ctx.createLinearGradient(0, 0, 600, 550);
  //   gradient.addColorStop(0, color);
  //   gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
  //   return gradient;
  // }

  // getChartData = canvas => {
  //   const data = this.state.chartData;
  //   if (data.datasets) {
  //     let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75"]
  //     data.datasets.forEach((set, i) => {
  //       set.backgroundColor = this.setGradientColor(canvas, colors[i]);
  //       set.borderColor = "white";
  //       set.borderWidth = 2;
  //     })
  //   }
  // }

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
              <li><a href="#usage">usage</a></li>
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
            <p>{this.sanitise(this.state.data)} </p>
          </section>




        </div>
      </>





    );
  }
}

export default App;
