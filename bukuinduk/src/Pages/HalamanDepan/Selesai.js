import Dashboard from '../../Components/PagesComponent/Dashboard'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'

const Selesai = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Selesai Pendidikan"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>
                <div className='w-full'>
                    <NavButtons />
                </div>
                <div>
                    {/*Disini Tempat Buat Formnya, Hapus kalo mau nulis kodenya*/}
                </div>
            </div>
        </div>
    )
}
export default Selesai