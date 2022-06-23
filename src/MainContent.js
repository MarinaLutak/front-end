import React, {useState, Component} from "react";
import HeadBar from "./HeadBar";
import img from "./svechi-makro-fon.jpeg"
import Footer from "./Footer";

export class MainContent extends Component {

    render() {
        return (
            <div>
                <HeadBar len={this.props.orders.length}/>
                <div className="fon1"></div>
                <div className="cont">
                    {this.props.items.slice(0,3).map(el=>(<div className="item">
                        <img alt="img1" src={el.img} className='img1'/>
                        <div className="descr">
                            <p className="lab">{el.title}</p>
                            <p className="price">{el.price} грн</p>
                            <button className="floating-button" onClick={() => this.props.onAdd(el)}>
                                Додати в кошик
                            </button>
                        </div>
                    </div>))}
                </div>
                <div className="cont">
                    {this.props.items.slice(3,6).map(el=>(<div className="item">
                        <img alt="img1" src={el.img} className='img1'/>
                        <div className="descr">
                            <p className="lab">{el.title}</p>
                            <p className="price">{el.price} грн</p>
                            <button className="floating-button" onClick={() => this.props.onAdd(el)}>
                                Додати в кошик
                            </button>
                        </div>
                    </div>))}
                </div>
                <div className="cont">
                    {this.props.items.slice(6,9).map(el=>(<div className="item">
                        <img alt="img1" src={el.img} className='img1'/>
                        <div className="descr">
                            <p className="lab">{el.title}</p>
                            <p className="price">{el.price} грн</p>
                            <button className="floating-button" onClick={() => this.props.onAdd(el)}>
                                Додати в кошик
                            </button>
                        </div>
                    </div>))}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}


export default MainContent;