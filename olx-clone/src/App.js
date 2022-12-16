import './App.css';
import Bottom from './Component/Bottom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AllRoutes from "./Route/AllRoutes"
function App() {
  return (
    <div>
    <Navbar/>
    <Bottom/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}
export default App;
