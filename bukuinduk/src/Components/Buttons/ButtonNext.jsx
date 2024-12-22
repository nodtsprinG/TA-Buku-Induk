import { Link } from "react-router-dom"
const ButtonNext = ({to}) => {
    return (
        <div className='w-[200px] h-[50px] bg-next rounded-[10px] flex justify-center items-center text-center'>
            <Link to={to}><label className='font-Quicksand font-bold size-[24px] leading-4 tracking-[4px] text-white'>Lanjut</label></Link>
        </div>
    )
}
export default ButtonNext