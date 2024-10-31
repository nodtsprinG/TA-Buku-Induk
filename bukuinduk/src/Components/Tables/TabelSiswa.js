import { RiFileExcel2Fill } from "react-icons/ri";
import { MdPictureAsPdf } from "react-icons/md";
const TabelSiswa = () => {
    return (
        <div>
            <table className='w-[1074px] h-[55px] mt-4 font-Quicksand'>
                <thead className='w-full border border-black bg-transparent'>
                    <th className='w-[36px] h-[53px] p-[10px] gap-[10px]'><button type='checkbox'>d</button></th>
                    <th className='w-[65px] h-[53px]'>Nomor</th>
                    <th className='w-[305px] h-[53px]'>Nama</th>
                    <th className='w-[200px] h-[53px]'>Jurusan</th>
                    <th className='w-[82px] h-[53px] text-center'>Angkatan</th>
                    <th className='w-[60px] h-[53px] text-center'>Kelas</th>
                    <th className='w-[291px] h-[53px] text-center'>Aksi</th>
                </thead>
            </table>
            <table className='w-[1074px] mt-1 font-Quicksand'>
                <tbody className='w-full border border-black bg-transparent mt-2'>
                    <tr>
                        <td className='w-[36px] h-[53px] border border-black'><button type='checkbox'></button></td>
                        <td className='w-[65px] h-[53px] border border-black text-center'>1</td>
                        <td className='w-[305px] h-[53px] border border-black px-4'>Cristiano Antony</td>
                        <td className='w-[200px] h-[53px] border border-black p-2'>Rekayasa Perangkat Lunak</td>
                        <td className='w-[82px] h-[53px] border border-black text-center'>2022</td>
                        <td className='w-[60px] h-[53px] border border-black text-center'>XI</td>
                        <td className='w-[291px] h-[53px] border border-black'>
                            <div className='w-full h-full p-4 flex items-center space-x-4'>
                                <button className='text-green-600 w-[45px] h-[50px]'>
                                    <RiFileExcel2Fill className='w-full h-full' />
                                </button>
                                <button className='text-red-600 w-[45px] h-[50px]'>
                                    <MdPictureAsPdf className='w-full h-full' />
                                </button>
                                <button className='w-[130px] h-[26px] rounded-[5px] bg-[#4B85FA] font-PTSans text-sm font-bold leading-5 tracking-[0.02em] text-white'>Lihat Detail</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='w-[36px] h-[53px] border border-black'><button type='checkbox'></button></td>
                        <td className='w-[65px] h-[53px] border border-black text-center'>2</td>
                        <td className='w-[305px] h-[53px] border border-black px-4'>Hillary Abigail</td>
                        <td className='w-[200px] h-[53px] border border-black p-2'>Desain Komunikasi Visual</td>
                        <td className='w-[82px] h-[53px] border border-black text-center'>2022</td>
                        <td className='w-[60px] h-[53px] border border-black text-center'>XI</td>
                        <td className='w-[291px] h-[53px] border border-black'>
                            <div className='w-full h-full p-4 flex items-center space-x-4'>
                                <button className='text-green-600 w-[45px] h-[50px]'>
                                    <RiFileExcel2Fill className='w-full h-full' />
                                </button>
                                <button className='text-red-600 w-[45px] h-[50px]'>
                                    <MdPictureAsPdf className='w-full h-full' />
                                </button>
                                <button className='w-[130px] h-[26px] rounded-[5px] bg-[#4B85FA] font-PTSans text-sm font-bold leading-5 tracking-[0.02em] text-white'>Lihat Detail</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table></div>
    )
}
export default TabelSiswa
