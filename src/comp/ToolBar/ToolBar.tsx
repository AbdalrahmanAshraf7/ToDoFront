import React from 'react'
import { Link, Links } from 'react-router-dom'
import useDeleteBySelectM from '../../Hooks/MissionHooks/useDeleteBySelectM'


export default function ToolBar({showPops}:any) {

let {selectAndDelete}:any  = useDeleteBySelectM()









  

  return <>

  <div className=' px-11 flex justify-between items-center '>
      <div className={ `p-2 bg-gray-800  rounded-lg cursor-pointer ${showPops.showSelector ? "hidden" : null}`} onClick={()=>showPops.setShowDeleteAll(true)}>
        <i className="fa-regular fa-trash-can text-red-600 text-3xl "></i>
      </div>

      <div className='flex items-center justify-center gap-3'>
        <i className={`fa-solid fa-trash-can text-2xl text-blue-600 cursor-pointer  ${!showPops.showSelector ? "!hidden" : null}`} onClick={()=>{selectAndDelete(showPops.checkedItems)}}></i>
        <i className="fa-solid fa-calendar-check text-3xl text-blue-600 cursor-pointer " onClick={()=>{showPops.setShowSelector(!showPops.showSelector)}}></i>
      </div>

      <div className='flex gap-3'>
        <Link to={`/favmissions`}>
        <div className='bg-red-400 p-2 flex items-center justify-center   rounded-lg cursor-pointer'>
          <i className="fa-regular fa-heart text-3xl text-white"></i>
        </div>
      </Link>
        <div className={`bg-yellow-400 p-2   rounded-lg cursor-pointer ${showPops.showSelector ? "hidden" : null}`} onClick={()=>showPops.setShowCreatPop(true)}>
        <i className="fa-solid fa-circle-plus text-3xl text-gray-100"></i>
      </div>
      </div>
    </div>
  
  </>
}
