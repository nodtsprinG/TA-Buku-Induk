const Header = (props) => {
    return (
        <div className='bg-[#778FC6] w-[1112px] h-[90px] mt-[13px] mx-auto rounded-[10px]'>
            <div className='w-[400px] h-[54px] mt-[28px] p-4'>
                <h2 className='font-PTSans font-bold text-[24px] leading-[31.06px]'>{props.textHeader}</h2>
                <h4 className='font-PTSans font-normal leading-[19.41px] text-[15px]'>Selamat datang di menu {props.textHeader}</h4>
            </div>
        </div>
    )
}
export default Header;