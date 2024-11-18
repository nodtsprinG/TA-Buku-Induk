import Lanjut from '../Buttons/ButtonNext';
import Kembali from '../Buttons/BackButton';
import React, { useState } from 'react';

const Kesehatan = () => {
    const [formData, setFormData] = useState({
        golonganDarah: '',
        penyakit: '',
        kelainanJasmani: '',
        tinggiBadan: '',
        beratBadan: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.golonganDarah || !formData.penyakit || !formData.kelainanJasmani || !formData.tinggiBadan || !formData.beratBadan) {
            setError('Semua field harus diisi.');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className='w-[1031px] h-[700px] mx-[50px] mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]'>
            <div className='w-[890px] h-3/4 mx-auto my-auto p-10'>
                <form onSubmit={handleSubmit}>
                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Golongan Darah</th>
                                <th className="h-[85px]">
                                    <select
                                        name='golonganDarah'
                                        className="w-[507px] h-[65px] font-normal rounded-[10px] border p-[10px] outline-none"
                                        value={formData.golonganDarah}
                                        onChange={handleChange}
                                        aria-label="Golongan Darah"
                                    >
                                        <option value="">Pilih</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                        <option value="O">O</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Penyakit yang Diderita</th>
                                <th className="h-[85px]">
                                    <input
                                        type='text'
                                        name='penyakit'
                                        className="w-[507px] h-[65px] font-normal rounded-[10px] border p-[10px] outline-none"
                                        value={formData.penyakit}
                                        onChange={handleChange}
                                        aria-label="Penyakit"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Kelainan Jasmani</th>
                                <th className="h-[85px]">
                                    <select
                                        name='kelainanJasmani'
                                        className="w-[507px] h-[65px] font-normal rounded-[10px] border p-[10px] outline-none"
                                        value={formData.kelainanJasmani}
                                        onChange={handleChange}
                                        aria-label="Kelainan Jasmani"
                                    >
                                        <option value="">Pilih</option>
                                        <option value="Tidak Ada">Tidak Ada</option>
                                        <option value="Cacat Fisik">Cacat Fisik</option>
                                        <option value="Keterbatasan Gerak">Keterbatasan Gerak</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Tinggi Badan (cm)</th>
                                <th className="h-[85px]">
                                    <input
                                        type='number'
                                        name='tinggiBadan'
                                        className="w-[507px] h-[65px] font-normal rounded-[10px] border p-[10px] outline-none"
                                        value={formData.tinggiBadan}
                                        onChange={handleChange}
                                        aria-label="Tinggi Badan"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    <table className='mt-5 font-Quicksand'>
                        <thead>
                            <tr>
                                <th className="w-[350px] font-bold text-[24px] text-left">Berat Badan (kg)</th>
                                <th className="h-[85px]">
                                    <input
                                        type='number'
                                        name='beratBadan'
                                        className="w-[507px] h-[65px] font-normal rounded-[10px] border p-[10px] outline-none"
                                        value={formData.beratBadan}
                                        onChange={handleChange}
                                        aria-label="Berat Badan"
                                    />
                                </th>
                            </tr>
                        </thead>
                    </table>

                    {error && <div className="text-red-500 text-left mb-2">{error}</div>}

                    <div className='mt-10 float-start'>
                        <Kembali back="/halamandepan/alamat"/>
                    </div>
                    <div className='mt-10 ml-10 float-end'>
                        <button type='submit'>
                            <Lanjut to="/halamandepan/pendidikan" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Kesehatan;