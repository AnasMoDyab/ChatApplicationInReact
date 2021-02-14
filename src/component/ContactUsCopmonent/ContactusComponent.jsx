import {Row, Col, Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody} from "reactstrap";
import {useState} from "react";
import ConfirmButton from "../ButtonComponent/ConfirmButton";
import Chat from "../ChatComponent/ChatComponent";


const Contactus= ()=> {


    const [isModalOpen, setIsModalOpen]= useState(false);
    const toggleModal =()=> {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className="container">
       <Row>
           <Col md={5}>
               <Card >
                   <CardHeader  style={{
                       background: 'linear-gradient(45deg, #F22B8B 30%, #FF8E53 90%)',
                       borderRadius: 3,
                       border: 10,
                       color: 'white',
                       height: 65,
                       padding: '10 30px',
                       marginBottom:20,
                       fontSize:'15px',
                       textDecoration:'blond',

                       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                       textAlign: 'center'
                   }}>
                       <h2>Location Information</h2>
                   </CardHeader>
                   <CardBody>
                       <Col md={{size:8, offset:2}}>
                           <h5>Our Address</h5>
                           <address>
                               Trimvein 6 <br/>
                               Oslo 0372<br/>
                               Norway<br/>
                               <i className="fa fa-phone"></i>: +47 471 85 692<br/>
                               <i className="fa fa-envelope"></i>: <a
                               href="mailto:confusion@food.net">anasdy4@gmail.com</a>
                           </address>
                           <ConfirmButton
                               onClick={toggleModal}
                           >
                               Chat with us
                           </ConfirmButton>
                       </Col>
                   </CardBody>
               </Card>

            </Col>
           <Col md={6}>
               <Card >
                   <CardHeader  style={{
                       background: 'linear-gradient(45deg, #F22B8B 30%, #FF8E53 90%)',
                       borderRadius: 3,
                       border: 10,
                       color: 'white',
                       height: 65,
                       padding: '10 30px',
                       marginBottom:20,
                       fontSize:'30px',
                       textDecoration:'blond',

                       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                       textAlign: 'center'
                   }}>
                       <h2>Our Map</h2>
                   </CardHeader>
                   <CardBody>
                       <Col md={{size:8, offset:2}}>
                           <h5>Our Address</h5>
                           <address>
                               Trimvein 6 <br/>
                               Oslo 0372<br/>
                               Norway<br/>
                               <i className="fa fa-phone"></i>: +47 471 85 692<br/>
                               <i className="fa fa-envelope"></i>: <a
                               href="mailto:confusion@food.net">anasdy4@gmail.com</a>
                           </address>
                       </Col>
                   </CardBody>
               </Card>


           </Col>
       </Row>


            <Modal size="lg" isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Chat />
                </ModalBody>
            </Modal>

        </div>
    );
}

export default Contactus;