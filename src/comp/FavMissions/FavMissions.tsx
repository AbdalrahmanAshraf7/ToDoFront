import  { useState } from 'react'
import DotLoadingscreen from "../LoadingScreens/DotLoadingscreen.tsx";
import { Link } from 'react-router-dom'
import { getFavMissions } from '../../Hooks/GetHooks/GetHooks.ts';

export default function FavMissions() {

  const [itemId, setItemId] = useState(null)
  let {data:missions ,isLoading}:any = getFavMissions()
  



  return<>

  <div className='text-center '>
   <Link to={`/home`}>

    <div className='flex items-center m-5 text-white font-bold text-3xl cursor-pointer'>
      <i className="fa-solid fa-angles-left inline align-middle"></i>
      <span className=' inline align-middle'>Back</span>
    </div>
   
   </Link>
    <h1 className='text-white font-bold my-4 text-4xl'>My favorite Missions</h1>
  </div>



{isLoading ? <DotLoadingscreen></DotLoadingscreen> :<>

  {
    missions?.data?.data?.map((M:any)=>{return<>

     <Link to={`/amission/${M._id}`}> 
  <div className='p-5 bg-amber-950 flex gap-5 items-center cursor-pointer rounded-lg hover:scale-[96%]  scale-95 duration-300 '>
    <span title={M.missionName} className='font-bold capitalize  w-24 p-1 text-gray-300'>
      {M.missionName.length >10 ?<span>{M.missionName.slice(0,9)}...</span>:M.missionName}
    </span>
    <span className='ml-auto flex gap-3 items-center'>
      <span className='text-gray-300 font-bold text-[12px]'>
      {new Date(M.date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour:"numeric",
          minute:"2-digit"
          
        })}
</span>


      {isLoading&&itemId===M._id?<div className='text-2xl text-white'>Loading...</div>:
      <i title='add to favorit missions' className={`fa-solid fa-heart md:text-6xl text-5xl text-gray-300 relative ${M.fav ?"text-red-800" : null} `} onClick={(e)=>{e.stopPropagation() ; e.preventDefault() ; setItemId(M._id)}}>
         <div className={`p-5 blur-xl ${M.fav ? "bg-red-800" :null} absolute top-0`}>
        </div>
      </i>
      }
       
    </span>


  </div>
        </Link>
    
    </>})
  }


</>




}


  
  
  </>

}
