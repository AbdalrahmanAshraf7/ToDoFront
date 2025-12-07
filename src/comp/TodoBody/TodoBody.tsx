import  {  useState } from 'react'
import { Link } from 'react-router-dom'
import RenamePop from '../RenamePop/RenamePop.tsx'
import CreatMissionPop from '../CreatMissionPop/CreateMissionPop.tsx'
import DeleteAllMissions from '../DeleteAllMissions/DeleteAllMissions.tsx'
import ToolBar from '../ToolBar/ToolBar.tsx'
import {gettMissions} from "../../Hooks/GetHooks/GetHooks.ts"
import { useMissionsFav , useMissionsRename ,useMissionsDelete  } from '../../Hooks/UpDateHooks/UpDateHooks.ts'

export default function TodoBody({searchValue}:any) {
  let {data:missions }:any = gettMissions({missionName:searchValue.searchValue,date :searchValue.dropValue});
  let {  upDate:favUpdate, isPending:favLoading}:any = useMissionsFav();
  let {  isPending:renameLoading}:any = useMissionsRename();
  let {  upDate:deleteUpdate, isPending:deleteLoading}:any = useMissionsDelete()

  const [itemId, setItemId] = useState(null)
  const [itemIdDelete, setItemIdDelete] = useState(null)
  const [showPop, setShowPop] = useState(false)
  const [nameId, setNameId] = useState(null)
  const [showCreatPop, setShowCreatPop] = useState(false)
  const [showDeleteAll, setShowDeleteAll] = useState(false)
  const [showSelector, setShowSelector] = useState(false)
  const [checkedItems, setCheckedItems] = useState<any[]>([])








  return <>

  <div className='mt-3 flex flex-col gap-3 p-3'>
    <ToolBar showPops={{ setShowCreatPop,setShowDeleteAll , setShowSelector , showSelector , checkedItems}}  >
    </ToolBar>
    
   {
       missions?.data.data?.map((M:any)=>{return<>

       <div key={M._id} className='flex justify-center items-center'>
        <span className={` mt-5  ${showSelector ? null : "hidden"}`}>
          <input type="checkbox" className='cursor-pointer scale-150 ' onChange={(e)=>{
            if(e.target.checked){
              checkedItems.push(M._id)
            }else{
              let filtered = checkedItems.filter((C)=> C !== M._id)
              setCheckedItems(filtered)
            }
          }} />
    </span>

    <Link className='w-[80%]  mt-5' to={`/amission/${M._id}`}> 
  <div className='p-5 bg-amber-950 flex gap-5 items-center cursor-pointer rounded-lg hover:scale-[96%]  scale-95 duration-300 '>
    {
      !renameLoading? <span title={M.missionName} className='font-bold capitalize  w-24 p-1 text-gray-300'>
      {M.missionName.length >10 ?<span>{M.missionName.slice(0,9)}...</span>:M.missionName}
      <i className="fa-solid fa-pen-to-square text-3xl hover:text-blue-900" onClick={(e)=>{e.stopPropagation() ; e.preventDefault() ; setShowPop(true) ; setNameId(M._id)} }></i>
    </span>:
    <div>
      Loading...
    </div>
    }
    
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

{deleteLoading&&itemIdDelete===M._id?<div  className='text-2xl text-white'>Lodaing...</div>:<i title='delete from missions' className="fa-solid fa-trash-can md:text-6xl text-4xl   text-red-800" onClick={(e)=>{e.stopPropagation() ; e.preventDefault() ;deleteUpdate({id:M._id}) ; setItemIdDelete(M._id) }}></i>
}
      {favLoading&&itemId===M._id?<div className='text-2xl text-white'>Loading...</div>:
      <i title='add to favorit missions' className={`fa-solid fa-heart md:text-6xl text-5xl text-gray-300 relative ${M.fav ?"text-red-800" : null} `} onClick={(e)=>{e.stopPropagation() ; e.preventDefault() ; favUpdate({id:M._id}) ; setItemId(M._id)}}>
         <div className={`p-5 blur-xl ${M.fav ? "bg-red-800" :null} absolute top-0`}>
        </div>
      </i>
      }
       
    </span>


  </div>
        </Link>

       </div>
   
     
  </>})
 }
</div>

 <RenamePop showPop={{showPop,setShowPop,nameId}}>
</RenamePop>

<CreatMissionPop showCreatPop={{showCreatPop, setShowCreatPop}} >
</CreatMissionPop>

<DeleteAllMissions showDeleteAll={{showDeleteAll , setShowDeleteAll}} >
</DeleteAllMissions>

 

  
  </>
}
