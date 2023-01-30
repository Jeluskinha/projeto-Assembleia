import styled from 'styled-components';

const NavigationStyle = styled.nav`
  height: 100%;
  width: 20%;
  background-color: gray;
  padding: 10px;

  display: none;

  ul{
    list-style: none;
    background-color: white;
    li{
      border: 3px solid black;
      cursor: pointer;
    }
  }
  @media (max-width: 426px){ 
    display: none;
  }
`;

export default NavigationStyle;