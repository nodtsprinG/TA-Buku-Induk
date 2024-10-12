import React, { useState } from 'react';

const TabelBel = () => {
    const [nilai, setNilai] = useState(Array(12).fill(''));

    const handleInputChange = (index, event) => {
        const newNilai = [...nilai];
        newNilai[index] = event.target.value;
        setNilai(newNilai);
    };

    const hitungRataRata = (nilaiP, nilaiK) => {
        const p = parseFloat(nilaiP) || 0;
        const k = parseFloat(nilaiK) || 0;
        return ((p + k) / 2).toFixed(2);
    };

    return (
        <div className='overflow-x-auto'>
            <table className='table-auto w-[2160px] border-collapse border border-gray-400 text-center'>
                <thead>
                    <tr>
                        <th colSpan="3" className='border border-gray-400 px-4 py-2 w-[360px]'>Semester 1</th>
                        <th colSpan="3" className='border border-gray-400 px-4 py-2 w-[360px]'>Semester 2</th>
                        <th colSpan="3" className='border border-gray-400 px-4 py-2 w-[360px]'>Semester 3</th>
                        <th colSpan="3" className='border border-gray-400 px-4 py-2 w-[360px]'>Semester 4</th>
                        <th colSpan="3" className='border border-gray-400 px-4 py-2 w-[360px]'>Semester 5</th>
                        <th colSpan="3" className='border border-gray-400 px-4 py-2 w-[360px]'>Semester 6</th>
                    </tr>
                    <tr>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai P</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai K</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>R</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai P</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai K</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>R</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai P</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai K</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>R</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai P</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai K</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>R</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai P</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai K</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>R</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai P</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>Nilai K</th>
                        <th className='border border-gray-400 px-4 py-2 w-[120px]'>R</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {nilai.map((value, index) => (
                            <React.Fragment key={index}>

                                <td className='border border-gray-400 p-0'>
                                    <input
                                        className='w-full h-full text-center font-PTSans p-0 m-0 border-0 outline-none'
                                        type="number"
                                        value={value}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </td>

                                {index % 2 === 1 && (
                                    <td className='border border-gray-400 p-0'>
                                        <input
                                            className='w-full h-full text-center font-PTSans p-0 m-0 border-0 outline-none'
                                            type="text"
                                            value={hitungRataRata(nilai[index - 1], nilai[index])}
                                            readOnly
                                        />
                                    </td>
                                )}
                            </React.Fragment>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TabelBel;
