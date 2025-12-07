import {useTaskDeleteAll }  from "../../Hooks/UpDateHooks/UpDateHooks"


export default function DeleteAllTasksPop({showPop}:any) {

  let {upDate:TaskDeleteAll}:any  = useTaskDeleteAll()










    return<>



    <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showPop.deleteTasksPop===false ?"hidden":"flex"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80  p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>showPop.setDeleteTasksPop(false)}></i>
    <span className='font-semibold'>
  are u sure u want to delete all tasks?
</span>


   <div className='flex gap-3'>
     <button onClick={()=>{

    TaskDeleteAll({
    ...showPop.priorityIds,
    })    
    showPop.setDeleteTasksPop(false)
      
    }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>ok</button>
     <button onClick={()=>{
    showPop.setDeleteTasksPop(false)
      
    }} className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-red-300 bg-red-600'>cancel</button>


   </div>

  </div>


</div>
    
    </>
}
