import { ReactComponent as Plus } from '../../Assets/Plus.svg'
import { ReactComponent as Import } from '../../Assets/Import.svg'
const ButtonImport = ({ isImportOpen, setIsImportOpen, textbutton }) => {
    if (!isImportOpen) return null;
    return (
        <div className="absolute left-[850px] top-14 bg-white border rounded-lg w-[234px] h-[112px]">
            <div className="flex space-x-1 h-1/2 border border-white rounded-[8px_8px_0_0] border-b-black">
                <Plus className='w-[30px] h-[30px] mx-2 my-auto' />
                <label className="font-Quicksand font-bold text-[16px] leading-[104%] m-auto">Tambah Data Siswa</label>
            </div>
            <div className="flex space-x-1 h-1/2">
                <Import className='w-[30px] h-[30px] mx-2 my-auto' />
                <label className="font-Quicksand font-bold text-[16px] leading-[104%] m-auto">Import Data Siswa</label>
            </div>
        </div>
    )
}
export default ButtonImport;