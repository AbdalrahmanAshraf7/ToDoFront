
import { useMissionsDeleteAll } from '../../Hooks/UpDateHooks/UpDateHooks.ts'


export default function DeleteAllMissions({showDeleteAll}:any) {

    let {upDate:deleteAll}:any= useMissionsDeleteAll()







  return <>
      <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showDeleteAll.showDeleteAll? "flex" :"hidden"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80    p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>{showDeleteAll.setShowDeleteAll(false)}} ></i>
    <span className='font-semibold'>
           Are u sure u want to delete all the missions?!!!
      </span>

<div className='flex gap-3'>
        <button onClick={()=>{
            deleteAll({})
            
            showDeleteAll.setShowDeleteAll(false);
     
    }}className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-green-900 bg-green-600'>Yes</button>
    <button onClick={()=>{
     showDeleteAll.setShowDeleteAll(false)
    }}className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:text-black hover:bg-white hover:border-1 hover:border-red-500 bg-red-600'>Cancel</button>


</div>

  </div>


</div>
  
  </>
}
