import React, {useState} from 'react'
import { RiFileExcel2Fill } from "react-icons/ri";
import { MdPictureAsPdf } from "react-icons/md";
import Edit from '../Buttons/Edit'
import Hapus from '../Buttons/Hapus'
const TabelSiswa = () => {
    const dataDummy = [
        {
            nomor: 1,
            nama:'Ahmad Syaputra',
            jurusan:'Rekayasa Perangkat Lunak',
            angkatan:'2022',
            kelas:'XII'
        },
        {
            nomor: 2,
            nama:'Muhammad Diky',
            jurusan:'Desain Komunikasi Visual',
            angkatan:'2023',
            kelas:'XI'
        },
        {
            nomor: 3,
            nama:'Riski Maulana',
            jurusan:'Mekatronika',
            angkatan:'2022',
            kelas:'XII'
        },
        {
            nomor: 4,
            nama:'Arkhan Prasetya',
            jurusan:'Audio VIdeo',
            angkatan:'2024',
            kelas:'X'
        },
        {
            nomor: 5,
            nama:'Azizah Putri',
            jurusan:'Teknik Komunikasi dan Jaringan',
            angkatan:'2023',
            kelas:'XI'
        }
    ];

    const [siswa, setSiswa] = useState(dataDummy);

    return (
        <div>
            {/* Header Tabel */}
            <table className='w-[1074px] h-[55px] mt-4 font-Quicksand'>
                <thead className='w-full border border-black bg-transparent'>
                    <tr>
                        <th className='w-[36px] h-[53px] px-[18px] gap-[10px]'>
                            <input type="checkbox" />
                        </th>
                        <th className='w-[65px] h-[53px]'>Nomor</th>
                        <th className='w-[305px] h-[53px]'>Nama</th>
                        <th className='w-[200px] h-[53px]'>Jurusan</th>
                        <th className='w-[82px] h-[53px] text-center'>Angkatan</th>
                        <th className='w-[60px] h-[53px] text-center'>Kelas</th>
                        <th className='w-[291px] h-[53px] text-center'>Aksi</th>
                    </tr>
                </thead>
            </table>

            {/* Isi Tabel */}
            <table className='w-[1074px] mt-1 font-Quicksand'>
                <tbody className='w-full border border-black bg-transparent'>
                    {dataDummy.map((siswa, index) => (
                        <tr key={siswa.id}>
                            <td className='w-[36px] h-[60px] px-[18px] py-[30px] border border-black'>
                                <input className="left-[50%]" type="checkbox" />
                            </td>
                            <td className='w-[65px] h-[60px] border border-black text-center'>
                                {index + 1}
                            </td>
                            <td className='w-[305px] h-[60px] border border-black px-4'>
                                {siswa.nama}
                            </td>
                            <td className='w-[200px] h-[60px] border border-black p-2'>
                                {siswa.jurusan}
                            </td>
                            <td className='w-[82px] h-[60px] border border-black text-center'>
                                {siswa.angkatan}
                            </td>
                            <td className='w-[60px] h-[60px] border border-black text-center'>
                                {siswa.kelas}
                            </td>
                            <td className='w-[291px] h-[60px] border border-black'>
                                <div className='w-full h-full p-4 flex items-center space-x-6'>
                                    <button className='text-green-600 w-[45px] h-[58px]'>
                                        <RiFileExcel2Fill className='w-[45px] h-[45px]' />
                                        <label>Excel</label>
                                    </button>
                                    <button className='text-red-600 w-[45px] h-[58px]'>
                                        <MdPictureAsPdf className='w-[45px] h-[45px]' />
                                        <label>PDF</label>
                                    </button>
                                    <div className="w-[39px] h-[26px] rounded-[5px] bg-[#4B85FA] outline-none">
                                        <Edit />
                                    </div>
                                    <div className="w-[39px] h-[26px] rounded-[5px] bg-[#FF0D0D] outline-none">
                                        <Hapus />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TabelSiswa
    