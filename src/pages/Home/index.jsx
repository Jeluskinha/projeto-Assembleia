import HomePageStyle from "./Style";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Content from "./components/Content";

function HomePage() {
  return (
    <>
      <Header />
      <HomePageStyle>
        <Navigation/>
        <section>
          <Content/>
        </section>
      </HomePageStyle>
    </>
  );
}

export default HomePage;
