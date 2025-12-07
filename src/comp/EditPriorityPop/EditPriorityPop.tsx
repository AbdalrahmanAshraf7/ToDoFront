import  { useState } from 'react'
import { useEditTaskPriority }  from "../../Hooks/UpDateHooks/UpDateHooks"



export default function editPriorityPop({showPop}:any) {

  const [Priority, setPriority] = useState("")
    let {upDate:TaskPriority}:any  = useEditTaskPriority()









    return<>



    <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showPop.showEditPriority===false ?"hidden":"flex"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80  p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>showPop.setShowEditPriority(false)}></i>
    <span className='font-semibold'>
  Edit Priority
</span>
    <select onChange={(e)=>setPriority(e.target.value)} className='bg-black text-white p-2 rounded-lg my-4'>
      <option className='hidden'>select Priority</option>
      <option value="1">low</option>
      <option value="2">med</option>
      <option value="3">heigh</option>
    </select>

    <button onClick={()=>{
      if(Number(Priority) === 1 || Number(Priority)=== 2 || Number(Priority) === 3 ){
        TaskPriority({
          priority:Priority,
          ...showPop.priorityIds
        })

      }
      
    }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>ok</button>

  </div>


</div>
    
    </>
}
