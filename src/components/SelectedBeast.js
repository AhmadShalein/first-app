import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Card, Button} from "react-bootstrap";

class SelectedBeast extends React.Component {

    render(){
        return(
            <div>
                <Modal show={this.props.show} onHide={this.props.closeFunction}>
                <Modal.Header closeButton>
                    <Modal.Title onClick={this.props.closeFunction}>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                     <Card.Img src={this.props.image_url}/>
                    <Card.Body>
                     <Card.Title>{this.props.title}</Card.Title>
                     <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                    </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.closeFunction}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
                )
            }
        }

export default SelectedBeast;