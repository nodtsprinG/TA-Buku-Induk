import Totals from '../Assets/all.png';
import Active from '../Assets/activee.png';
import Boys from '../Assets/boys.png';
import Girls from '../Assets/girls.png';

const FourBoxes = () => {
    return (
        <div className='flex w-full h-full gap-5'>
            {/* Box 1: Total Data Siswa */}
            <div className='w-[270px] h-[108px] rounded-xl p-6 gap-2 bg-[#5775BA80]'>
                <div className='flex w-[200px] h-[65px]'>
                    <div className='w-[65px] h-[65px]'>
                        <img className='w-full h-full' src={Totals} alt="Total Siswa" />
                    </div>
                    <div className='w-[130px] h-[65px] flex flex-col justify-center gap-2'>
                        <label className='font-PTSans font-bold text-sm text-center'>Total Data Siswa</label>
                        <label className='font-PTSans font-bold text-sm text-center'>1212</label>
                    </div>
                </div>
            </div>

            {/* Box 2: Siswa-Siswi Aktif */}
            <div className='w-[270px] h-[108px] rounded-xl p-6 gap-2 bg-[#5775BA80]'>
                <div className='flex w-[200px] h-[65px]'>
                    <div className='w-[65px] h-[65px]'>
                        <img className='w-full h-full' src={Active} alt="Siswa Aktif" />
                    </div>
                    <div className='w-[130px] h-[65px] flex flex-col justify-center gap-2'>
                        <label className='font-PTSans font-bold text-sm text-center'>Siswa-Siswi Aktif</label>
                        <label className='font-PTSans font-bold text-sm text-center'>1212</label>
                    </div>
                </div>
            </div>

            {/* Box 3: Siswa Laki-Laki */}
            <div className='w-[270px] h-[108px] rounded-xl p-6 gap-2 bg-[#5775BA80]'>
                <div className='flex w-[200px] h-[65px]'>
                    <div className='w-[65px] h-[65px]'>
                        <img className='w-full h-full' src={Boys} alt="Siswa Laki-Laki" />
                    </div>
                    <div className='w-[130px] h-[65px] flex flex-col justify-center gap-2'>
                        <label className='font-PTSans font-bold text-sm text-center'>Siswa Laki-Laki</label>
                        <label className='font-PTSans font-bold text-sm text-center'>1212</label>
                    </div>
                </div>
            </div>

            {/* Box 4: Siswa Perempuan */}
            <div className='w-[270px] h-[108px] rounded-xl p-6 gap-2 bg-[#5775BA80]'>
                <div className='flex w-[200px] h-[65px]'>
                    <div className='w-[65px] h-[65px]'>
                        <img className='w-full h-full' src={Girls} alt="Siswa Perempuan" />
                    </div>
                    <div className='w-[130px] h-[65px] flex flex-col justify-center gap-2'>
                        <label className='font-PTSans font-bold text-sm text-center'>Siswa Perempuan</label>
                        <label className='font-PTSans font-bold text-sm text-center'>1212</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourBoxes;
