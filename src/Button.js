import React, {Component} from 'react';
import './Tabs.css'

class Button extends Component {
    render(){
        return(
            <button onClick = {this.props.onClick} className="tablinks" >{this.props.button}</button>
        )
    }
}
export default Button;