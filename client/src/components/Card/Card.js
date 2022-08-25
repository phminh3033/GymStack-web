import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function BasicExample() {
  return (
    <Card style={{ width: '25rem', height: '55rem' }}>
      <Card.Img variant="top" src="https://cali.vn/storage/app/media/ca-phe-bao-nhieu-calo-thumb.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;