const Filter = ({ isOpen, toggleFilter }) => {
    if (!isOpen) return null; // Tidak render jika panel filter tertutup

    const filters = [
        {
            label: "Tahun Ajar",
            options: ["2020", "2021", "2022"],
        },
        {
            label: "Jurusan",
            options: [
                "Mekatronika",
                "Rekayasa Perangkat Lunak",
                "Elektronika Industri",
                "Broadcasting",
                "Animasi",
                "Audio Video",
                "Teknik Komputer & Jaringan",
                "Desain Komunikasi dan Visual",
            ],
        },
        {
            label: "Kelas",
            options: ["X", "XI", "XII"],
        },
    ];

    return (
        <div className="absolute top-[40px] left-0 bg-white border shadow-lg rounded-lg p-4 w-max">
            <div>
                {/* Dummy Data Filter */}
                <div className="flex gap-4">
                    {filters.map((filter, index) => (
                        <div
                            key={index}
                            className={`space-y-1 ${index === 1
                                    ? "flex-[2] min-w-[250px] max-w-[350px]" // Kolom ke-2 lebih besar
                                    : "flex-1 min-w-[100px] max-w-[150px]" // Kolom ke-1 dan ke-3 lebih kecil
                                }`}
                        >
                            <label className="font-Inter text-xs text-[#474D66] leading-5 tracking-[-0.5]">
                                {filter.label}
                            </label>
                            {filter.options.map((option, idx) => (
                                <div key={idx} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-blue-600 checked:to-blue-600"
                                    />
                                    <label className="text-sm">{option}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
