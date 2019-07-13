import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navigation = styled.div`
    background: #8BA2B2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;

    @media (max-width: 500px){
        flex-direction: column;
    }
`;

const Page = styled.li`
    display: block;
    padding: 20px;
    color: #fff;

    a {
        font-family: 'EB Garamond', serif;
        font-size: 18px;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;

        :hover, 
        :visited {
            color: #fff;
            text-decoration: none;
        }
    }
    
`;

const Nav = () => 
    <Navigation>
        <Page>
            <Link to="/">Home</Link>
        </Page>
        <Page>
            <Link to="/events">Information</Link>
        </Page>
        <Page>
            <Link to="/accommodations">Accommodations</Link>
        </Page>
        <Page>
            <Link to="/photos">Photos</Link>
        </Page>
        <Page>
            <Link to="/chicago">Chicago</Link>
        </Page>
        <Page>
            <Link to="/rsvp">RSVP</Link>
        </Page>
    </Navigation>

export default Nav;