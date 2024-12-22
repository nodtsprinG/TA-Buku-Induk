import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import LoginAdmin from './Pages/LoginAdmin'
import DashboardAdmin from './Pages/DashboardAdmin'
import SemuaSiswa from './Pages/SemuaSiswa'
import HalamanDepanRoutes from './Pages/HalamanDepan/HalamanDepanRoutes'
import HalamanBelakang from './Pages/HalamanBelakang/HalamanBelakang'
import Jurusan from './Pages/Jurusan'
import Mapel from './Pages/MapelAdmin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginAdmin />} />
        <Route path='/admindashboard' element={<DashboardAdmin />} />
        <Route exact path='/halamandepan/*' element={<HalamanDepanRoutes />} />
        <Route path='/halamanbelakang' element={<HalamanBelakang />} />
        <Route path='/semuasiswa' element={<SemuaSiswa />} />   
        <Route path='/jurusan' element={<Jurusan />} />   
        <Route path='/mapel' element={<Mapel />} />   
      </Routes>
    </Router>
  );
}

export default App;
