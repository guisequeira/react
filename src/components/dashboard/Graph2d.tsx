import React, { Component } from 'react';
import { XYPlot, HorizontalGridLines, XAxis, VerticalGridLines, LineMarkSeries } from 'react-vis';
// import *  as reactVis from 'react-vis';

export default class Graph2d extends Component {
  state = {
    viewport: 'xl'
  }
  // componentWillMount() {
  //   var Graph2d = new vis.Graph2d(this.refs.myRef, dataset, options);
  // }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize() {
    const width = window.innerWidth;
    let viewport;
    if (width < 576) {
      viewport = 'xs'
    } else if (width >= 576 && width < 768) {
      viewport = 'sm'
    } else if (width >= 768 && width < 992) {
      viewport = 'md'
    } else if (width >= 992 && width < 1200) {
      viewport = 'lg'
    } else if (width >= 1200 && width < 1600) {
      viewport = 'xl'
    } else if (width >= 1600) {
      viewport = 'xxl'

    }
    this.setState({ viewport: viewport });

  }
  getMonth(index: number) {
    const month = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return month[index];
  }


  render() {
    const graphSize:any = {
      xl: {
        w: 600,
        h: 230
      },
      xxl: {
        w: 600,
        h: 230
      },
      lg: {
        w: 450,
        h: 230
      },
      md: {
        w: ((window.innerWidth / 3) * 2) - 80,
        h: 230
      },
      sm: {
        w: ((window.innerWidth / 3) * 3) - 120,
        h: 230
      },
      xs: {
        w: ((window.innerWidth / 3) * 3) - 80,
        h: 230
      }
    }
    const view = this.state.viewport ? this.state.viewport : 'lg'
    // const 

    return (
      <XYPlot width={graphSize[view].w} height={graphSize[view].h} stackBy="y">
        <VerticalGridLines />
        <HorizontalGridLines />
        {/* <YAxis /> */}
        <XAxis tickFormat={(v: number) => this.getMonth(v)} hideLine />
        <LineMarkSeries
          size="2"
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{ stroke: '#c2c73a', strokeWidth: '2px' }}
          markStyle={{ stroke: '#c2c73a', fill: '#c2c73a', strokeWidth: '1px', size: 2 }}
          data={[{ x: 1, y: 380 }, { x: 2, y: 420 }, { x: 3, y: 390 }, { x: 4, y: 430 }, { x: 5, y: 660 }, { x: 6, y: 320 }, { x: 7, y: 180 }, { x: 8, y: 220 }, { x: 9, y: 690 }]}
        />

      </XYPlot>
    )
  }
}

