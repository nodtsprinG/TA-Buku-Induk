import Sidebar from '../../Components/PagesComponent/Sidebar'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
import Biodata from '../../Components/Form/Biodata'
const BiodataSiswa = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Biodata"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Sidebar />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>
                <div className='w-full'>
                    <NavButtons />
                </div>
                <div>
                    <Biodata />
                </div>
            </div>
        </div>
    )
}
export default BiodataSiswa;