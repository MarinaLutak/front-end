import React, {useState, Component} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";
import './styles.css'

export class HeadBar extends Component {
    state = {
        color: 'transparent'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 800) {
            this.setState({color: 'white'})
        }
        else {
            this.setState({color: 'transparent'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
        return (
            <header className='head' style={{background: this.state.color}} >
                <div>
                    <Link to="/"><span className='logo'>Lamiss candles</span></Link>
                    <h4 className="count">{this.props.len}</h4>
                    <Link to='/basket'><FaShoppingCart className={'shop-cart-button'}/></Link>
                </div>
            </header>
        );
    }
}

export default HeadBar;
