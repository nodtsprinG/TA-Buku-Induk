import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const LoginBox = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('Angkatan');

  const handleChange = (e) => {
      setSelectedValue(e.target.value);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border border-slate-300 rounded-[10px] px-6 py-10 flex flex-col justify-center items-center shadow-custom">
        <h1 className="text-2xl font-Quicksand font-bold mb-4">SELAMAT DATANG</h1>
        <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand">
          <input type="email" placeholder="Email" className="w-full h-full rounded-[10px] placeholder-black py-4 px-6" id="input" />
        </div>
        <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand">
          <input type="password" placeholder="Password" className="w-full h-full rounded-[10px] placeholder-black py-4 px-6" id="input" />
        </div>
        <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-Quicksand flex items-center py-4 px-6">
          <select
          value={selectedValue}
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
        <button
          onClick={() => navigate('/admindashboard')}
          type="button"
          className="w-[476px] h-[70px] bg-next text-2xl text-white font-Quicksand font-bold rounded-[10px] p-[10px]"
        >
          MASUK
        </button>
      </div>
    </div>
  );
};

export default LoginBox;
