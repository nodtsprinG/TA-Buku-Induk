import Dashboard from '../Components/PagesComponent/Dashboard'
import Header from '../Components/PagesComponent/Header'
import TabelSemua from '../Components/Tables/TabelSiswa'
import ImportButton from '../Components/Buttons/ButtonImport'
import DeleteButton from '../Components/Buttons/ButtonDelete'
import Filter from '../Components/Buttons/Filter'
import { CiSearch } from "react-icons/ci";
import NextButton from '../Components/Buttons/ButtonNext'
import PageNum from '../Components/Buttons/PageNumber'

const SemuaSiswa = () => {
    const textHeader = "Data Siswa ADMIN";
    const textSubHeader = "Data Semua Siswa"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
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
                            <div className='w-[40px] h-[32px]'><Filter /></div>

                            {/* Search Bar */}
                            <div className='relative w-[320px] h-[32px] rounded-md p-[6px_12px_6px-12px]'>
                                <CiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 w-[20px] h-[30px]" />
                                <input
                                    placeholder="Cari"
                                    className="w-full h-full pl-[48px] pr-[20px] rounded-[6px] p-[10px] border outline-none border-[#939393] placeholder:font-Quicksand font-bold size-4 leading-[20.7px]"
                                    type="search"
                                />
                            </div>
                            <div><DeleteButton /></div>
                            <div><ImportButton /></div>
                        </div>
                        <div>
                            <TabelSemua />
                        </div>
                        <div className='flex-1 mt-[500px]'>
                            <div className='ml-[450px] mt-10'>
                                <PageNum />
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