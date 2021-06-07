import React from 'react';

class HornedBeasts extends React.Component {
    render(){
      return(
        <div>
           <h2 className='title'>{this.props.title}</h2>
           <img src={this.props.url} alt={this.props.discription} title={this.props.title} />
           <p className='discription'>{this.props.discription}</p>
        </div>
      )
    }
  }
  
  export default HornedBeasts;