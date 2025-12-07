import  {  useState } from 'react'
import { useMissionsCreate } from '../../Hooks/UpDateHooks/UpDateHooks.ts'





export default function CreatMissionPop({showCreatPop}:any) {

  const [missionName, setMissionName] = useState("")
  let {upDate:missionCreate }:any = useMissionsCreate()
  const [error, setError] = useState(false)



   

 

  
 



  return <>
      <div className={`bg-[#00000080] inset-0 fixed   justify-center items-center ${showCreatPop.showCreatPop? "flex" :"hidden"}`}>

  <div className='bg-gray-300 min-w-[300px] max-w-[500px] mt-80    p-5 h-[250px] z-1 mb-96 rounded-md flex flex-col justify-center items-center '>
    <i className="fa-solid fa-circle-xmark self-end mb-5 text-2xl hover:text-red-700 cursor-pointer" onClick={()=>{showCreatPop.setShowCreatPop(false); setError(false)}} ></i>
    <span className='font-semibold'>
           Enter Mission Name
      </span>
    <input onChange={(e)=>{setMissionName(e.target.value)}} value={missionName} className=' rounded-md border-2 focus:outline-0 p-1 font-bold' type="text" />

    <button onClick={()=>{
     if(missionName.length<3){
      setError(true)
     }else{
       missionCreate({
         missionName:missionName
        });
        setMissionName("");
      setError(false)
      showCreatPop.setShowCreatPop(false)
     }
    }}className='px-5 mt-3 py-1 rounded-lg cursor-pointer font-bold text-white hover:bg-yellow-900 bg-yellow-600'>ok</button>

    <div>
      {error ? <span>Please enter more than 3 letters</span>:null}
    </div>

  </div>


</div>
  
  </>
}
