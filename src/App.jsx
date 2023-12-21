import Header from './components/Header';
import Guide from './components/Guide';
import Hissemoji from './components/hissemoji';
import BeniSasirt from './components/BeniSasirt';
import Trendler from './components/Trendler';
import Hakkimizda from './components/Hakkimizda';
import Iletisim from './components/Iletisim';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Guide/>}/>
        <Route path='/Hissemoji' element={<Hissemoji/>}/>
        <Route path='/BeniSasirt' element={<BeniSasirt/>}/>
        <Route path='/Trendler' element={<Trendler/>}/>
        <Route path='/Hakkimizda' element={<Hakkimizda/>}/>
        <Route path='/Iletisim' element={<Iletisim/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
