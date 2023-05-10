import React from "react";
import Header from "./components/Header";
import Basement from "./components/Basement";
import {Items} from "./components/Items";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            orders: [],
            items:  [
                {
                    id: 1,
                    title: 'Серый стул',
                    img: 'chair-gray.jpg',
                    desc: 'Description this chair',
                    category: 'chairs',
                    price: 50
                },{
                    id: 2,
                    title: 'Черный стул',
                    img: 'chair-black.jpg',
                    desc: 'Description this chair',
                    category: 'chairs',
                    price: 30
                },{
                    id: 3,
                    title: 'Белый стул',
                    img: 'chair-white.jpg',
                    desc: 'Description this chair',
                    category: 'chairs',
                    price: 150
                }
            ]
        }

        this.addToOrder = this.addToOrder.bind(this);
    }

    render()
    {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders}/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Basement/>
            </div>
        );
    };
    
    addToOrder(item)
    {
        !this.state.orders.filter((stuff) => (item.id === stuff.id)).length
            ?
                this.setState(prevState => ({
                        orders: [...prevState.orders, {...item, count: 1}]
                }))
            :
                this.setState({
                    orders: this.state.orders.map((order) =>
                    {
                        return order.id === item.id
                            ? {...order, count: !order.count ? 2 : order.count + 1}
                            : order;
                    })
                });
    }
}

export default App;
