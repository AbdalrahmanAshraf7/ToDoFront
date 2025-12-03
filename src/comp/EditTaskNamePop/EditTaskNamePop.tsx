import  { useState } from 'react'
import useEditTaskName from '../../Hooks/TasksHooks/useEditTaskName'


export default function EditTaskNamePop({showPop}:any) {

let {taskName }:any =  useEditTaskName()
const [changeTaskName, setChangeTaskName] = useState("")













  return <>


  
    <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showPop.showEditName===false ?"hidden":"flex"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80  p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>showPop.setShowEditName(false)}></i>
    <span className='font-semibold'>
  Edit Priority
</span>
      <input onChange={(e)=>setChangeTaskName(e.target.value)} className=' rounded-md border-2 focus:outline-0 p-1 font-bold' type="text" />


    <button onClick={()=>{if(changeTaskName.length>1){
      taskName({
      ...showPop.priorityIds,
      name:changeTaskName
    })
    } }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>ok</button>

  </div>


</div>
    
  
  
  
  
  
  
  
  </>
}
