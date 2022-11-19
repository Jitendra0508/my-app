import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import '../src/style.scss'
import Home from './Home';
import Header from './Header';
import Banner from './Banner';
import Responser from './Responser';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Responser/>  
    {/* <Home/> */}
    </div>
  );
}

export default App;
