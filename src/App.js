import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Head from './Head';
import Login from './components/login';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Contact from './components/contact';
import Foot from './foot';
import CreateResume from './components/createresume';
import Template from './components/template';
function App() {
  // console.log(props.employeeID);
  return (
    <>
    <BrowserRouter>
    <Head/>

    <Routes>
    
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/login' element={<Login />}/>
      
      <Route path='/Singup' element={<Signup />}/>
     <Route path='/final-resume' element={<Template/>}/>
     <Route path='/create-resume' element={<CreateResume/>}/>
     
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  
    <Foot/>
    </BrowserRouter>

    </>
    
  );
}

export default App;