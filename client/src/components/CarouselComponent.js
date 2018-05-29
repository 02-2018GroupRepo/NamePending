import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import groupPhoto from '../group_photo.jpg';
import groupPhoto2 from '../group_photo2.jpg';
import homeDepot from '../homedepot.jpg';

class CarouselComponent extends Component{

render() {

return(
<Carousel style={{marginLeft: "-15px", marginRight: "-15px", marginTop:"6px"}}>
  <Carousel.Item>
    <img class ="imageOne" width={1400} height={200} alt="900x500" src={groupPhoto} />
    <Carousel.Caption>
      <h3>HANDS-ON LEARNING, EXPERT ADVICE</h3>
      <p>Join a Home Depot workshop at your nearest store this week!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img class ="imageTwo" width={1400} height={200} alt="900x500" src={groupPhoto2} />
    <Carousel.Caption>
      <h3>HANDS-ON LEARNING, EXPERT ADVICE</h3>
      <p>Join a Home Depot workshop at your nearest store this week!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img class ="imageThree" width={1400} height={200} alt="900x500" src={homeDepot} />
    <Carousel.Caption>
      <h3>HANDS-ON LEARNING, EXPERT ADVICE</h3>
      <p>Join a Home Depot workshop at your nearest store this week!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   );
   }
}

export default CarouselComponent;