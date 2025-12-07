import  {  useState } from 'react'
import { useMissionsRename  } from '../../Hooks/UpDateHooks/UpDateHooks.ts'
import { toast } from 'react-toastify';

export default function RenamePop({showPop}:any) {
const [rename, setRename] = useState("")
let {  upDate:renameUpdate,}:any = useMissionsRename();





    return<>



    <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showPop.showPop===false ?"hidden":"flex"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80  p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>showPop.setShowPop(false)}></i>
    <span className='font-semibold'>
  Rename the mission
</span>
    <input value={rename} onChange={(e)=>setRename(e.target.value)} className=' rounded-md border-2 focus:outline-0 p-1 font-bold' type="text" />

    <button onClick={()=>{
        if(rename.length<3){
            toast.error("name cant be less than  3 letters")
        }else{
            showPop.setShowPop(false);
            renameUpdate({
                id:showPop.nameId,
                missionName:rename});
                 setRename("");
        }
    }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>ok</button>

  </div>


</div>
    
    </>
}
