import { Link } from "react-router-dom";
const RoundedButton = () => {
    return (
        <div className="flex items-start justify-start space-x-4 mt-[50px] ml-[50px] font-Quicksand">

            <div class="flex flex-col items-center">
                <Link to="/halamandepan" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black rounded-full font-medium text-[48px] hover:bg-blue-500 hover:text-white'>
                    1
                </Link>
                <span class="text-lg mt-1">Biodata</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/alamat" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    2
                </Link>
                <span class="text-lg mt-1">Alamat</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/kesehatanadmin" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    3
                </Link>
                <span class="text-lg mt-1">Kesehatan</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/pendidikan" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    4
                </Link>
                <span class="text-lg mt-1">Pendidikan</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/ketAyah" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    5
                </Link>
                <span class="text-lg mt-1">Ayah</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/ketIbu" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    6
                </Link>
                <span class="text-lg mt-1">Ibu</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/ketWali" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    7
                </Link>
                <span class="text-lg mt-1">Wali</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/perkembangan" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    8
                </Link>
                <span class="text-lg mt-1">Perkembangan</span>
            </div>

            <div class="flex flex-col items-center">
                <Link to="/halamandepan/selesai" className='w-[110px] h-[110px] flex items-center justify-center bg-slate-100 text-black hover:bg-blue-500 hover:text-white rounded-full font-medium text-[48px]'>
                    9
                </Link>
                <span class="text-lg mt-1">Selesai</span>
            </div>

        </div>

    )
}
export default RoundedButton