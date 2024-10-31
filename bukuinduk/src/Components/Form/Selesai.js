import Lanjut from '../Buttons/ButtonNext'
import Kembali from '../Buttons/BackButton'
import React, { useState } from 'react'
const Selesai = () => {

    const [formData, setFormData] = useState({
        melanjutkan: '',
        perusahaan: '',
        tanggal: '',
        penghasilan: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className='w-[1031px] h-[700px] mx-auto mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            <div className='w-[890px] h-3/4 mx-auto my-auto p-10'>
                <table className='mt-10 font-Quicksand'>
                    <tr>
                        <td className="w-[350px] font-bold size-[24px]">Melanjutkan Ke </td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='melanjutkan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.melanjutkan}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="mt-0">
                        <td className="w-[350px] font-bold size-[24px]">Bekerja </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold size-[24px]">A. Nama Perusahaan </td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='perusahaan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.perusahaaan}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold size-[24px]">B. Tanggal Mulai Kerja </td>
                        <td className="h-[85px]">
                            <input
                                type='date'
                                name='tanggal'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.tanggal}
                                onChange={handleChange}
                                placeholder=""
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-[350px] font-bold size-[24px]">C. Penghasilan </td>
                        <td className="h-[85px]">
                            <input
                                type='number'
                                name='penghasilan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.penghasilan}
                                onChange={handleChange}
                                step={100000}
                            />
                        </td>
                    </tr>
                </table>
                <div className='mt-10 float-start'>
                    <Kembali />
                </div>
                <div className='mt-10 ml-10 float-end'>
                    <Lanjut />
                </div>
            </div>
        </div>
    )
}
export default Selesai