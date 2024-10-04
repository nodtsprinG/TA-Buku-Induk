import Dashboard from '../../Components/Dashboard'
import Header from '../../Components/Header'
const DashboardAdmin = () => {
    const textHeader = "Admin Dashboard"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} />
                </div>
            </div>
        </div>
    )
}
export default DashboardAdmin