import React, { Component } from 'react';
import './App.css';

class App extends Component {
  createBlocks() {
    const row = this.state.row
    const num = Math.pow(row, 2)
    const random = Math.floor(Math.random() * num)

    const randomColorBase = Math.floor(Math.random() * 16777215)
    const bgColor = `#${randomColorBase.toString(16)}`

    const randomColor = `#${(randomColorBase - 50).toString(16)}`

    const blocks = []
    for (let i = 0; i < num; i++) {
      if (i === random) {
        blocks.push(
          <div
            key={i}
            className="block"
            style={{
              width: `${(100 / row)}%`,
              height: `${(100 / row)}%`,
              backgroundColor: randomColor
            }}
            onClick={(e) => {
              const nextRow = (row < 7) ? (row + 1) : row
              this.setState({
                row: nextRow
              })
            } }>
          </div>
        )
        continue
      }
      blocks.push(<div key={i} className="block" style={{
        width: `${(100 / row)}%`,
        height: `${(100 / row)}%`,
        backgroundColor: bgColor
      }}></div>)
    }

    return blocks
  }

  constructor(props) {
    super(props)
    this.state = {
      row: 3
    }
  }

  render() {
    return (
      <div className="App">
        {this.createBlocks()}
      </div>
    );
  }
}

export default App;
