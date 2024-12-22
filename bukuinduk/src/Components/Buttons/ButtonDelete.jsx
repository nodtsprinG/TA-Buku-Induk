import { ReactComponent as Warn } from '../../Assets/Vector.svg'
const ButtonDelete = ({ isDeleteOpen, setIsDeleteOpen }) => {
    if (!isDeleteOpen) return null;
    const closePopup = () => setIsDeleteOpen(false);
    return (
        <div className="absolute left-[400px] top-10 bg-[#333E5A] border rounded-[15px] p-4 w-[300px] h-[96px]">
            <div className='flex space-x-3'>
                <Warn className="top-3 left-3 w-6 h-6" />
                <label className="w-[250px] h-[30px] font-Quicksand font-bold text-white leading-[100%] text-left">Apakah Anda yakin ingin menghapus data tersebut?</label>
            </div>
            <div className="flex space-x-1 mt-4 ml-[160px]">
                <button className="w-[45px] h-5 bg-[#CC1C1C] rounded-[10px] font-Quicksand font-bold text-white leading-[100%]">
                    Ya
                </button>
                <button onClick={closePopup} className="w-[50px] h-5 bg-[#228AAF] rounded-[10px] font-Quicksand font-bold text-white leading-[100%]">
                    Tidak
                </button>
            </div>
        </div>
    );
};

export default ButtonDelete;
