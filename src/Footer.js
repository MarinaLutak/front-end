import React, {useState, Component} from 'react';
import {Link} from "react-router-dom";
import logoinst from './v982-d3-04.png';
export class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <div className="toin">
                <a href='https://www.instagram.com/lamiss_candle/'>

                    <img className="logoinst" src={logoinst} alt="logoinst"/>
                    <p className="lab2">lamiss_candle</p>

                </a>
                </div>
            </div>
        );
    }
}
export default Footer;
