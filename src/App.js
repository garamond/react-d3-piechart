import React, { Component } from 'react'

import PieChart from './PieChart'

class App extends Component {
  render() {
    let data = d3.range(1,10).map((v,i) => ({key: `item-${i}`, value: i*v}))
    return <PieChart data={data} />
  }
}

export default App
