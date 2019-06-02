import React from 'react'
import{
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap'

const NameList = () => {
    const user=[
        {
            name : "Bruce",
            data : "05/10/2019",
            social :"whats"
        },
        {
            name : "Arroz",
            data : "05/10/2019",
            social :"whats"
        },
        {
            name : "Caldo de Mocoto",
            data : "05/10/2019",
            social :"whats"
        }
    ]
    const names = ['Bruce',"Clark"];

    return(
        <>
            {
                user.map(use =>
                    <Card>
                    <CardBody>
                        <Row>
                        <Col md='4'>
                        <h4>{use.name}</h4>
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
export default NameList;