import Content from './Content';
import './index.css';
import Nav from './Nav';
import Posttweet from './Posttweet';
import Rightbar from './Rightbar';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="main">
              <Nav/>
              

              <Switch>


                <Route exact path='/'>
                    <Posttweet />
                    <Content /> 
                </Route>
                

              </Switch>
              
              
          </div>
        <Rightbar />

      </Router>
      
        

    </div>
  );
}

export default App;
