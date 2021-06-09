import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

class HornedBeasts extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        numOfPets : 0,
        show : false
      }
    }

    incrementNumOfPets = () => {
      this.setState ({
        numOfPets : this.state.numOfPets+1
      });
      this.handleShow();
    }

    handleShow = () => {
      this.setState ({
        show : true
      })
    }

    handleClose = () => {
      this.setState ({
        show : false
      })
    }
    
    render(){
      return(
        <div>
           {/* <h2 className='title'>{this.props.title}</h2>
           <img onClick={this.incrementNumOfPets} src={this.props.url} alt={this.props.description} title={this.props.title} />
           <p className='description'>{this.props.description}</p> */}

           <Card style={{ width: '30rem' }}>
           <Card.Img variant="top" src={this.props.url} onClick={this.incrementNumOfPets} />
           <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text> ❤️ : {this.state.numOfPets}</Card.Text>
           <p>{this.props.description}</p>
           <Button variant="primary">Go somewhere</Button>
           </Card.Body>
           </Card>
           <SelectedBeast show={this.state.show} closeFunction={this.handleClose} title={this.props.title} description={this.props.description} image_url={this.props.url} />
        </div>
      )
    }
  }
  
  export default HornedBeasts;