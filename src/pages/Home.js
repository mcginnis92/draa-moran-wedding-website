import React from 'react';

import {Container, Invitation, Photo, Date, Description} from '../styles';

const Home = () => 
    <Container>
        <Photo width="400px"><img src={require('../images/bob-and-cheryl-wedding.jpg')} alt="Bob and Cheryl" /></Photo>
        <Invitation>Please join us for a celebration of our wedding on the Mystic Blue Cruise</Invitation>
        <Date>Saturday, September 14, 2019</Date>
        <hr />
        <Description>
            <h2>Our Story</h2>
            <p>Cheryl lived in Atlanta, and Bob lived in Chicago. We met through the introduction of a special friend to both of us, and we will be forever grateful to the Traphagen’s. Our relationship has from the start been a long distance journey that has blessed us with the ability to travel to many exciting destinations together. At first there was a lot of back and forth from Chicago to Atlanta. Long phone calls every night. Bob’s job took him to international cities, and eventually we decided we didn’t need to just meet in Chicago and Atlanta. Why not meet Bob in locations like Rome, Paris, Dublin, and Sonoma? We found ourselves re-connecting in International cities and having one of a kind experiences in countries all over the world.</p>
            <p>At one point, Cheryl realized she was successfully working virtually with her clients still in Atlanta. The thought came to her that she could work from anywhere. Where did she want to live? She told Bob she thought she wanted to live in Charlotte where her kids and grand babies now live. Bob said that was fine...it was just a different airport. To more fully experience the joy of grandchildren, Cheryl moved to Charlotte, NC...and THEN Bob decided to move to Atlanta! After that we travelled from ATL to CLT by car, instead of on an airplane, to see each other.</p>
            <p>In December of 2018, we became engaged. But did we tell you that between the two of us, counting our kids' spouses, we have 8 adult children (and now 3 grandchildren). We tried to figure out ways to get all the kids together and eventually settled on a date in May. On May 4, 2019 in the presence of our children we exchanged commitments to each other and created a new family. Yes, We are already married!!!</p>
            <p>Many of you have shared in our journey and we want to celebrate this love with you on September 14 in Chicago. There will be food. There will be drink....There will be fun....There will be love all around. Please join us for the celebration part and union of the Draa/Moran clan. &nbsp; 
            <a href="https://bobandcheryl.app.rsvpify.com" target="_blank" rel="noopener noreferrer">Please RSVP by August 10</a>.</p>
        </Description>
    </Container>

export default Home;