import Lanjut from '../Buttons/ButtonNext';
import Kembali from '../Buttons/BackButton';
import React, { useState } from 'react';

const Perkembangan = () => {
    const [formData, setFormData] = useState({
        menerimaBeasiswa: {
            tahun1: '', kelas1: '', dari1: '',
            tahun2: '', kelas2: '', dari2: '',
            tahun3: '', kelas3: '', dari3: '',
        },
        meninggalkanSekolah: {
            tanggal: '', alasan: '',
        },
        akhirPendidikan: {
            tamatBelajar: '', tahunLulus: '',
            nomorIjazah: '', tanggalIjazah: '',
            nomorSKHUN: '', tanggalSKHUN: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [e.target.dataset.group]: {
                ...prevData[e.target.dataset.group],
                [name]: value,
            },
        }));
    };

    return (
        <div className='w-[1031px] h-[700px] mx-auto mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            <div className='w-[890px] h-3/4 mx-auto my-auto p-10'>
                <table className='mt-10 font-Quicksand'>
                    <tbody>
                        {/* Section 1: Menerima Beasiswa */}
                        <tr>
                            <td className="w-[350px] font-bold text-xl">Menerima Beasiswa</td>
                            <td>
                                <div>
                                    <input type='text' name='tahun1' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.tahun1} onChange={handleChange} placeholder="Tahun" />
                                    <input type='text' name='kelas1' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.kelas1} onChange={handleChange} placeholder="Kelas" />
                                    <input type='text' name='dari1' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.dari1} onChange={handleChange} placeholder="Dari" />
                                </div>
                                <div>
                                    {/* Repeat for tahun2, kelas2, dari2, and tahun3, kelas3, dari3 */}
                                    <input type='text' name='tahun2' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.tahun2} onChange={handleChange} placeholder="Tahun" />
                                    <input type='text' name='kelas2' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.kelas2} onChange={handleChange} placeholder="Kelas" />
                                    <input type='text' name='dari2' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.dari2} onChange={handleChange} placeholder="Dari" />
                                </div>
                                <div>
                                    <input type='text' name='tahun3' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.tahun3} onChange={handleChange} placeholder="Tahun" />
                                    <input type='text' name='kelas3' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.kelas3} onChange={handleChange} placeholder="Kelas" />
                                    <input type='text' name='dari3' data-group="menerimaBeasiswa" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.menerimaBeasiswa.dari3} onChange={handleChange} placeholder="Dari" />
                                </div>
                            </td>
                        </tr>

                        {/* Section 2: Meninggalkan Sekolah */}
                        <tr>
                            <td className="w-[350px] font-bold text-xl">Meninggalkan Sekolah</td>
                            <td>
                                <input type='date' name='tanggal' data-group="meninggalkanSekolah" className="w-[200px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.meninggalkanSekolah.tanggal} onChange={handleChange} />
                                <input type='text' name='alasan' data-group="meninggalkanSekolah" className="w-[300px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.meninggalkanSekolah.alasan} onChange={handleChange} placeholder="Alasan" />
                            </td>
                        </tr>

                        {/* Section 3: Akhir Pendidikan */}
                        <tr>
                            <td className="w-[350px] font-bold text-xl">Akhir Pendidikan</td>
                            <td>
                                <input type='text' name='tamatBelajar' data-group="akhirPendidikan" className="w-[200px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.akhirPendidikan.tamatBelajar} onChange={handleChange} placeholder="Tamat Belajar/Lulus" />
                                <input type='number' name='tahunLulus' data-group="akhirPendidikan" className="w-[100px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.akhirPendidikan.tahunLulus} onChange={handleChange} placeholder="Tahun Lulus" />
                                <input type='text' name='nomorIjazah' data-group="akhirPendidikan" className="w-[200px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.akhirPendidikan.nomorIjazah} onChange={handleChange} placeholder="Nomor Ijazah" />
                                <input type='date' name='tanggalIjazah' data-group="akhirPendidikan" className="w-[200px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.akhirPendidikan.tanggalIjazah} onChange={handleChange} />
                                <input type='text' name='nomorSKHUN' data-group="akhirPendidikan" className="w-[200px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.akhirPendidikan.nomorSKHUN} onChange={handleChange} placeholder="Nomor SKHUN" />
                                <input type='date' name='tanggalSKHUN' data-group="akhirPendidikan" className="w-[200px] h-[30px] m-2 rounded-[10px] border p-[10px] outline-none" value={formData.akhirPendidikan.tanggalSKHUN} onChange={handleChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-10 float-start'>
                    <Kembali />
                </div>
                <div className='mt-10 ml-10 float-end'>
                    <Lanjut />
                </div>
            </div>
        </div>
    );
};

export default Perkembangan;