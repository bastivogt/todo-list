import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.name = "Seppel";
        

    }


    clickHandler() {
        if(typeof this.props.clickHandler === 'function') {
            this.props.clickHandler(this);
        }
    }


    render() {
        return (
            <div className="Button">
                <button onClick={this.clickHandler}>{this.props.label}</button>
            </div>
        );
    }
}


export default Button;