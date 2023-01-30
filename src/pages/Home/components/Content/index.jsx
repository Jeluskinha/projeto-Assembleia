import ContentStyle from "./style";
import {tableColum, tableLine} from '../../../../data/escala.js'

function Content() {

  
  return (
    <ContentStyle>
        <table>
          <thead>
            <tr>
              <td colSpan={tableColum.length}> {/* Numero colspan representa espaços vazios no preencimento*/}
                <div>
                  <h2>ESCALA PARA O PROJETO INFANTO DO DIA 19 Janeiro a 9 Março 2023</h2>
                </div>
              </td>
            </tr>
            <tr>
              {tableColum.map((e)=> <th>{e}</th>)}
            </tr>
          </thead>
          <tbody>
              { tableLine.map(e => <tr>{Object.entries(e).map(([key, value]) => <td>{value}</td>)}</tr>)} 
          </tbody>
          {/* <tfoot>
            <tr>
              <td colSpan="4"> 
                <div>
                  <a href="#">&laquo;</a>{" "}
                  <a class="active" href="#">
                    1
                  </a>{" "}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
                  <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>*/}
        </table>
    </ContentStyle>
  );
}

export default Content;
