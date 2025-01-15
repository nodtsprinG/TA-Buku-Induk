import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lanjut from "../Buttons/ButtonNext";
import Kembali from "../Buttons/BackButton";

const Biodata = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: "", panggilan: "", jeniskelamin: "", lahir: "", agama: "", kewarganegaraan: "", anak: "", kandung: "", tiri: "", angkat: "", kondisi: "", bahasa: "",
    });

    const [error, setError] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nama || !formData.lahir || !formData.agama || !formData.anak || !formData.kandung || !formData.kondisi
        ) {
            setError("Semua field harus diisi.");
            return;
        }

        navigate("/alamat");
    };

    const handleBack = () => {
        navigate("/admindashboard");
    };

    return (
        <div className="w-[1031px] h-[1250px] mx-[50px] mt-10 bg-subcontent rounded-tr-[22px] rounded-tl-[22px] font-Quicksand">
            <div className="w-[890px] h-3/4 mx-auto my-auto p-10">
                <form onSubmit={handleSubmit}>
                    <div className="mt-10">

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Nama Lengkap</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" name="nama" value={formData.nama} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Nama Panggilan</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" name="panggilan" value={formData.panggilan} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Jenis Kelamin</label>
                            <select name="jeniskelamin" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" value={formData.jeniskelamin} onChange={handleChange}>
                                <option value="" disabled hidden>Jenis Kelamin</option>
                                <option value="laki-laki">Laki-laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Tempat dan Tanggal Lahir</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" name="lahir" value={formData.lahir} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Agama</label>
                            <select name="agama" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" value={formData.agama} onChange={handleChange}>
                                <option value="" disabled hidden> </option>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Buddha">Buddha</option>
                                <option value="Khonghucu">Khonghucu</option>
                            </select>
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Anak Ke</label>
                            <input type="number" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" name="anak" value={formData.anak} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[235px] font-bold text-[24px]">Jumlah Saudara Kandung</label>
                            <input type="number" name="kandung" className="w-[78px] h-[65px] px-4 py-2 border rounded-[10px] focus:outline-none ml-5" value={formData.kandung} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[235px] font-bold text-[24px]">Jumlah Saudara Tiri</label>
                            <input type="number" name="tiri" className="w-[78px] h-[65px] px-4 py-2 border rounded-[10px] focus:outline-none ml-5" value={formData.tiri} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[235px] font-bold text-[24px]">Jumlah Saudara Angkat</label>
                            <input type="number" name="angkat" className="w-[78px] h-[65px] px-4 py-2 border rounded-[10px] focus:outline-none ml-5" value={formData.angkat} onChange={handleChange} />
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Anak Yatim/Piatu</label>
                            <select name="kondisi" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" value={formData.kondisi} onChange={handleChange}>
                                <option value="" disabled hidden>Pilih Kondisi</option>
                                <option value="Yatim">Yatim</option>
                                <option value="Piatu">Piatu</option>
                                <option value="Yatim Piatu">Yatim Piatu</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>

                        <div className="mb-5 flex items-center">
                            <label className="w-[350px] font-bold text-[24px]">Bahasa Sehari-hari di Rumah</label>
                            <input type="text" name="bahasa" className="w-full px-4 py-2 border rounded-[10px] focus:outline-none h-[65px] ml-5" value={formData.bahasa} onChange={handleChange} />
                        </div>

                        {error && <div className="text-red-500">{error}</div>}
                    </div>

                    <div className="mt-10 float-start">
                        <button type="button" onClick={handleBack}><Kembali /></button>
                    </div>

                    <div className="mt-10 ml-10 float-end">
                        <Lanjut to="/halamandepan/alamat" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Biodata;
