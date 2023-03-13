import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import NavBar from './Components/Navbar/NavBar';
import Table from './Components/Table/Table';
import TableCripto from './Components/Table/Table';
import CarouselCripto from './Components/Carousel/Carousel';
import BinancePay from './Components/BinancePay/BinancePay';


function App() {
  return (
    <div className="App">
      <section className='container-md'>
      <NavBar/>
        <CarouselCripto/>
      <TableCripto/>
      {/* <BinancePay/> */}
      </section>

    </div>
  );
}

export default App;
