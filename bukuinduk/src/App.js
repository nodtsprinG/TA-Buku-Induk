import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import LoginAdmin from './Pages/LoginAdmin'
import DashboardAdmin from './Pages/HalamanDepan/DashboardAdmin'
import SemuaSiswa from './Pages/SemuaSiswa'
import KesehatanAdmin from './Pages/HalamanDepan/KesehatanAdmin'
import KetAyah from './Pages/HalamanDepan/KetAyah'
import KetIbu from './Pages/HalamanDepan/KetIbu'
import KetWali from './Pages/HalamanDepan/KetWali'
import PendidikanAdmin from './Pages/HalamanDepan/PendidikanAdmin'
import PerkembanganAdmin from './Pages/HalamanDepan/PerkembanganAdmin'
import HalamanDepan from './Pages/HalamanDepan/BiodataSiswa'
import HalamanBelakang from './Pages/HalamanBelakang/HalamanBelakang'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginAdmin />} />
        <Route path='/admindashboard' element={<DashboardAdmin />} />
        <Route path='/halamandepan' element={<HalamanDepan />} />
        <Route path='/halamanbelakang' element={<HalamanBelakang />} />
        <Route path='/semuasiswa' element={<SemuaSiswa />} />
        <Route path='/kesehatanadmin' element={<KesehatanAdmin />} />
        <Route path='/ketAyah' element={<KetAyah />} />
        <Route path='/ketIbu' element={<KetIbu />} />
        <Route path='/ketWali' element={<KetWali />} />
        <Route path='/pendidikan' element={<PendidikanAdmin />} />
        <Route path='/perkembangan' element={<PerkembanganAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
