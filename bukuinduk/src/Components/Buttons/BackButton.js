import { Link } from "react-router-dom"
const BackButton = ({back}) => {
    return (
        <div className='w-[200px] h-[50px] bg-back rounded-[10px] flex justify-center items-center text-center'>
            <Link to={back}><label className='font-Quicksand font-bold size-[24px] leading-4 tracking-[4px] text-white'>KEMBALI</label></Link>
        </div>
    )
}
export default BackButton