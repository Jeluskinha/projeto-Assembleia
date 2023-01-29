import ContentStyle from "./style";

function Content() {
  return (
    <ContentStyle>
      <section>
        <table>
          <thead>
            <tr>
              <td colspan="7"> {/* Numero colspan representa espaços vazios no preencimento*/}
                <div>
                  <h2>ESCALA PARA O PROJETO INFANTO DO DIA 19 Janeiro a 9 Março 2023</h2>
                </div>
              </td>
            </tr>
            <th>Dia</th>
            <th>Semana</th>
            <th>Mês</th>
            <th>Grupo</th>
            <th>Grupo</th>
            <th>Componentes do Grupo</th>
            <th>Ocupações</th>
          </thead>
          <tbody>
            <tr>
              <td>linha 1, célula 1</td>
              <td>linha 1, célula 2</td>
              <td>linha 1, célula 2</td>
              <td>linha 1, célula 2</td>
              <td>linha 1, célula 2</td>
              <td>linha 1, célula 2</td>
              <td>linha 1, célula 2</td>
            </tr>
            <tr>
              <td>linha 2, célula 1</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
            </tr>
            <tr>
              <td>linha 2, célula 1</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
            </tr>
            <tr>
              <td>linha 2, célula 1</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
              <td>linha 2, célula 2</td>
            </tr>
          </tbody>
          {/* <tfoot>
            <tr>
              <td colspan="4"> 
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
      </section>
    </ContentStyle>
  );
}

export default Content;
