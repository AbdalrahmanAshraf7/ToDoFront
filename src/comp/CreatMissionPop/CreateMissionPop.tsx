import React, { useState } from 'react'
import useMissionCreate from '../../Hooks/MissionHooks/useMissionCreate.tsx'

export default function CreatMissionPop({showCreatPop}:any) {

  let {data , createMission ,createLodaing}:any  = useMissionCreate()
  const [missionName, setMissionName] = useState("")
  




  return <>
      <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showCreatPop.showCreatPop? "flex" :"hidden"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80    p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>{showCreatPop.setShowCreatPop(false)}} ></i>
    <span className='font-semibold'>
           Enter Mission Name
      </span>
    <input onChange={(e)=>{setMissionName(e.target.value)}} value={missionName} className=' rounded-md border-2 focus:outline-0 p-1 font-bold' type="text" />

    <button onClick={()=>{
      createMission(missionName);
      setMissionName("");
      showCreatPop.setShowCreatPop(false)
    }}className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-yellow-900 bg-yellow-600'>ok</button>

  </div>


</div>
  
  </>
}
