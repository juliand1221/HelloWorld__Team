import './styles/App.css';
import Index from "./pages/Principal";
import PagCelular from 'pages/celulares';
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
import PanAdmin from 'pages/PanAdmin';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={["/admin"]}>
            <LayoutAdmin>
              <Switch>
                <Route path="/admin">
                  <PanAdmin/>
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
          <Route path={["/","/articulos","/celulares","/tablet","/portatil","/consola","/smartwatch","/parlante"]}>
            <Layout>
              <Switch>
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
