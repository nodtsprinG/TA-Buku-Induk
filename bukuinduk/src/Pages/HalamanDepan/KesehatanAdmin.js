import Dashboard from '../../Components/PagesComponent/Dashboard'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
import Kesehatan from '../../Components/Form/Kesehatan'
const KesehatanAdmin = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Kesehatan Siswa"
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
                    <Kesehatan />
                </div>
            </div>
        </div>
    )
}
export default KesehatanAdmin;