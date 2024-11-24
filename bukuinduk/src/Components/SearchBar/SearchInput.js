import {ReactComponent as Search} from '../../Assets/search.svg'
const SearchInput = () => {
    return(       
            <div className='flex w-full bg-white gap-2 border rounded-md p-[8px_12px_8px_12px]'>
                <Search className='w-4 h-4 my-auto'/>
                <input className="w-full h-full outline-none leading-5 font-Inter size-[14px] text-[#A1A9B8]" placeholder="Search..."></input>
            </div>
    )
}
export default SearchInput;