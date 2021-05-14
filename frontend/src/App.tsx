import BarChart from "components/BarChart";
import DataTeble from "components/DataTable";
import DonutChar from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar></NavBar>
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas as Vendas</h5>
            <DonutChar/>
          </div>
        </div>


        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <DataTeble/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
