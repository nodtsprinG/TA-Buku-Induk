import Sidebar from '../../Components/PagesComponent/Sidebar'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
import Form from '../../Components/Form/KeteranganAyah'
const KetAyah = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Keterangan Ayah Siswa"
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
                    <Form />
                </div>
            </div>
        </div>
    )
}
export default KetAyah;