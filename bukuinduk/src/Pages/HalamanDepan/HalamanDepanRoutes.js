import { Routes, Route } from 'react-router-dom'
import AlamatAdmin from './AlamatAdmin'
import KesehatanAdmin from './KesehatanAdmin'
import KetAyah from './KetAyah'
import KetIbu from './KetIbu'
import KetWali from './KetWali'
import PendidikanAdmin from './PendidikanAdmin'
import PerkembanganAdmin from './PerkembanganAdmin'
import Biodata from './BiodataSiswa'
import Selesai from './Selesai'
const HalamanDepanRoutes = () => {
    return (
        <Routes>
            <Route index element={<Biodata />} />
            <Route exact path='/alamat' element={<AlamatAdmin />} />
            <Route exact path='/kesehatanadmin' element={<KesehatanAdmin />} />
            <Route path='ketAyah' element={<KetAyah />} />
            <Route path='ketIbu' element={<KetIbu />} />
            <Route path='ketWali' element={<KetWali />} />
            <Route path='pendidikan' element={<PendidikanAdmin />} />
            <Route path='perkembangan' element={<PerkembanganAdmin />} />
            <Route path='selesai' element={<Selesai />} />
        </Routes>
    )
}
export default HalamanDepanRoutes;