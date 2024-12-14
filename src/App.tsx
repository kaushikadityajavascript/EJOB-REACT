import './App.css'
import CardLayout from './components/cards/Parent';
import CrudOps from './components/CRUD_Practice/Crud';

// import FormValid from './components/FormValidation/FormValid';
// import Status from './components/Status';
// import Footer from './components/footer';
// import Header from './components/Header'
import CrudOperation from './components/CRUD/CrudOperation';
import Apiget from './components/ApiFetch/Apiget';
import Apiget2 from './components/ApiFetch/Apiget2';
import GetUserDetails from './components/ApiFetchPractice/GetApi';
import GetUser from './components/MeLive/GetUser';
import CreateUser from './components/MeLive/CreateUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Routes/Navbar';
import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Contact from './components/Routes/Contact';
import Error from './components/Routes/Error';
import FetchReal from './components/MeLive/FetchReal';
import User from './components/LiveApiMeLive/User';

function App() {
  return (
    <>
     
      {/* <Parent />  */}
      {/* <Parent1/> */}
      {/* <Parent2/> */}
      {/* <FormValid/> */}
      {/* <CrudOperation/> */}
      {/* <CardLayout/> */}
      {/* <CrudOps/> */}
      {/* <Apiget/> */}
      {/* <Apiget2/> */}
      {/* <GetUserDetails/> */}
      {/* <GetUser /> */}
      {/* <CreateUser/> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <FetchReal/> */}
      <User/>
    </>
  );
}

export default App
