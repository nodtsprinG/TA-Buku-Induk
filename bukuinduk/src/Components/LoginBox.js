import { useNavigate } from "react-router-dom";
import { LiaAngleDownSolid } from "react-icons/lia";
import React, { useState } from 'react'
const LoginBox = () => {
    const navigate = useNavigate()
    
    const [selectedValue, setSelectedValue] = useState('Angkatan')
    const [isOpen, setIsOpen] = useState(false)

    const handleCheckboxChange = (value) => {
        setSelectedValue(value)
        setIsOpen(false)
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="border border-slate-300 rounded-[10px] px-6 py-10 flex flex-col justify-center items-center shadow-custom">
                <h1 className="text-2xl font-PTSans font-bold mb-4">SELAMAT DATANG</h1>
                <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-PTSans">
                    <input type="email" placeholder="Email" className="w-full h-full rounded-[10px] placeholder-black py-4 px-6" id="input" />
                </div>
                <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-PTSans">
                    <input type="password" placeholder="Password" className="w-full h-full rounded-[10px] placeholder-black py-4 px-6" id="input" />
                </div>
                <div className="relative w-[476px] h-[70px] mb-6 border border-gray-300 rounded-[10px] font-PTSans flex items-center py-4 px-6">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <LiaAngleDownSolid />
                        <label className="font-PTSans ml-6">{selectedValue}</label>
                    </div>
                    {isOpen && (
                        <ul className="absolute top-full mt-2 left-0 w-full h-auto bg-white border border-gray-300 rounded-[10px] px-4 py-4">
                            <li>
                                <input
                                    type="checkbox"
                                    name="value1"
                                    onChange={() => handleCheckboxChange('2020')}
                                />
                                2020
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    name="value2"
                                    onChange={() => handleCheckboxChange('2021')}
                                />
                                2021
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    name="value3"
                                    onChange={() => handleCheckboxChange('2022')}
                                />
                                2022
                            </li>
                        </ul>
                    )}
                </div>
                <button onClick={() => navigate('/admindashboard')} type="button" className="w-[476px] h-[70px] bg-button text-2xl text-white font-PTSans rounded-[10px] p-[10px]">MASUK</button>
            </div>
        </div>
    );
};

export default LoginBox;
