import { ReactComponent as Delete } from '../../Assets/delete.svg'
const Hapus = () => {
    return (
        <div>
            <button className="w-full h-full outline-none rounded-[5px] p-[3px_9.5px_3px_9.5px]">
                <Delete className='w-5 h-5 text-black'/>
            </button>
        </div>
    )
}
export default Hapus