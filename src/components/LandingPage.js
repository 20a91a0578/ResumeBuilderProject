import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function LandingPage() {
  // const carouselItems = [
  //   {
  //     id: 1,
  //     title: 'First Slide',
  //     image: 'https://picsum.photos/800/400?text=First+Slide',
  //     description: 'This is the first slide'
  //   },
  //   {
  //     id: 2,
  //     title: 'Second Slide',
  //     image: 'https://picsum.photos/800/400?text=Second+Slide',
  //     description: 'This is the second slide'
  //   },
  //   {
  //     id: 3,
  //     title: 'Third Slide',
  //     image: 'https://picsum.photos/800/400?text=Third+Slide',
  //     description: 'This is the third slide'
  //   }
  // ];
  
  
  return (
    <><br/><br/>
      <div style={{textAlign:'center'}}>
      <Carousel style={{height:'50vh'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=First+Slide"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=Second+Slide"
          alt="Second Slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=Third+Slide"
          alt="Third Slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Link to="/create-resume"><button>Create New CV</button></Link>

      </div>
      <footer>
        <p>&copy; 2023 Resume Builder. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage;

