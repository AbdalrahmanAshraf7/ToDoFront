import  { useState } from 'react'
import {useEditTaskName} from "../../Hooks/UpDateHooks/UpDateHooks"
import { toast } from 'react-toastify';




export default function EditTaskNamePop({showPop}:any) {

const [changeTaskName, setChangeTaskName] = useState("")
let {upDate:editTaskName}:any = useEditTaskName()













  return <>


  
    <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showPop.showEditName===false ?"hidden":"flex"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80  p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>{showPop.setShowEditName(false);setChangeTaskName("")}}></i>
    <span className='font-semibold'>
  Edit Priority
</span>
      <input value={changeTaskName} onChange={(e)=>setChangeTaskName(e.target.value)} className=' rounded-md border-2 focus:outline-0 p-1 font-bold' type="text" />


    <button onClick={()=>{
      if(changeTaskName.length<3){
        toast.error("name cant be less than  3 letters")

      }else{
         editTaskName({
      ...showPop.priorityIds,
      name:changeTaskName
    })
    showPop.setShowEditName(false)
      }
      }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>ok</button>

  </div>


</div>
    
  
  
  
  
  
  
  
  </>
}
