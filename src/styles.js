import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F7F6F4;
    font-size: 16px;
    color: #3F3F3F;
    font-family: 'Oxygen', sans-serif;
  }

  p {
    margin: 0 0 16px;
  }

  h1 {
    color: #23426E;
    font-size: 52px;
    font-family: 'Allura', cursive;

    @media (max-width: 500px){
      text-align: center;
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    text-align: center;
  }

  h3 {
    font-size: 22px;
  }

  h2,
  h3 {
    color: #717796;
    font-family: 'EB Garamond', serif;
    text-transform: uppercase;
  }

  a {
    color: #717796;

    a:visited,
    a:active {
      color: #717796;
    }
  }

  strong {
    color: #23426E;
    font-weight: 500;
  }

  hr {
    width: 50px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;    
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-bottom: 50px;
  width: 100%;
`;

export const Description = styled.div`
    width: 100%;
    max-width: 600px;
    text-align: justify;
    margin-bottom: 50px;

    h2, h3 {
      text-align: center;
    }
`;

export const Photo = styled.div`
  box-sizing: border-box;
  border: solid 8px #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  max-width: ${(props) => props.width ? props.width : '600px'};
  width: 100%;

  img {
    width: 100%;
  }
`;

export const GalleryPhoto = styled.div`
  box-sizing: border-box;
  border: solid 8px #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);

  @media (max-width: 500px){
    width: 100%;

    img {
      height: initial;
      width: 100%;
    }
  }
`;

export const Credit = styled.div`
  align-self: flex-start;
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ActivityContainer = styled.div`
  width: 610px;
`;

export const Invitation = styled.p`
  color: #23426E;
  font-family: 'Allura', cursive;
  font-style: italic;
  font-size: 28px;
  margin: 10px 0;
`;

export const Date = styled.h2`
  color: #23426E;
  font-size: 22px;
  margin-top: 0;
  text-transform: none;
`;

export const RsvpLink = styled.a`
  text-align: center;
`;

export const Gallery = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 1000px;
  width: 100%;

  div {
    margin-bottom: 10px;
  }
`;