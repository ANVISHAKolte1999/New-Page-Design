import React from 'react'
import {Row,Col,Container,Card,Form,Dropdown,Button} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function session() {
    return (
        <div>
       <Button style={{marginLeft:"85%", marginTop:"-2%"}}>+ Add Course</Button>
  <br></br><br></br>
        <Card style={{ width: '76rem' }}>
        <Card.Body>
        <Typography variant="h6" gutterBottom component="div">
Setting
      </Typography>
      <br></br>
      <Row>
    <Col></Col>
    <Col> </Col>
    <Col style={{marginLeft:"400px"}}> <Button style={{marginLeft:"3%", marginTop:"-7%"}}>Export</Button>
    <Button style={{marginLeft:"50%", marginTop:"-28%"}}>Filter</Button>
    </Col>
  
  </Row>
        <Container>
              <Row>
    <Col>

    <Card style={{ width: '22rem' }}>
  <Card.Body>
  <Row>
    <Col></Col>
    <Col> </Col>
    <Col style={{marginLeft:"900px"}}> <Button style={{marginLeft:"15%", marginTop:"-7%"}}>Export</Button>
    <Button style={{marginLeft:"150%", marginTop:"-78%"}}>Filter</Button>
    </Col>
  
  </Row>
  <Typography variant="h6" gutterBottom component="div">
        .Main Menu
      </Typography>
<br></br>
<Typography variant="h6" gutterBottom component="div">
Genereal
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" gutterBottom component="div">
Optional Setting
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
Registration
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
Email
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
Payements
      </Typography>
     </Card.Body> </Card>
  </Col>
    <Col><Card style={{ width: '45rem' }}>
  <Card.Body>
  
  <Typography variant="h6" gutterBottom component="div">
Course
      </Typography>
      <Container>
      <Col xs={6} md={4}>
      
    <Form.Control type="email" placeholder="type of name here" />
    </Col>
    <Col xs={6} md={4}>
      
    <Form.Control style={{marginLeft:'115%',marginTop:'-18%'}} type="email" placeholder="Description(optional)" />
    </Col>
    <br></br><br></br>
    <Typography variant="h6" gutterBottom component="div">
Pre-Placement
      </Typography>
     
      <Col xs={6} md={4}>
      
    <Form.Control type="email" placeholder="type of name here" />
    </Col>
    
    <Col xs={6} md={4}>
      
    <Form.Control style={{marginLeft:'115%',marginTop:'-18%'}} type="email" placeholder="Description(optional)" />
    </Col>
  </Container>
  <br></br>
  <Row>
    
    <Col xs={{ order: 'first' }}> <Typography variant="h6" gutterBottom component="div">
Certificate
      </Typography></Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col><FormControlLabel control={<Checkbox defaultChecked />} label="Yes" /></Col>
    <Col><FormControlLabel control={<Checkbox defaultChecked />} label="No" /></Col>
    <Col>  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown></Col>
  </Row>
      
     
   

  </Card.Body></Card></Col> 
    <Col>.</Col>
  </Row>
</Container><br></br><Button style={{marginLeft:'75%'}} variant="outline-danger">Delete</Button>{' '}
<Button type="submit">Update</Button>{' '}</Card.Body></Card></div>
       
    )
}

export default session
