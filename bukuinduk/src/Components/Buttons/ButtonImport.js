import { FaPlus } from "react-icons/fa";
const ButtonImport = () => {
    return (
        <div className='w-[131px] h-[32px] bg-[#2264E5] rounded-md p-[6px_12px_6px_12px] gap-2 flex justify-center items-center text-white'>
            <FaPlus className='w-3 h-3' />
            <button className='font-Quicksand text-[14px] font-medium leading-5 tracking-[0.02em] text-left'>Import Data</button>
        </div>
    )
}
export default ButtonImport;