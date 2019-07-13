import React from 'react';

import {Container, Photo, Description, Date} from '../styles';

const Chicago = () => 
    <Container>
        <h2>Things to Do in Chicago</h2>
        <>
            <Photo><img src={require('../images/heather-maguire-unsplash.jpg')} alt="Wrigley Field" /></Photo>
            <Description>
                <h3>Chicago Cubs vs. Pittsburgh Pirates</h3>
                <Date>Friday, September 13, 2019 at 3:05 pm</Date>
                <p>Early arrivals: If you are in Chicago on Friday, September 13, and would like to join us at the Chicago Cubs game, purchase Budweiser Bleacher seat tickets from the <a href="https://mpv.tickets.com/?orgId=5&agency=MLB_MPV&pid=8652627" target="_blank" rel="noopener noreferrer">Cubs</a> or on <a href="https://www.stubhub.com/chicago-cubs-tickets-chicago-cubs-chicago-wrigley-field-9-13-2019/event/103822498" target="_blank" rel="noopener noreferrer">StubHub</a>. Note that these tickets are numbered as 500 section tickets until you click on them. You will see "Budweiser Bleachers General Admission" as the section.</p>
                <p><strong>Important:</strong> There are not assigned seats in the bleachers, so we will all plan to enter the stadium through the bleacher entrance (Waveland & Sheffield) at 2:00 pm to find a space to sit together. Please indicate on our <a href="https://bobandcheryl.app.rsvpify.com" target="_blank" rel="noopener noreferrer">RSVP site</a> if you are planning to attend the Cubs game so we have an approximate idea of how many will be joining us!</p>
            </Description>
        </>

        <>
            <Photo><img src={require('../images/navy-pier.png')} alt="Navy Pier" /></Photo>
            <Description>
                <h3>Navy Pier</h3>
                <p>Home to the Mystic Blue, the Pier was built in 1916, and renamed Navy Pier in 1927 as a tribute to Navy personnel who were housed at the Pier during World War I. It covers 34 acres, is 3300 feet long on the Chicago shore land of Lake Michigan. It is one of the more famous landmarks in Chicago, with plenty to see and things to do for the whole family. Check out the <a href="https://NavyPier.org" target="_blank" rel="noopener noreferrer">Navy Pier website</a> for more information.</p>
            </Description>
        </>

        <>
            <Photo><img src={require('../images/bob-pizza.jpg')} alt="Pizza" /></Photo>
            <Description>
                <h3>Deep Dish Pizza</h3>
                <p>If it's your first time in Chicago, you can't leave without trying its famous deep dish pizza. Our favorites are Giordano's and Gino's East, though Lou Malnati's and Pizzeria Uno are equally famous and earn honorable mentions. Be sure to come hungry!</p>
            </Description>
        </>

        <>
            <Photo><img src={require('../images/ozzie-stern-unsplash.jpg')} alt="Millenium Park" /></Photo>
            <Description>        
                <h3>Millenium Park</h3>
                <p>Millenium Park is a tourist destination for a reason. It is a beautiful park with plenty to see! Enjoy an afternoon stroll through the gardens, stop at the Bean, and bring your kids to Maggie Daley Park. For a fantastic view of the park and Lake Michigan, we recommend grabbing a drink at <a href="http://www.cindysrooftop.com/" target="_blank" rel="noopener noreferrer">Cindy's Rooftop</a> (found at the Chicago Athletic Association Hotel).</p>
            </Description>
        </>

        <>
            <Photo><img src={require('../images/architecture-tour.jpg')} alt="Architecture Tour" /></Photo>
            <Description>
                <h3>Architecture Tour</h3>
                <p>A favorite of both natives and tourists, you'll be sure to learn a thing or two on a Chicago Architecture boat tour. It's a great way to spend an afternoon and will give you some amazing views of Chicago's skyline. Tours are offered daily and are easy to <a href="https://www.timeout.com/chicago/walks-tours/chicagos-best-boat-tours" target="_blank" rel="noopener noreferrer">book online</a>.</p>
            </Description>
        </>

        <>
            <Photo><img src={require('../images/tim-trad-unsplash.jpg')} alt="Ledge" /></Photo>
            <Description>
                <h3>Skyline Views</h3>
                <p>If you're looking to get a Bird's Eye view of the city, be sure to check out the tallest building in the Western Hemisphere via the <a href="https://theskydeck.com/" target="_blank" rel="noopener noreferrer">Ledge</a> at the Sears Tower. <a href="https://360chicago.com/" target="_blank" rel="noopener noreferrer">360 Chicago</a> also offers a fantastic viewing experience at the John Hancock Observatory. Truly a bucket list activity while you are in Chicago - you'll be glad you went!</p>
            </Description>
        </>
    </Container>

export default Chicago;