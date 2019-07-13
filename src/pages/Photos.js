import React from 'react';

import {Container, GalleryPhoto, Gallery} from '../styles';

const Photos = () => 
    <Container>
        <h2>Our Family</h2>
        <Gallery>
            <GalleryPhoto><img src={require('../images/family1.JPG')} alt="Family GalleryPhoto" height="400px" /></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family8.jpg')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family6.jpg')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family4.jpg')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family5.JPG')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family7.jpg')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family2.jpg')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family3.jpg')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family9.JPG')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
            <GalleryPhoto><img src={require('../images/family10.JPG')} alt="Family GalleryPhoto" height="400px"/></GalleryPhoto>
        </Gallery>
    </Container>

export default Photos;