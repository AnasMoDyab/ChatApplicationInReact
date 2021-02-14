import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";

const CardForm = (props)=> {
    return (<Row>
        <Col md={{size: 6, offset:3}}  >
            <Card >
                <CardHeader  style={{
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
                    {props.message}
                </CardHeader>
                <CardBody>
                    {props.component}
                </CardBody>
            </Card>
        </Col>
    </Row>);
}

export default CardForm;