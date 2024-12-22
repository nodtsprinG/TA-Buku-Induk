import Sidebar from '../../Components/PagesComponent/Sidebar'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
import Alamat from '../../Components/Form/Alamat'
const AlamatAdmin = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Alamat Siswa"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Sidebar />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>
                <div>
                    <NavButtons />
                </div>
                <div>
                    <Alamat />
                </div>
            </div>
        </div>
    )
}
export default AlamatAdmin;