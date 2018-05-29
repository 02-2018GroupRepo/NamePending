import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class CarouselComponent extends Component{

render() {

return(
<Carousel style={{marginLeft: "-15px", marginRight: "-15px"}}>
  <Carousel.Item>
    <img class ="imageOne" width={1400} height={200} alt="900x500" src="http://1.bp.blogspot.com/-Rf16Ui0a7Jk/UaeM5h0U7VI/AAAAAAAAIZU/kcBawlR3GCE/s1600/home+depot+kids+workshop+pins.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img class ="imageTwo" width={1400} height={200} alt="900x500" src="http://www.decoradventures.com/wp-content/uploads/2014/11/Home-Depot-Workshop.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img class ="imageThree" width={1400} height={200} alt="900x500" src="http://www.decoradventures.com/wp-content/uploads/2014/11/Home-Depot-Workshop.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   );
   }
}

export default CarouselComponent;