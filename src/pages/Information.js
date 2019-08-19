import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Photo, Date, Description} from '../styles';

const Information = () => 
    <Container>
        <Photo width="600px"><img src={require('../images/Mystic-Blue-Cruise-Ship.jpg')} alt="Mystic Blue Cruise Ship" /></Photo>
        <Description>
            <h2>Mystic Blue Cruise</h2>
            <Date>Saturday, September 14, 2019 at 12:00 pm</Date>
            <p>Boarding time takes place from 12:00 - 12:15 pm at the VY Pier, from the South side of Navy Pier (see map below). The cruise will end at 2:30 pm.</p>
            <p>Navy Pier is located at 600 East Grand Ave, Chicago, IL 60611.</p>
            <p><a href={require('../docs/navy-pier-parking.pdf')} target="_blank" rel="noopener noreferrer">Click for directions and parking information.</a></p>
            <p>Dress: We recommend stylish casual clothing. As it is a boat, be mindful of your footwear. However, the cruise line has a few more rules: Absolutely no sportswear, gym shoes, work boots, jerseys, baggy clothes or ball caps are permitted on the cruise.</p>
            <p>Please bring your ID to present boatside for entrance. Look for the butler drinks at boarding. Soon after we will have a buffet lunch and the bar is included in our package. As part of our celebration, we are providing a memento photo of your cruise. Please look for it before you depart.</p>
            <Photo width="600px">
                <a href={require('../docs/navy-pier-map.pdf')} target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/navy-pier-map.png')} alt="Navy Pier Map" />
                </a>
            </Photo>
            <div>
                <h3>Arriving early? </h3> 
                Join us for some afternoon fun at Wrigley Field, Friday, September 13, while the Chicago Cubs take on the Pittsburgh Pirates.&nbsp;
                <Link to="/chicago">Details</Link>
            </div>
        </Description> 
    </Container>

export default Information;