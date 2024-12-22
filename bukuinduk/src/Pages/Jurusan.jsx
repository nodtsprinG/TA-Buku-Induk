import React, { useState } from 'react'
import Sidebar from '../Components/PagesComponent/Sidebar'
import Header from '../Components/PagesComponent/Header'
import Filter from '../Components/Buttons/Filter'
import Search from '../Components/SearchBar/SearchInput'
import ImportButton from '../Components/Buttons/ButtonImport';
import { FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const Jurusan = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isImportOpen, setIsImportOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    const toggleImport = () => {
        setIsImportOpen((prev) => !prev);
    };

    const textHeader = "Jurusan"
    const textSubHeader = "Jurusan SMKN 2 Singosari"
    const placeholder = "Tahun Ajaran Default 2024"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Sidebar />
            </div>
            <div className='flex-1'>
                <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                <div className="w-[1132px] h-[772px] mt-4 ml-4 p-[10px] gap-[10px]">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div onClick={toggleFilter} className="w-[40px] h-[32px] border border-gray-600 bg-white text-slate-600 rounded-md flex items-center justify-center">
                                <FaFilter />
                            </div>
                            {/* Filter Panel */}
                            <Filter isOpen={isFilterOpen} toggleFilter={toggleFilter} />
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-[370px] h-[45px] rounded-md mt-3">
                            <Search placeholder={placeholder} />
                        </div>

                        {/* Tombol Delete dan Import */}
                        <div className="mt-3 ml-[400px]">
                            <div onClick={toggleImport} className='w-[300px] h-[45px] bg-[#2264E5] rounded-md p-[6px_12px_6px_12px] gap-2 flex justify-center items-center text-white'>
                                <FaPlus className='w-5 h-5' />
                                <button className='font-Quicksand text-[24px] font-bold leading-[104%] text-left'>Tambah Jurusan</button>
                            </div>
                            {isImportOpen && (
                                <ImportButton isImportOpen={isImportOpen} setIsImportOpen={setIsImportOpen} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jurusan