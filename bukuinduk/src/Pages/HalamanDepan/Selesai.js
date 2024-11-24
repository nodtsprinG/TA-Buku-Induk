import Sidebar from '../../Components/PagesComponent/Sidebar'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
import Form from '../../Components/Form/Selesai'
const Selesai = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Selesai Pendidikan"
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
                <div className='mt-10'>
                    <Form />
                </div>
            </div>
        </div>
    )
}
export default Selesai