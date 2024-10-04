import Dashboard from '../../Components/Dashboard'
import Header from '../../Components/Header'
const BiodataSiswa = () => {
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
            </div>
            <div className='flex-1'>
                <div>
                    <Header />
                </div>
            </div>
        </div>
    )
}
export default BiodataSiswa;