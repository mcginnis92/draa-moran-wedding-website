import React from 'react';

import {Container, Credit, Photo, Description} from '../styles';

const Accommodations = () => 
    <Container>
        <Photo width="500px"><img src={require('../images/embassy-suites.jpg')} alt="Embassy Suites" /></Photo>
        <Description>
            <h2>Hotel Accommodations</h2>
            <p>For our out of town guests we have reserved a block with the Embassy Suites by Hilton Chicago Downtown Magnificent Mile.</p>
            <p>Address: 511 North Columbus Dr, Chicago, IL 60611</p>
            <p>Visit this link to book:&nbsp;<a href="https://book.passkey.com/go/DraaMoran" target="_blank" rel="noopener noreferrer">https://book.passkey.com/go/DraaMoran</a>.</p>
            <p>Please book by <strong>August 13</strong> to take advantage of the special group rate.</p>
            <Credit>Image Courtesy of Embassy Suites</Credit>
        </Description>
    </Container>

export default Accommodations;