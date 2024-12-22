import Lanjut from '../Buttons/ButtonNext';
import Kembali from '../Buttons/BackButton';
import React, { useState } from 'react';

const KeteranganIbu = () => {
    const [formData, setFormData] = useState({
        Nama: '', // teks
        TTL: '', // TANGGAL
        Agama: '', // string
        Kewarganegaraan: '', // string
        Pendidikan: '', // teks
        Pekerjaan: '', // teks
        PB: '', // number
        ATLP: '', // teks
        MHALM: '', // teks
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='w-[1031px] h-[700px] mx-[50px] mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            {/*  scroll */}
            <div className='w-[890px] h-[600px] mx-auto my-auto p-10 overflow-y-auto no-scrollbar'>
                <table className='mt-10 font-Quicksand'>
                    {/* Daftar input form */}
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Nama</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='Nama'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.Nama}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Tempat dan Tanggal Lahir</td>
                        <td className="h-[85px]">
                            <input
                                type='date'
                                name='TTL'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.TTL}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Agama</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='Agama'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.Agama}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Kewarganegaraan</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='Kewarganegaraan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.Kewarganegaraan}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Pendidikan</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='Pendidikan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.Pendidikan}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Pekerjaan</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='Pekerjaan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.Pekerjaan}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Pengeluaran per Bulan</td>
                        <td className="h-[85px]">
                            <input
                                type='number'
                                name='PB'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.PB}
                                onChange={handleChange}
                                step={100000}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Alamat Rumah/Telpn.</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='ATLP'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.ATLP}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Masih Hidup/Meninggal Dunia</td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='MHALM'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.MHALM}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </table>
                <div className='mt-10 float-start'>
                    <Kembali back="/halamandepan/ketAyah" />
                </div>
                <div className='mt-10 ml-10 float-end'>
                    <Lanjut to="/halamandepan/ketWali" />
                </div>
            </div>
        </div>
    );
};

export default KeteranganIbu;