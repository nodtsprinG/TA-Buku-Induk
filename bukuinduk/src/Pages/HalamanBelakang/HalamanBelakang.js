import Dashboard from '../../Components/Dashboard'
import Header from '../../Components/Header'
import Tabel from '../../Components/TabelBel'
const HalamanBelakang = () => {
    const textHeader = "Halaman Belakang ADMIN"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} />
                </div>
                <div className='flex overflow-scroll w-[1150px] m-5 p-5 no-scrollbar'>
                    <div className='flex'>
                        <Tabel />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HalamanBelakang;