import React from 'react';

import {Container, Photo,} from '../styles';

const RSVP = () => 
    <Container>
        <Photo width="500px"><img src={require('../images/bob-and-cheryl-rsvp.JPG')} alt="Bob and Cheryl"/></Photo>
        <h1>RSVP</h1>
        <p>We can't wait to celebrate with you! <a href="https://bobandcheryl.app.rsvpify.com" target="_blank" rel="noopener noreferrer">Please RSVP by August 10</a>.</p>
        <hr />        
    </Container>

export default RSVP;