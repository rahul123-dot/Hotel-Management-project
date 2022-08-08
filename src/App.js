import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OurServices from './pages/OurServices';
import OfferAvailable from './pages/OfferAvailable';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './pages/user-routes/UserDashboard';
import Privateroute from './components/Privateroute';
import ProfileInfo from './pages/user-routes/ProfileInfo';
import BookMyStay from './pages/user-routes/BookMyStay';

function App() {
  return (
 <BrowserRouter>
 <ToastContainer position='bottom-center'/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/ourservices' element={<OurServices/>}/>
<Route path='/offersavailable' element={<OfferAvailable/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contactus' element={<ContactUs/>}/>

<Route path='/dashboard' element={<UserDashboard/>}/>
<Route path='/bookmystay' element={<BookMyStay/>}/>




{/* <Route path='/user' element={<Privateroute/>}>  
<Route path='dashboard' element={<UserDashboard/>}/>
<Route path='profile-info' element={<ProfileInfo/>}/>
<Route path='bookmystay' element={<BookMyStay/>}/> */}






{/* </Route> */}
 </Routes>
 </BrowserRouter>
  );
}

export default App;
