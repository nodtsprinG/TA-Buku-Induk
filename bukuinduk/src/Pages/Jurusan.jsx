import React, { useState } from 'react';
import Sidebar from '../Components/PagesComponent/Sidebar';
import Header from '../Components/PagesComponent/Header';
import Search from '../Components/SearchBar/SearchInput';
import { FaFilter, FaPlus, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Jurusan = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isImportOpen, setIsImportOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState({}); // Menyimpan status dropdown per jurusan
    const [kelasList, setKelasList] = useState({});

    const toggleDropdown = (index) => {
        setOpenDropdown(prevState => ({
            ...prevState,
            [index]: !prevState[index], // Toggle dropdown untuk jurusan tertentu
        }));
    };

    const handleTambahKelas = (jurusanIndex) => {
        const kelasNama = prompt('Masukkan nama kelas:');
        if (kelasNama) {
            setKelasList((prevState) => {
                const updatedKelas = { ...prevState };
                if (!updatedKelas[jurusanIndex]) {
                    updatedKelas[jurusanIndex] = [];
                }
                updatedKelas[jurusanIndex].push(kelasNama);
                return updatedKelas;
            });
        }
    };

    const jurusanList = [
        "Rekayasa Perangkat Lunak",
        "Desain Komunikasi Visual",
        "Animasi",
        "Broadcasting",
        "Teknik Komputer Jaringan",
        "Elektronika Industri",
        "Audio Video",
        "Mekatronika",
    ];

    const textHeader = "MENU NAMA";
    const textSubHeader = "jurusan SMKN 2 SINGOSARI ";
    const placeholder = "Tahun Ajaran Default 2024";

    return (
        <div className="w-full h-full flex">
            {/* Sidebar */}
            <div className="w-[284px] h-full">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <Header textHeader={textHeader} textSubHeader={textSubHeader} />

                <div className="w-[1132px] mt-4 ml-4 p-4">
                    {/* Search and Add Button */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                            <div
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="w-[40px] h-[32px] border border-gray-600 bg-white text-slate-600 rounded-md flex items-center justify-center cursor-pointer"
                            >
                                <FaFilter />
                            </div>
                        </div>

                        <div className="relative w-[370px] h-[45px] rounded-md">
                            <Search placeholder={placeholder} />
                        </div>

                        <button
                            onClick={() => setIsImportOpen(!isImportOpen)}
                            className="ml-auto w-[200px] h-[45px] bg-[#2264E5] rounded-md text-white flex items-center justify-center gap-2 font-bold text-lg"
                        >
                            <FaPlus className="w-5 h-5" />
                            Tambah Jurusan
                        </button>
                    </div>

                    {/* Jurusan List */}
                    <div className="grid grid-cols-2 gap-4">
                        {jurusanList.map((jurusan, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg border border-gray-300"
                            >
                                {/* Header Card */}
                                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                                    <span className="font-semibold text-lg">{jurusan}</span>
                                    <div className="flex items-center gap-2">
                                        <button className="text-gray-600 hover:text-red-600">
                                            <FaTrash />
                                        </button>
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="text-gray-600 hover:text-gray-800"
                                        >
                                            {openDropdown[index] ? (
                                                <FaChevronUp />
                                            ) : (
                                                <FaChevronDown />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Dropdown Content */}
                                {openDropdown[index] && (
                                    <div className="p-4">
                                        <button
                                            onClick={() => handleTambahKelas(index)}
                                            className="w-full flex items-center justify-center gap-2 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-1000 rounded-md px-4 py-2 font-medium transition duration-200"
                                        >
                                            <FaPlus className="text-lg" />
                                            <span>Tambah Kelas</span>
                                        </button>
                                        <div className="mt-2">
                                            {(kelasList[index] || []).map((kelas, kelasIndex) => (
                                                <div
                                                    key={kelasIndex}
                                                    className="p-2 bg-gray-100 rounded-md mb-2 text-sm font-medium text-gray-700"
                                                >
                                                    {kelas}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jurusan;