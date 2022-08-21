
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import skyscraper from './skyscraper.jpg';



function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Container  style={{width: '400px', height:'1000px' , overflow:'hidden'}}>
          
        <Form>
        <Row >
          <Col>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="address" placeholder="Example@email.com"/>
            <Form.Text className="text-muted" >We will never show your email address, you can trust us</Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
          <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          </Col>
          </Row>
          <Button variant="secondary" type="submit" className='mb-3'>Login</Button>
          </Form>
          
        <Card className='mb-3'style ={{color: '#000'  }}>
          <Card.Img src={skyscraper}  style={{height:'20vh'}}/>
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of react bootstrap cards</Card.Text>
            <Button>Read More</Button>
          </Card.Body>
          
        </Card>
        
        <Breadcrumb className='d-flex justify-content-center'>
        <Breadcrumb.Item>one</Breadcrumb.Item>
        <Breadcrumb.Item>two</Breadcrumb.Item>
        <Breadcrumb.Item>three</Breadcrumb.Item>
        <Breadcrumb.Item active>four</Breadcrumb.Item>
        </Breadcrumb>
        
        <Alert>This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
