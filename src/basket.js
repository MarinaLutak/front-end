import React, {Component} from 'react';
import HeadBar from './HeadBar'
import './styles.css'
import {City} from "./novapochtacity";
import {FaShoppingCart, FaTrash} from "react-icons/fa";
import {Link} from "react-router-dom";

class Basket extends Component {

    render() {
        return (

<div><div className="back">
    <header className='head' style={{background: "white"}} >
        <div>
            <Link to="/"><span className='logo'>Lamiss candles</span></Link>
            <h4 className="count">{this.props.len}</h4>
            <Link to='/basket'><FaShoppingCart className={'shop-cart-button'}/></Link>
        </div>
    </header>

                <div className="ofor">
                    <div className="inf">
                <p className="l1">Ваше замовлення</p>
                <div className="ord">
                    {
                        this.props.orders.map(el => (
                            <div>
                                <img src={el.img} className="ordimg"/>
                                <p className="inford1">{el.title}</p>
                                <p className="inford2">{el.price} грн</p>
                                <FaTrash className="delete-icon" onClick={()=>this.props.onDelete(el.id)}/>
                            </div>

                        ))
                    }
                </div>
                <h2 className="l2">Сума до сплати {this.props.orders.reduce((sum, n) => sum + +n.price, 0)} грн</h2></div>
                <div className="nov">
                    <p className="l3">Оформити замовлення</p>
                    <p className="l4">Місто</p>
                    <City></City>
                </div>
                </div>
            </div>
    </div>

        );
    }
}

export default Basket;