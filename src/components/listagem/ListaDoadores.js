import React from 'react'
import{
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap'

const ListaDoadores = ({list}) => {

    return(
        <>
            {
                list.map(use =>
                    <Card>
                    <CardBody>
                        <Row>
                        <Col md='4'>
                        <h4>{use.username}</h4>
                        </Col>
                        <Col md='4'>
                        <h4>{use.data}</h4>
                        </Col>
                        <Col md='4'>
                        <h4>{
                            use.social
                            }</h4>
                        </Col>
                        </Row>
                    </CardBody>
                    </Card>
                    )
            }
        </>
    )
}

export default ListaDoadores;