import Sidebar from '../Components/PagesComponent/Sidebar'
import Header from '../Components/PagesComponent/Header'
const Jurusan = () => {
    const textHeader = "Jurusan"
    const textSubHeader = "Jurusan SMKN 2 Singosari"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Sidebar />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>
            </div>
        </div>
    )
}
export default Jurusan