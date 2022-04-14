import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkOut" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }> </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
