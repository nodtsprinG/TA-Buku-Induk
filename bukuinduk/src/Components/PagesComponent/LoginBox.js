import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const LoginBox = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", password: "", angkatan: ""
  })
  const [error, setError] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.angkatan ) {
        setError("Semua field harus diisi.");
        return;
    }

    navigate("/alamat");
};

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="border border-slate-300 rounded-[10px] px-6 py-10 flex flex-col justify-center items-center shadow-custom">
          <h1 className="text-2xl font-Quicksand font-bold mb-4">SELAMAT DATANG</h1>

          <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full h-full rounded-[10px] placeholder-black py-4 px-6" id="input" />
          </div>

          <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full h-full rounded-[10px] placeholder-black py-4 px-6" id="input" />
          </div>

          <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand flex items-center py-4 px-6">
            <select
              name="angkatan"
              value={formData.angkatan}
              onChange={handleChange}
              className="w-full h-full border-collapse outline-none"
            >
              <option value="" className="w-full">Angkatan</option>
              <option value="2023">2023-2024</option>
              <option value="2022">2022-2023</option>
              <option value="2021">2021-2022</option>
              <option value="2020">2020-2021</option>
            </select>
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <button
            onClick={() => navigate('/admindashboard')}
            type="button"
            className="w-[476px] h-[70px] bg-next text-2xl text-white font-Quicksand font-bold rounded-[10px] p-[10px]"
          >
            MASUK
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
