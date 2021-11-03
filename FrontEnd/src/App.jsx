import './styles/App.css';
import Index from "./pages/Principal";
import PagCelular from 'pages/celulares/Princelulares';
import PagTablet from 'pages/tablets';
import ProPorta from 'pages/portatiles';
import ProConsol from 'pages/consola';
import ProSmart from 'pages/smartwatch';
import ProBafle from 'pages/parlantes';
import Layout from './layouts/Layout';
import ProducVario from 'pages/articulos';
import Login from 'pages/Login';
import RegistroDatos from 'pages/registro';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LayoutLog from 'layouts/layoutLog';
import LayoutAdmin from 'layouts/layoutAdmin';
import PanAdmin from 'pages/admin/PanAdmin';
import VentasProduc from 'pages/ventas';
import PresentacionContact from 'pages/presentacion';
import PanUser from 'pages/admin/PanUser';
import RegVentas from 'pages/admin/RegVentas';
import VentaTotal from 'pages/admin/VentaTotal';
import RegProduc from 'pages/admin/RegProduc';
import ProductosInve from 'pages/admin/ProductosInve';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={["/admin", "/users","/regventas","/ventatotal","/regproductos","/productosinventario"]}>
            <LayoutAdmin>
              <Switch>
                <Route path="/admin">
                  <PanAdmin/>
                </Route>
                <Route path="/users">
                  <PanUser/>
                </Route>
                <Route path="/regventas">
                  <RegVentas/>
                </Route>
                 <Route path="/ventatotal">
                  <VentaTotal/>
                </Route>
                <Route path="/regproductos">
                  <RegProduc/>
                </Route>
                <Route path="/productosinventario">
                  <ProductosInve/>
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>
          <Route path={["/login", "/registro"]}>
            <LayoutLog>
              <Switch>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/registro">
                  <RegistroDatos/>
                </Route>
              </Switch>
            </LayoutLog>
          </Route>
          <Route path={["/","/articulos","/celulares","/tablet","/portatil","/consola","/smartwatch","/parlante","/ventas","/contacto"]}>
            <Layout>
              <Switch>
                <Route path="/contacto">
                  <PresentacionContact/>
                </Route>
                <Route path="/ventas">
                  <VentasProduc/>
                </Route>
                <Route path="/articulos">
                  <ProducVario/>
                </Route>
                <Route path="/celulares">
                  <PagCelular/>
                </Route>
                <Route path="/tablet">
                  <PagTablet/>
                </Route>
                <Route path="/portatil">
                  <ProPorta/>
                </Route>
                <Route path="/consola">
                  <ProConsol/>
                </Route>
                <Route path="/smartwatch">
                  <ProSmart/>
                </Route>
                <Route path="/parlante">
                  <ProBafle/>
                </Route>
                <Route path="/">
                  <Index/>
                </Route>
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}


export default App;
