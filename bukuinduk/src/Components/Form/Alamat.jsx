import Lanjut from '../Buttons/ButtonNext';
import Kembali from '../Buttons/BackButton';
import React, { useState } from 'react';

const Alamat = () => {
    const [formData, setFormData] = useState({
        alamat: '',
        noTelepon: '',
        tinggalDengan: '',
        jarakKeSekolah: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.alamat || !formData.noTelepon || !formData.tinggalDengan || !formData.jarakKeSekolah) {
            setError('Semua field harus diisi.');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-[1031px] h-[800px] mx-[50px] mt-12 p-20 bg-subcontent rounded-tl-[22px] rounded-tr-[22px] font-bold size-[24px]">
            <form onSubmit={handleSubmit} className="space-y-12">
                {[
                    { label: "Alamat", name: "alamat" },
                    { label: "No Telepon", name: "noTelepon" },
                    { label: "Tinggal dengan orang tua/ Saudara/ Asrama/ di Kost", name: "tinggalDengan", type: "select", options: ["Orang Tua", "Saudara", "Asrama", "Kost"] },
                    { label: "Jarak Tempat Tinggal ke Sekolah (km)", name: "jarakKeSekolah" },
                ].map(({ label, name, type, options }, idx) => (
                    <div key={idx} className="flex items-center space-x-10">
                        <label htmlFor={name} className="w-[345px] font-bold text-[24px] font-Quicksand text-left">{label}</label>
                        {type === "select" ? (
                            <select
                                id={name}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] text-lg outline-none"
                            >
                                <option value="">Pilih</option>
                                {options.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={name}
                                type={type || "text"}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-[507px] h-[65px] rounded-[10px] border p-[10px] outline-none text-lg"
                            />
                        )}
                    </div>
                ))}

                {error && <div className="text-red-500 text-left mb-2">{error}</div>}

                <div className="mt-10 float-left">
                    <Kembali back="/halamandepan/" />
                </div>
                <div className="mt-10 ml-10 float-right">
                    <button type="submit">
                        <Lanjut to="/halamandepan/kesehatanadmin" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Alamat;