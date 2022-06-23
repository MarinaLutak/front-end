import React from 'react'
import MainContent from './MainContent';


class App extends React.Component{
    render()
    {
        return (

            <div className="App">
                    <MainContent items={this.props.items} onAdd={this.props.onAdd} orders={this.props.orders}></MainContent>
            </div>
        );
    }


}

export default App;
