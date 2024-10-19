import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    return (
        <div className="relative w-full h-full">
            <CiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 w-[30px] h-[30px]" />
            <input
                placeholder="Cari"
                className="w-full h-full pl-[48px] pr-[20px] rounded-[12px] p-[10px] border outline-none border-[#939393] placeholder: font-PTSans font-bold size-4 leading-[20.7px] ml-2"
                type="search"
            />
        </div>

    )
}
export default SearchBar
