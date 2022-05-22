
import './App.css';
import Students from './components/Students'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './components/Home';

import './App.css'
function App() {
  return (
    <BrowserRouter>
    
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div><button className='btn btn-outline-success'><Link to="/">Home</Link> </button></div>
          <div><button className='btn btn-outline-primary'><Link to={'/students'}>Student</Link> </button></div>
          <div><button className='btn btn-outline-warning'><Link to={'contact'}>Contact</Link> </button></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;