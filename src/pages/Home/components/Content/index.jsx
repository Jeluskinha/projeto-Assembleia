import ContentStyle from "./style";

function Content() {
  return (
    <ContentStyle>
      <section>
        <table>
          <thead>
            <th>head1</th>
            <th>head2</th>
            <th>head3</th>
            <th>head4</th>
          </thead>
          <tbody>
            <tr>
              <td>linha 1, célula 1</td>
              <td>linha 1, célula 2</td>
            </tr>
            <tr>
              <td>linha 2, célula 1</td>
              <td>linha 2, célula 2</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4"> {/* Numero colspan representa espaços vazios no preencimento*/}
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
          </tfoot>
        </table>
      </section>
    </ContentStyle>
  );
}

export default Content;
