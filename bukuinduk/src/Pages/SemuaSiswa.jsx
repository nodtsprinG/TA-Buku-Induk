import React, { useState } from 'react';
import Sidebar from '../Components/PagesComponent/Sidebar';
import Header from '../Components/PagesComponent/Header';
import Search from '../Components/SearchBar/SearchInput';
import TabelSemua from '../Components/Tables/TabelSiswa';
import ImportButton from '../Components/Buttons/ButtonImport';
import DeleteButton from '../Components/Buttons/ButtonDelete';
import NextButton from '../Components/Buttons/ButtonNext';
import Filter from '../Components/Buttons/Filter';
import { MdDelete } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const SemuaSiswa = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isImportOpen, setIsImportOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    const toggleDelete = () => {
        setIsDeleteOpen((prev) => !prev);
    };
    const toggleImport = () => {
        setIsImportOpen((prev) => !prev);
    };

    const textHeader = 'Data Siswa ADMIN';
    const textSubHeader = 'Data Semua Siswa';
    const placeholder = 'Cari Siswa...'

    return (
        <div className="w-full h-full flex">
            {/* Sidebar */}
            <div className="w-[284px] h-full">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <Header textHeader={textHeader} textSubHeader={textSubHeader} />

                <div className="w-[1132px] h-[772px] mt-4 ml-4 p-[10px] gap-[10px]">
                    <div className="w-[1112px] h-[772px] p-4 rounded-[10px] bg-subcontent relative">
                        {/* Wrapper untuk ikon filter dan search bar */}
                        <div className="flex items-center gap-4">
                            {/* Tombol Filter */}
                            <div className="relative">
                                <div onClick={toggleFilter} className="w-[40px] h-[32px] bg-white text-slate-600 rounded-md flex items-center justify-center">
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
                            <div className="relative">
                                <div onClick={toggleDelete} className='w-[112px] h-[32px] ml-[400px] bg-delete rounded-md p-[6px_12px_6px_12px] gap-2 flex justify-center items-center text-white'>
                                    <MdDelete className='w-4 h-4' />
                                    <button className='font-Quicksand text-[14px] font-medium leading-5 tracking-[0.02em] text-left'>Hapus</button>
                                </div>
                                {isDeleteOpen && (
                                    <DeleteButton isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} />
                                )}
                            </div>
                            <div>
                                <div onClick={toggleImport} className='w-[131px] h-[32px] bg-[#2264E5] rounded-md p-[6px_12px_6px_12px] gap-2 flex justify-center items-center text-white'>
                                    <FaPlus className='w-3 h-3' />
                                    <button className='font-Quicksand text-[14px] font-medium leading-5 tracking-[0.02em] text-left'>Import Data</button>
                                </div>
                                {isImportOpen && (
                                    <ImportButton isImportOpen={isImportOpen} setIsImportOpen={setIsImportOpen} />
                                )}
                            </div>
                        </div>
                        <TabelSemua />
                    </div>

                    <div className="flex items-end justify-end mt-5">
                        <NextButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SemuaSiswa;
