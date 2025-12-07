import {  useState } from 'react'
import{useAddTask} from "../../Hooks/UpDateHooks/UpDateHooks"


export default function AddTaskPop({showPop}:any) {
    let {upDate:addTask}:any = useAddTask()
    const [taskName, setTaskName] = useState("")
    const [error, setError] = useState(false)












  return <>


  
    <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showPop.showAddTask===false ?"hidden":"flex"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80  p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>{showPop.setShowAddTask(false) ; setError(false)}}></i>
    <span className='font-semibold'>
  Add New Task
</span>
      <input value={taskName} onChange={(e)=>{ setTaskName(e.target.value)}} className=' rounded-md border-2 focus:outline-0 p-1 font-bold' type="text" />


    <button onClick={()=>{
        if(taskName.length<3){
           setError(true)
        }else{
           addTask({
            ...showPop.priorityIds,
            name:taskName

        })
        showPop.setShowAddTask(false)
        setTaskName("")
        setError(false)

        }
     }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>ok</button>
      <div>
      {error ? <span>Please enter more than 3 letters</span>:null}
    </div>

  </div>


</div>
    
  
  
  
  
  
  
  
  </>
}
