import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Items from './items';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [{
        id: 1,
        img: "coffee-1.jpg",
        name: "Irish coffee",
        description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        price: "7.00",
      },

      {
        id: 2,
        img: "coffee-2.jpg",
        name: "Kahlua coffee",
        description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        price: "7.00",
      },

      { id: 3,
        img: "coffee-3.jpg",
        name: "Honey raf",
        description: "Espresso with frothed milk, cream and aromatic honey",
        price: "5.50",
      },

      { id: 4,
        img: "coffee-4.jpg",
        name: "Ice cappuccino",
        description: "Cappuccino with soft thick foam in summer version with ice",
        price: "5.00",
      },

      { id: 5,
        img: "coffee-5.jpg",
        name: "Espresso",
        description: "Classic black coffee",
        price: "4.50",
      },

      { id: 6,
        img: "coffee-6.jpg",
        name: "Latte",
        description: "Espresso coffee with the addition of steamed milk and dense milk foam",
        price: "5.50",
      },

      { id: 7,
        img: "coffee-7.jpg",
        name: "Latte macchiato",
        description: "Espresso with frothed milk and chocolate",
        price: "5.50",
      },

      { id: 8,
        img: "coffee-8.jpg",
        name: "Coffee with cognac",
        description: "Fragrant black coffee with cognac and whipped cream",
        price: "6.50",
      }]
    }
    this.addOrder=this.addOrder.bind(this);
    this.deleteOrder=this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addOrder}/>
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
this.setState({orders:this.state.orders.filter(el=>el.id!==id)})
  }

  addOrder(item) {
    const isUnique = !this.state.orders.some(order => order.id === item.id);
    if (isUnique) {
      this.setState(prevState => ({
        orders: [...prevState.orders, item],
      }));
    }
  }
  
}

export default App;
