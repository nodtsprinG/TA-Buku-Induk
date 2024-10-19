import Dashboard from '../../Components/PagesComponent/Dashboard'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
const AlamatAdmin = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Alamat Siswa"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>
                <div>
                    <NavButtons />
                </div>
                <div>
                    {/*Disini Tempat Buat Formnya, Hapus kalo mau nulis kodenya*/}
                </div>
            </div>
        </div>
    )
}
export default AlamatAdmin;