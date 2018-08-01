
class ProgressBar extends React.Component {
  render() {
    return (
        <CircleChart />
    );
  }
}

class CircleChart extends React.Component {
  componentDidMount() {
    const progessChart = new Chart (this.progessChart, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [100],
          backgroundColor: 'red'
        }]
      },
      options: {
        cutoutPercentage: 50,
        responsive: true
      }
    }) 
  }
  render () {
    return <canvas id="progressCanvas" className="progress" ref={canvas => this.progessChart = canvas} />
  }
}