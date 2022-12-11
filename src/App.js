import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import '../src/style.scss'
import Home from './Home';
import Header from './Header';
import Banner from './Banner';
import Responser from './Responser';
import Design from './IntroctucingDesign';
import SelectOption from './SelectOption';
import DesignDigital from './Design_digital';
import Inspirational from './Inspirational';
import Frequently from './Frequently';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Responser/> 
      <Design/> 
      <SelectOption/>
      <DesignDigital/>
      <Inspirational/>
      <Frequently/>
       <Footer/>
    {/* <Home/> */}
    </div>
  );
}

export default App;
