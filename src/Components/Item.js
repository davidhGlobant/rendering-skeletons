import React, { Component } from "react";
import Skeleton from 'react-loading-skeleton';




class ItemComponent extends Component {

  showPhoto = () => {
    return this.props.photo.url ? (<div>
      <img src={this.props.photo.url} />
    </div>):(<div style={{ height: '200px', background: 'LightGrey'  }}>
      
    </div>)
  }
  
  render() {  
    return (
      <div>
          <h1>{this.props.photo.title || <Skeleton/>}</h1>
          {this.showPhoto()}
      </div>
    );
  }
}


export default ItemComponent