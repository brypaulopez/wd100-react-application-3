import NavigationBar from "./components/navigationbar";
import BodyContent from "./components/bodycontent";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from "./img/1.png";

function App() {
  return (
    <div className="App">
      {/* <img src={Banner} alt="" /> */}
      <NavigationBar img={Banner}></NavigationBar>
      <BodyContent></BodyContent>
      <h1 className="text-danger">Hello World</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;

