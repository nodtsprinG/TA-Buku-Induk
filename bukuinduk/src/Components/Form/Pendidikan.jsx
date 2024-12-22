import React, { useState } from 'react';
import Kembali from '../Buttons/BackButton'
import Lanjut from '../Buttons/ButtonNext'
const Pendidikan = () => {
    const [formData, setFormData] = useState({
        tamatanDari: '',
        nomorIjazah: '',
        nomorSKHUN: '',
        dariSekolah: '',
        alasan: '',
        kelas: '',
        bidangKeahlian: '',
        programKeahlian: '',
        paketKeahlian: '',
        tanggal: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="'w-[1031px] h-full mx-[50px] mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]">
            <div className="w-[890px] h-[600px] mx-auto my-auto p-10 overflow-y-auto no-scrollbar">
                <table className="mt-10 font-Quicksand w-full">
                    <tbody>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px] text-left">1. Keterangan Sebelumnya</td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px] text-left">a. Tamatan dari</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="tamatanDari"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.tamatanDari}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px] text-left">b. Nomor Ijazah</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="nomorIjazah"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.nomorIjazah}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">c. Nomor SKHUN</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="nomorSKHUN"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.nomorSKHUN}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">2. Pindahan</td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">a. Dari Sekolah</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="dariSekolah"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.dariSekolah}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">b. Alasan</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="alasan"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.alasan}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">3. Diterima di Sekolah Ini</td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">a. Kelas</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="kelas"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.kelas}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">b. Bidang Keahlian</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="bidangKeahlian"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.bidangKeahlian}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">c. Program Keahlian</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="programKeahlian"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.programKeahlian}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">d. Paket Keahlian</td>
                            <td className="h-[85px]">
                                <input
                                    type="text"
                                    name="paketKeahlian"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.paketKeahlian}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[350px] font-bold text-[24px]">e. Tanggal</td>
                            <td className="h-[85px]">
                                <input
                                    type="date"
                                    name="tanggal"
                                    className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                    value={formData.tanggal}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-10 float-start'>
                    <Kembali back="/halamandepan/kesehatan" />
                </div>
                <div className='mt-10 ml-10 float-end'>
                    <Lanjut to="/halamandepan/ketAyah" />
                </div>
            </div>
        </div>
    );
};

export default Pendidikan;