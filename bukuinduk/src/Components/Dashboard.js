import { TbHome } from "react-icons/tb";
import { LuFileText } from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div>
            <div className="group">
                <div className='w-[284px] h-full rounded-[0_16px_16px_0] border border-white '>
                    <header
                        className='w-full h-[103px] p-[24px] flex items-center justify-normal gap-[10px] rounded-[0_16px_0_0]'
                        style={{ backgroundColor: 'rgba(87, 117, 186, 0.8)' }}>
                        <img src='images/stemdasi.png' alt='Logo' className='w-[58px] h-[55px]'></img>
                        <div className='flex justify-center items-center mx-auto'>
                            <h1 className='font-PTSans text-black text-center text-[20px] font-bold'>Admin</h1>
                        </div>
                    </header>
                    <nav className='w-fill h-[451px] p-[24px_24px_0_24px] gap-[10px]'>
                        <div className='w-fill h-[20px] p-[0_12px_0_12px] gap-[10px]'>
                            <h4 className='font-PTSans text-[10px] font-normal leading-[12px] tracking-[4px] text-left'>Menu Utama</h4>
                        </div>
                        <div className='w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <TbHome className='w-[20px] h-[20px]' /><label className='font-PTSans font-bold text-[15px] text-left leading-5'>Dashboard</label>
                        </div>
                        <div className='w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <LuFileText className='w-[20px] h-[20px]' /><label className=' font-PTSans font-bold text-[15px] text-left leading-5'>Data Siswa</label><FaChevronDown className='w-[15px] h-[15px] object-right' />
                        </div>
                        <div className='w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <SiGoogleclassroom className='w-[20px] h-[20px]' /> <label className='font-PTSans font-bold text-[15px] text-left leading-5'>Data Kelas</label>
                        </div>
                        <div className='w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <IoBookOutline className='w-[20px] h-[20px]' /><label className='font-PTSans font-bold text-[15px] text-left leading-5'>Rapor</label>
                        </div>
                    </nav>
                    <hr className='w-[284px] border border-gray-100' />
                    <div className='w-fill h-[468px] p-[24px] gap-2'>
                        <div className='w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <IoMdExit className='w-[20px] h-[20px]' /><label className='font-PTSans font-bold text-[15px] text-left leading-5'>Keluar</label>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}
export default Dashboard