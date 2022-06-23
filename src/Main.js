import React, {Component} from 'react';
import image1 from "./image1.jpeg";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";
import image9 from "./image9.jpg";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Basket from "./basket";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [{id: 1, title:'Свічка Buble', img: image1, price:180},
                {id: 2, title:'Свічка Давід', img: image2, price:160},
                {id: 3, title:'Свічка геометрична', img: image3, price:140},
                {id: 4, title:'Свічка Coconut', img: image4, price:320},
                {id: 5, title:'Свічка Caramel', img: image5, price:320},
                {id: 6, title:'Свічка Vanilla', img: image6, price:320},
                {id: 7, title:'Масажна свічка з олією ши', img: image7, price:250},
                {id: 8, title:'Масажна свічка з аргановою олією', img: image8, price:230},
                {id: 9, title:'Масажна свічка з олією авокадо', img: image9, price:240}]}
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App items={this.state.items} onAdd={this.addToOrder} orders={this.state.orders} />} />
                    <Route path="/basket" element={<Basket orders={this.state.orders} len={this.state.orders.length} onDelete={this.deleteOrder}/>} />
                </Routes>
            </BrowserRouter>
        );
    }
    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el=>el.id !== id)})
    }
    addToOrder(item){
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default Main;