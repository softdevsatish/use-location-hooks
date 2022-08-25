import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Compnay'
import Channel from './components/Channel'
import Other from './components/Other'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/*' element={<Page404 />} />


          {/* Nested Route */}
          <Route path='/contact/' element={<Contact />}>
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>


        </Routes>


      </BrowserRouter>


    </div >
  );
}

export default App;
