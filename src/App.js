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

  hasWord = () => this.state.definition.length > 0

  scrollToDefinition = () => {
    window.location.href = '#definition'
    // window.scrollTo(0, document.querySelector('#definition'))
  }

  fetchIt = (e) => {
    e.preventDefault()

    this.setState({
      waitingForResponse: true,
      errorMessage: undefined
    })

    fetch('http://localhost:3000/bot', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }, body:
        JSON.stringify({ word: this.state.currentWord })
    })
      .then(res => {
        if (res.ok)
          return res.json()
        else
          res.json().then(error => {
            this.setState({
              waitingForResponse: false,
              errorMessage: error.message
            })
          })
      })
      .then(results => this.setState({
        waitingForResponse: false,
        definition: results['word']['definition'],
        etymology: results['word']['etymology'],
        data: results['word']['frequency']
      }, () => {
        this.scrollToDefinition()
        const [newLabels, finalDataset] = this.sanitise(this.state.data)
        this.setGraphData(newLabels, finalDataset)
      }))
      .catch(() => {

      })

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

  sanitise = (data) => {
    const newLabels = []
    const newDataset = []
    const newData = data.split('|')
    const myData = newData.map(item => item.split(":"))
    myData.forEach(element => {
      newLabels.push(2008 - element[0])
      newDataset.push(element[1])
    })
    const finalDataset = newDataset.map(element => (Number(element) / 100))
    return [newLabels, finalDataset]
  }

  // this.renderGraph(this.state.data)

  render() {
    return (
      <>
        {/* <div className="scrolls">
          <div className="up"><span>↑</span>
            <div className="center"><span>mouse <br></br> scrolling </span> </div>
          </div>
          <div className="down"><span>↓</span></div>
        </div> */}
        <div className="smooth">
          <div className="header">
            <ul>
              <li><a href="#search">search</a></li>
              {
                this.hasWord() && <>
                  <li><a href="#definition">definition</a></li>
                  <li><a href="#etymology">etymology</a></li>
                  <li><a href="#usage">usage</a></li>
                </>
              }
            </ul>
          </div>
          <section id="search">
            <h2>The Gist</h2>
            <form onSubmit={this.fetchIt}>
              <div className="ui input focus">  
                <input required onChange={this.handleChange} placeholder="Search"></input>
                <button className={`ui button${this.state.waitingForResponse ? ' loading' : ''}`} type='submit' >Search</button>
              </div>
              <div>
                {this.state.errorMessage && <p class="error">{this.state.errorMessage}</p>}
              </div>
            </form>
          </section>



          {
            this.hasWord() && <>

              <section id="definition">
                <h2>definition</h2>
                
                  
                  <div>
                    <p className='funText col-6 offset-3'>{this.state.definition}</p>
                  </div>
                  <div className='col-3'></div>
                  {/* <div className='fun'>
                <MapChart setTooltipContent={this.setTooltipContent} />
                <ReactTooltip>{this.state.content}</ReactTooltip>
              </div> */}
              

              </section>



              <section id="etymology">
                <h2>etymology</h2>
                <p className='funText'>{this.state.etymology} </p>
              </section>



              <section id="usage">
                <h2>usage</h2>
                <div className='row'>
                  <div className='col-3 offset-1'>
                    <p className='descriptionText'>
                      To the right is the usage data for the word "{this.state.currentWord}". <br></br><br></br>
                      By hovering on any point, you can see the number of times a word can be found in a sample text of One Million words.
                      <br></br><br></br> 
                    </p>
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

            </>
          }

        </div>

      </>
    );
  }
}

export default App;
