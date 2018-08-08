class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.isFixed = this.isFixed.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.state = { fixed: false };
  }

  componentDidMount() {
    this.searchBox = document.querySelector('.search-box');
    this.header = document.querySelector('.header');
    this.isFixed()
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  isFixed() {
    const headerBounds = this.header.getBoundingClientRect();
    if (this.searchBox.getBoundingClientRect().y <= 0 && headerBounds.height < headerBounds.y * -1) return true;
    return false;
  }

  setPosition() {
    if (this.isFixed()) {
      this.setState({fixed: true})
    } else {
      this.setState({fixed: false})
    }
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }
}
