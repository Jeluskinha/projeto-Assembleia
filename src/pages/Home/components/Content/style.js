import styled from "styled-components";

const ContentStyle = styled.div`
  height: 100%;
  width: 70%;
  padding: 20px;

  section{
    table {
      box-sizing: border-box;
      border-collapse: collapse;
      thead {
        background-color: white;
        border: 2.5px solid #32568d;
        background: #32568d;
     
        tr{
          
          td{
            padding: 5px 10px;
            color: white;
            font-size: 2rem;
            text-align: center;
            font-family: var(--font-family);
            div{
  
              h2{
                font-size: 1.8rem;
                font-style: var(font);
                font-weight: 800;
              }
            }
          }
        }
        th{
          width: max-content;
          padding: 5px 0px;
          background-color: white;
          color: #86a2ce;
          font-family: var(--font-family);
          font-size: 1.6rem;
          font-weight: 700;
          white-space: nowrap;
        }
      }
  
      tbody {
        font-weight: 400;
        background-color: white;
        border: 2.5px solid #32568d;
        tr:nth-child(2n+1) {
          background-color: #f3f3f3;
          td {
            color: #91b0cc;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 4px;
            text-align: center;
            text-justify: auto;
            width: max-content;
            padding: 5px 20px;
            white-space: nowrap;
            line-height: 2rem;
          }
        }
        tr:nth-child(2n) {
          background-color: #fefefe;
          td {
            color: #abbdd4;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 4px;
  
            text-align: center;
            text-justify: auto;
            width: max-content;
            padding: 5px 20px;
            white-space: nowrap;
            line-height: 2rem;
          }
        }
      }
  
      /* tfoot {
        background-color: white;
        border: 3px solid black;
        tr {
        }
      } */
  }
  }
`;

export default ContentStyle;
