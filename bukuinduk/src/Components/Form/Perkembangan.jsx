import Lanjut from '../Buttons/ButtonNext'
import Kembali from '../Buttons/BackButton'
import React, { useState } from 'react'
const Perkembangan = () => {

    const [formData, setFormData] = useState({
        MenerimaBeasiswa: '',
        MeninggalkanSekolah: '',
        AkhirPendidikan: '',

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className='w-[1031px] h-[700px] mx-[50px] mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            <div className='w-[890px] h-3/4 mx-auto my-auto p-10'>
                <table className='mt-10 font-Quicksand'>
                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Menerima Beasiswa </td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='MenerimaBeasiswa'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.MenerimaBeasiswa}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Meninggalkan Sekolah </td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='MeninggalkanSekolah'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.MeninggalkanSekolah}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="w-[350px] font-bold text-[24px]">Akhir Pendidikan </td>
                        <td className="h-[85px]">
                            <input
                                type='text'
                                name='AkhirPendidikan'
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none float-end"
                                value={formData.AkhirPendidikan}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                </table>
                <div className='mt-10 float-start'>
                    <Kembali back="/halamandepan/ketWali" />
                </div>
                <div className='mt-10 ml-10 float-end'>
                    <Lanjut to="/halamandepan/selesai" />
                </div>
            </div>
        </div>
    )
}
export default Perkembangan