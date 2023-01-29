import styled from 'styled-components';

const NavigationStyle = styled.nav`
  height: 100%;
  min-width: 30%;
  background-color: gray;
  padding: 10px;

  ul{
    list-style: none;
    background-color: white;
    li{
      border: 3px solid black;
      cursor: pointer;
    }
  }
`;

export default NavigationStyle;