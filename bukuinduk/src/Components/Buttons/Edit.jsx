import { ReactComponent as Editbtn } from '../../Assets/edit.svg'
const Edit = () => {
    return (
        <div>
            <button className="w-full h-full outline-none rounded-[5px] p-[3px_9.5px_3px_9.5px]">
                <Editbtn className='w-5 h-5 text-black'/>
            </button>
        </div>
    )
}
export default Edit