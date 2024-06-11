import Carousel from 'react-bootstrap/Carousel';
import example1 from './images/example1.jpg/'
import example2 from './images/example2.jpg/'
import example3 from './images/example3.jpg/'


function ImgCarousel() {
  return (
    <div>
        <Carousel >
      <Carousel.Item>
        <img style={{width:100,height:'50vh'}}
          className="d-block w-100"
          src={example1}
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:100,height:'50vh'}}
          className="d-block w-100"
          src={example2}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:100,height:'50vh'}}
          className="d-block w-100"
          src={example3}
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImgCarousel;