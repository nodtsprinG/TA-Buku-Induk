import Dashboard from '../../Components/PagesComponent/Dashboard'
import Header from '../../Components/PagesComponent/Header'
import NavButtons from '../../Components/Buttons/RoundedButton'
import Perkembangan from '../../Components/Form/Perkembangan'
const PerkembanganAdmin = () => {
    const textHeader = "Halaman Depan ADMIN"
    const textSubHeader = "Perkembangan Siswa"
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
                    <Perkembangan />
                </div>
                
            </div>
        </div>
    )
}
export default PerkembanganAdmin;