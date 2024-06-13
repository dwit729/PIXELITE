import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardReview() {
  return (
        <div className='d-flex flex-row flex-wrap justify-content-around'>
        <Card style={{width:'18rem'}} className='my-5 mx-3'>
        <Card.Img style={{height:'180px', width:'36.5vh', objectFit:'cover', objectPosition:'center top'}} variant="top" src="https://assets.teenvogue.com/photos/613b5fd248eda7f19679403c/1:1/w_1175,h_1175,c_limit/1235152164" 
        />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{width:'18rem'}} className='my-5 mx-3'>
        <Card.Img style={{height:'180px', width:'36.5vh', objectFit:'cover',objectPosition:'0px -110px'}} variant="top" src="https://static.india.com/wp-content/uploads/2024/02/Rihanna4.jpg?impolicy=Medium_Widthonly&w=400&h=800" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{width:'18rem'}} className='my-5 mx-3'>
        <Card.Img style={{height:'180px', width:'36.5vh', objectFit:'cover', objectPosition:'center top'}} variant="top" src="https://i8.amplience.net/i/naras/MI0005298282-MN0000994823" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{width:'18rem'}} className='my-5 mx-3'>
        <Card.Img style={{height:'180px', width:'36.5vh', objectFit:'cover'}} variant="top" src="https://variety.com/wp-content/uploads/2023/01/Doja-Cat-16x9-4.jpg?w=1000&h=563&crop=1"  />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>        
        </div>
      

  );
}

export default CardReview;