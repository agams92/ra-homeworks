'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: VIEW_MODULE
    }
  }

  renderLayout() {
    if (this.state.icon === VIEW_MODULE) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products)} />);
  }

  getShopItems(products) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (this.state.icon === VIEW_MODULE) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }

  changeView(){
    this.state.icon === VIEW_MODULE ? this.setState({icon: VIEW_LIST}) : this.setState({icon: VIEW_MODULE});
    console.log(this.state.icon)
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.icon}
            onSwitch={this.changeView.bind(this)} />
        </div>
        {this.renderLayout()}
      </div>
    );
  }
}
