import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    :root {
    --White: #FFFFFF;
    --Blue-1: rgb(25, 175, 230);
    --Blue-2: #5FCDD9;
    --Blue-3: #72F2EB;
    --Background-1: #C7FFED;
    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343B41;
    --Grey-1: #868E96;
    --Grey-0: #F8F9FA;
    --GreySoft: #666666;
    --Black: #0000000;
    --Sucess: #3FE864;
    --Negative: #E83F5B;
    --BorderColor: rgba(102, 102, 102, 1);
    --fontColor-1: rgba(192, 177, 132, 01);//#c0b184
    --fontColor-2: #F8F9FA; //CCC
    --fontWeight-Strong: 700;
    --fontWeight-Soft: 400;
    --fontInter: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;700&family=Inter:wght@100;200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;1,500&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--fontInter);
  }

  body,html{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

export { GlobalStyle }