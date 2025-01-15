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
        <div className="w-[1031px] h-[800px] mx-[50px] mt-12 p-20 bg-subcontent rounded-tr-[22px] rounded-tl-[22px]">
            <form onSubmit={handleSubmit} className="space-y-12">
                {[
                    { label: "Golongan Darah", name: "golonganDarah", type: "select", options: ["A", "B", "AB", "O"] },
                    { label: "Penyakit yang Diderita", name: "penyakit", type: "text", placeholder: "Contoh: Diabetes, Asma" },
                    { label: "Kelainan Jasmani", name: "kelainanJasmani", type: "select", options: ["Tidak Ada", "Cacat Fisik", "Keterbatasan Gerak", "Lainnya"] },
                    { label: "Tinggi Badan (cm)", name: "tinggiBadan", type: "number", placeholder: "Contoh: 170" },
                    { label: "Berat Badan (kg)", name: "beratBadan", type: "number", placeholder: "Contoh: 60" },
                ].map(({ label, name, type, placeholder, options }, idx) => (
                    <div key={idx} className="flex items-center space-10">
                        <label htmlFor={name} className="w-[345px] font-bold text-[24px] font-Quicksand text-left">{label}</label>
                        {type === "select" ? (
                            <select
                                id={name}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none text-lg"
                            >
                                <option value="">Pilih</option>
                                {options.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={name}
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                placeholder={placeholder}
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none text-lg"
                            />
                        )}
                    </div>
                ))}
                
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
    );
};

export default Kesehatan;