import React, { PropTypes, Component } from 'react'
import d3 from 'd3'


class PieChart extends Component {

  constructor() {
    super()
    this.colors = d3.scale.category20()
    this.pie = d3.layout.pie().value((d) => d.value);
    this.arc = d3.svg.arc()
  }

  render() {
    let { size = 400, data, colors } = this.props
    let r = size / 2
    let arc = this.arc.outerRadius(r);
    let pie = this.pie(data)

    return (
      <div>
          <svg width={ size } height={ size }>
            <g transform={`translate(${r}, ${r})`}>
              {
                pie.map((d,i) => {
                  return (
                    <g key={ `${d}-${i}` }>
                      <path d={ arc(d) } fill={ this.colors(i) } />
                    </g>
                  )
                })
              }
            </g>
          </svg>
      </div>
    )
  }
}

export default PieChart
