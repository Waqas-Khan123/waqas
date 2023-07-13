import React from 'react'
import './Card.css';
import { Col, Container,Row } from 'react-bootstrap';

export const Card = () => {
  return (
    <div className='main_container_cards'>
        <Container className='btstrp_container'>
        
             <div class="card">
      <div class="cardUpper">
        <img src='/asserts/images/cards/arfeen.jpeg' alt="asds" class="card-image" />
        <h3 class="card-title">Sheraz</h3>
        <p className='rate'>$240</p>
        <p class="card-description">znz Communication</p>
 
      </div>
      <div class="cardLower">
        <h4>About Me</h4>
        <p>
          I can help your children improve their skills in golf or tennis with my eighth years of experience in both.
        </p>
        <br/>
        <br/>

        <div class="card-footer">
          <button class="card--btn-Book">Book Now</button>
          <div className='box-star'>
            <img src='/asserts/images/cards/star.png'/>
              <img src='/asserts/images/cards/star.png'/>
              <img src='/asserts/images/cards/star.png'/>
              <img src='/asserts/images/cards/star.png'/>
           

            
            </div>
          
        </div>
      </div>
    </div>
         
        </Container>




















      {/* <div class="card">
      <div class="cardUpper">
        <img src="./arfeen.jpeg" alt="asds" class="card-image" />
        <h3 class="card-title">Sheraz</h3>
        <p>240</p>
        <p class="card-description">znz Communication</p>
        <button class="card-button">Button</button>
      </div>
      <div class="cardLower">
        <h4>About Me</h4>
        <p>
          I can help your children improve their skills in golf or tennis with my eighth years of experience in both.
        </p>
        <hr />
        <div class="card-footer">
          <button class="card-Book">Book Now</button>
          <p class="additional-text">sadsd</p>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Card
