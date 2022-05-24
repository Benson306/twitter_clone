import Content from './Content';
import './index.css';
import Nav from './Nav';
import Rightbar from './Rightbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      
      <Sidebar />
        <div className="main">
            <Nav/>
            <Content />
        </div>
      <Rightbar />

    </div>
  );
}

export default App;
