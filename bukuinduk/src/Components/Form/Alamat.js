import Lanjut from '../Buttons/ButtonNext';
import Kembali from '../Buttons/BackButton';
import React, { useState } from 'react';

const Alamat = () => {
    const [formData, setFormData] = useState({ 
        alamat: '', 
        noTelpon: '', 
        tinggalDengan: '', 
        jarakSekolah: '' 
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.alamat || !formData.noTelpon || !formData.tinggalDengan || !formData.jarakSekolah) {
            setError('Semua field harus diisi.');
            return;
        }
    };

    return (
        <div className='w-[1031px] h-[700px] mx-[50px] mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            <div className='w-[890px] h-3/4 mx-auto my-auto p-10'>
                <form onSubmit={handleSubmit}>
                    <table className='mt-10 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Alamat</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='alamat'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.alamat}
                                        onChange={handleChange}
                                        aria-label="Alamat"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="2" className="text-red-500 text-left">{error}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">No Telepon</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='noTelpon'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.noTelpon}
                                        onChange={handleChange}
                                        aria-label="No Telepon"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>
                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Tinggal dengan orang tua/ Saudara/ Asrama/ di Kost</th>
                                <th className="h-[85px] text-left">
                                    <select
                                        name='tinggalDengan'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.tinggalDengan}
                                        onChange={handleChange}
                                        aria-label="Tinggal Dengan"
                                    >
                                        <option value="">Pilih</option>
                                        <option value="Orang Tua">Orang Tua</option>
                                        <option value="Saudara">Saudara</option>
                                        <option value="Di Kost">Di Kost</option>
                                        <option value="Asrama">Asrama</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                    </table>

                    {/* Jarak ke Sekolah Field */}
                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Jarak Tempat Tinggal ke Sekolah</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='jarakSekolah'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.jarakSekolah}
                                        onChange={handleChange}
                                        aria-label="Jarak ke Sekolah"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <div className='mt-10 float-start'>
                        <Kembali back="/halamandepan/"/>
                    </div>
                    <div className='mt-10 ml-10 float-end'>
                        <button type='submit'>
                            <Lanjut to="/halamandepan/kesehatanadmin" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Alamat;