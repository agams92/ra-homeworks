
class ProgressBar extends React.Component {

  componentDidMount() {
    this.progessChart.width = 200;
    this.progessChart.height = 135;
    this.renderCircles();
  }

  componentDidUpdate() {
    this.renderCircles();
  }

  renderCircles() {
    const width = this.progessChart.width;
    const height = this.progessChart.height;
    const x = width / 2;
    const y = height / 2;
    const onePercent = 360 / 100;
    const readedAmount = 100 * this.props.completed / this.props.total;
    const result = onePercent * readedAmount;
    const ctx = this.progessChart.getContext('2d');
    for(let degrees = 0; degrees <= result; degrees++) {
      ctx.clearRect(0,0,width,height);

      ctx.beginPath();
      ctx.arc(x,y,52,(Math.PI/180) * 270,(Math.PI/180) * (270 + 360) );
      ctx.strokeStyle = '#4ca89a';
      ctx.lineWidth = '7';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x,y,45,(Math.PI/180) * 270,(Math.PI/180) * (270 + degrees) );
      ctx.strokeStyle = '#96d6f4';
      ctx.lineWidth = '7';
      ctx.stroke();

      ctx.fillStyle = 'black';
      ctx.font = '35px Helvetica';
      ctx.textAlign = "center";
      ctx.fillText(`${readedAmount.toFixed()}%`, x + 5, y + 10)
    }
  }

  render () {
    return <canvas id="progressCanvas" className="progress" ref={canvas => this.progessChart = canvas} />
  }
}