import React, {Component} from 'react';
import './Tabs.css';


class TabInfo extends Component {
    render(){
        return (<div className="tabcontent">
        <img src = {this.props.image} className = 'image'/>
        <div className = "book-info-container">
          <h2>{this.props.title} : {this.props.subtitle}</h2>
          {/* <h2>{this.props.subtitle}</h2> */}
          <h3>Author: {this.props.author}</h3>
          <p>Published: {this.props.published}</p>
          <p>Description: {this.props.info}</p>


        </div>
      </div>)
    }
}

export default TabInfo;