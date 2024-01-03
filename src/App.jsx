import Header from './components/Header';
import Guide from './components/Guide';
import Hissemoji from './components/hissemoji';
import BeniSasirt from './components/BeniSasirt';
import Trendler from './components/Trendler';
import Hakkimizda from './components/Hakkimizda';
import Iletisim from './components/Iletisim';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import { getAllEmoji } from './services/musicService';
import { useEffect,useState } from 'react';
import DuyguSayfasi from './components/DuyguSayfasi';
import HissEmojiKullanimi from './components/hissEmojiKullanimi';
import BeniSasirtKullanimi from './components/beniSasirtKullanimi';
import TrendlerKullanimi from './components/trendlerkullanimi';
import SikSorulanSorular from './components/sikSorulanSorular';
import Gizlilik from './components/gizlilik';
import Hukumler from './components/hukumler'
import Senseoftuneshakkinda from './components/senseoftuneshakkinda';


function App() {

  const [veri, setVeri] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const data = await getAllEmoji()
      setVeri(data)
    }
    fetchData()
  }, [])
  

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
        <Route path='/HissEmojiKullanimi' element={<HissEmojiKullanimi/>}/>
        <Route path='/BeniSasirtKullanimi' element={<BeniSasirtKullanimi/>}/>
        <Route path='/TrendlerKullanimi' element={<TrendlerKullanimi/>}/>
        <Route path='/SikSorulanSorular' element={<SikSorulanSorular/>}/>
        <Route path='/Gizlilik' element={<Gizlilik/>}/>
        <Route path='/Hukumler' element={<Hukumler/>}/>
        <Route path='/senseoftuneshakkinda' element={<Senseoftuneshakkinda/>}/>
        {veri.map((data) => (
          <Route
            key={data.id}
            path={`/Hissemoji/${data.duygu}`}
            element={<DuyguSayfasi content={data.duygu} />}
          />
        ))}
      </Routes>
      <Footer/>
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        footer {
          margin-bottom: 0pxs;
        }
      `}</style>
    </Router>
    
  )
}

export default App
