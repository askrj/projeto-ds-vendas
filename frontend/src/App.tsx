import DataTeble from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar></NavBar>
        <h1 className="text-primary">Olá Mundo</h1>
        <DataTeble/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
