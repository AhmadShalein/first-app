import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        numOfPets : 0
      }
    }

    incrementNumOfPets = () => {
      this.setState ({
        numOfPets : this.state.numOfPets+1
      })
    }
    
    render(){
      return(
        <div>
           {/* <h2 className='title'>{this.props.title}</h2>
           <img onClick={this.incrementNumOfPets} src={this.props.url} alt={this.props.discription} title={this.props.title} />
           <p className='discription'>{this.props.discription}</p> */}

           <Card style={{ width: '30rem' }}>
           <Card.Img variant="top" src={this.props.url} onClick={this.incrementNumOfPets} />
           <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text>Number of pets ❤ : {this.state.numOfPets}</Card.Text>
           <p>{this.props.discription}</p>
           <Button variant="primary">Go somewhere</Button>
           </Card.Body>
           </Card>
        </div>
      )
    }
  }
  
  export default HornedBeasts;