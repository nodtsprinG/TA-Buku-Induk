import { MdDelete } from "react-icons/md";
const ButtonDelete = () => {
    return (
        <div className='w-[112px] h-[32px] ml-[400px] bg-delete rounded-md p-[6px_12px_6px_12px] gap-2 flex justify-center items-center text-white'>
            <MdDelete className='w-4 h-4' />
            <button className='font-Quicksand text-[14px] font-medium leading-5 tracking-[0.02em] text-left'>Hapus</button>
        </div>
    )
}
export default ButtonDelete