import { TbHome } from "react-icons/tb";
import { LuFileText } from "react-icons/lu";
import { LuAlignEndHorizontal } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { LiaAngleDownSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const Dashboard = () => {

    const navigate = useNavigate()

    const [pilihSiswa, setPilihSiswa] = useState('Data Siswa')
    const [pilihKelas, setPilihKelas] = useState('Data Kelas')
    const [isOpen, setIsOpen] = useState(false)

    const handleCheckboxChange = (value) => {
        setPilihSiswa(value)
        setPilihKelas(value)
        setIsOpen(false)
    }

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
                            <TbHome className='w-[20px] h-[20px]' />
                            <label className='font-PTSans font-bold text-[15px] text-left leading-5'>Dashboard</label>
                        </div>

                        <div onClick={() => setIsOpen(!isOpen)} className='relative w-[236px] h-[40px] mt-2 rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center justify-between hover:bg-gray-100'>
                            <div className='flex items-center gap-[10px]'>
                                <LuFileText className='w-[20px] h-[20px]' />
                                <label className='font-PTSans font-bold text-[15px] text-left leading-5'>{pilihSiswa}</label>
                            </div>
                            <LiaAngleDownSolid className='w-[15px] h-[15px]' />
                            {isOpen && (
                                <ul className='absolute top-full mt-0 left-0 w-[172px] h-[140px] gap-1 bg-white px-4 py-4'>
                                    <li className='w-fill h-[32px] rounded-lg p-[8px_12px_8px_12px] gap-[12px] text-slate-500 hover:bg-gray-100 hover:text-black'>
                                        <button className='flex justify-center items-center font-PTSans font-bold text-xs tracking-[-0.02em]'>Semua Siswa</button>
                                    </li>
                                    <li className='w-fill h-[32px] rounded-lg p-[8px_12px_8px_12px] gap-[12px] text-slate-500 hover:bg-gray-100 hover:text-black'>
                                        <button className='flex justify-center items-center font-PTSans font-bold text-xs tracking-[-0.02em]'>Halaman Depan</button>
                                    </li>
                                    <li className='w-fill h-[32px] rounded-lg p-[8px_12px_8px_12px] gap-[12px] text-slate-500 hover:bg-gray-100 hover:text-black'>
                                        <button className='flex justify-center items-center font-PTSans font-bold text-xs tracking-[-0.02em]'>Halaman Belakang</button>
                                    </li>
                                    <li className='w-fill h-[32px] rounded-lg p-[8px_12px_8px_12px] gap-[12px] text-slate-500 hover:bg-gray-100 hover:text-black'>
                                        <button className='flex justify-center items-center font-PTSans font-bold text-xs tracking-[-0.02em]'>Menu 4</button>
                                    </li>
                                </ul>
                            )}
                        </div>

                        <div className={`w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center justify-between hover:bg-gray-100 transition-all duration-300 ${isOpen ? 'mt-[160px]' : 'mt-2'}`}>
                            <div className='flex items-center gap-[10px]'>
                                <LuAlignEndHorizontal className='w-[20px] h-[20px]' />
                                <label className='font-PTSans font-bold text-[15px] text-left leading-5'>Data Kelas</label>
                            </div>
                            <LiaAngleDownSolid className='w-[15px] h-[15px]' />
                        </div>


                        <div className='w-[236px] h-[40px] mt-2 rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <FiBook className='w-[20px] h-[20px]' />
                            <label className='font-PTSans font-bold text-[15px] text-left leading-5'>Rapor</label>
                        </div>
                    </nav>

                    <hr className='w-[284px] border border-gray-100' />
                    <div className='w-fill h-[468px] p-[24px] gap-2'>
                        <div className='w-[236px] h-[40px] rounded-[8px] p-[10px_12px_10px_12px] gap-[10px] flex items-center hover:bg-gray-100'>
                            <IoMdExit className='w-[20px] h-[20px]' /><button onClick={() => navigate('/')} className='font-PTSans font-bold text-[15px] text-left leading-5'>Keluar</button>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}
export default Dashboard