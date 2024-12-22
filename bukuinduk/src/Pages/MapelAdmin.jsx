import Sidebar from '../Components/PagesComponent/Sidebar'
import Header from '../Components/PagesComponent/Header'
const MapelAdmin = () => {
    const textHeader = "Mapel"
    const textSubHeader = "Mata Pelajaran"
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
export default MapelAdmin