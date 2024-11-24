import React, { useState } from 'react'
import Sidebar from '../Components/PagesComponent/Sidebar'
import Header from '../Components/PagesComponent/Header'
import Search from '../Components/SearchBar/SearchInput'
import TabelSemua from '../Components/Tables/TabelSiswa'
import ImportButton from '../Components/Buttons/ButtonImport'
import DeleteButton from '../Components/Buttons/ButtonDelete'
import Filter from '../Components/Buttons/Filter'
import NextButton from '../Components/Buttons/ButtonNext'
import Pagination from '../Components/Buttons/Pagination'

const SemuaSiswa = () => {
    const textHeader = "Data Siswa ADMIN";
    const textSubHeader = "Data Semua Siswa"
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 3

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Sidebar />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>
                <div className="flex w-[1132px] h-[772px] mt-4 ml-4 p-[10px] gap-[10px]">
                    <div className="w-[1112px] h-[772px] p-4 rounded-[10px] bg-subcontent">
                        {/* Wrapper untuk ikon filter dan search bar */}
                        <div className="flex items-center gap-4">
                            {/* Ikon Filter */}
                            <div className='relative w-[40px] h-[32px] rounded-md p-[6px_12px_6px-12px]'><Filter /></div>

                            {/* Search Bar */}
                            <div className='relative w-[320px] h-[32px] rounded-md p-[6px_12px_6px-12px]'>
                                <Search />
                            </div>
                            <div><DeleteButton /></div>
                            <div><ImportButton /></div>
                        </div>
                        <div>
                            <TabelSemua />
                        </div>
                        <div className='flex-1 mt-[500px]'>
                            <div className='mx-auto'>
                                <Pagination
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                            <div className='ml-[900px]'>
                                <NextButton />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default SemuaSiswa;