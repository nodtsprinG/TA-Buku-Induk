import Lanjut from '../Buttons/ButtonNext';
import Kembali from '../Buttons/BackButton';
import React, { useState } from 'react';

const KeteranganAyah = () => {
    const [formData, setFormData] = useState({
        nama: '',
        tempatTanggalLahir: '',
        agama: '',
        kewarganegaraan: '',
        pendidikan: '',
        pekerjaan: '',
        pengeluaranPerBulan: '',
        alamat: '',
        statusHidup: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(value => value === '')) {
            setError('Semua field harus diisi.');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className='w-[1031px] h-[700px] mx-auto mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            <div className='w-[890px] h-[600px] mx-auto my-auto p-10 overflow-y-auto no-scrollbar'>
                <form onSubmit={handleSubmit}>
                    {error && <div className="text-red-500 text-left mb-2" aria-live="assertive">{error}</div>}

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Nama</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='nama'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        aria-label="Nama"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Tempat Tanggal Lahir</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='tempatTanggalLahir'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.tempatTanggalLahir}
                                        onChange={handleChange}
                                        aria-label="Tempat Tanggal Lahir"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Agama</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='agama'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.agama}
                                        onChange={handleChange}
                                        aria-label="Agama"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Kewarganegaraan</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='kewarganegaraan'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.kewarganegaraan}
                                        onChange={handleChange}
                                        aria-label="Kewarganegaraan"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Pendidikan</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='pendidikan'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.pendidikan}
                                        onChange={handleChange}
                                        aria-label="Pendidikan"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Pekerjaan</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='pekerjaan'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.pekerjaan}
                                        onChange={handleChange}
                                        aria-label="Pekerjaan"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Pengeluaran per Bulan</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='pengeluaranPerBulan'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.pengeluaranPerBulan}
                                        onChange={handleChange}
                                        aria-label="Pengeluaran per Bulan"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Alamat Rumah/Telepon</th>
                                <th className="h-[85px] text-left">
                                    <input
                                        type='text'
                                        name='alamat'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.alamat}
                                        onChange={handleChange}
                                        aria-label="Alamat Rumah/Telepon"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold size-[24px] text-left">Masih Hidup/Meninggal Dunia</th>
                                <th className="h-[85px] text-left">
                                    <select
                                        name='statusHidup'
                                        className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none"
                                        value={formData.statusHidup}
                                        onChange={handleChange}
                                        aria-label="Status Hidup"
                                    >
                                        <option value="">Pilih</option>
                                        <option value="Masih Hidup">Masih Hidup</option>
                                        <option value="Meninggal Dunia">Meninggal Dunia</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                    </table>

                    {error && <div className="text-red-500 text-left mb-2">{error}</div>}

                    <div className='mt-10 float-start'>
                        <button type="button">
                            <Kembali to="/halamandepan/pendidikan" />
                        </button>
                    </div>
                    <div className='mt-10 ml-10 float-end'>
                        <button type='submit'>
                            <Lanjut to="/halamandepan/ketIbu" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default KeteranganAyah;