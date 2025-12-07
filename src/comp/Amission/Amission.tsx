import  { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditPriorityPop from "../EditPriorityPop/EditPriorityPop"
import EditTaskNamePop from '../EditTaskNamePop/EditTaskNamePop'
import DeleteAllTasksPop from '../DeleteAllTasksPop/DeleteAllTasksPop'
import AddTaskPop from '../AddTaskPop/AddTaskPop'
import { getOneMission } from '../../Hooks/GetHooks/GetHooks'
import {useEditTaskcomplete, useEditTaskFav , useTaskDelete  }  from "../../Hooks/UpDateHooks/UpDateHooks"
import { Loader } from '../../LoadingContext/LoadingContext'
import DotLoadingscreen from '../LoadingScreens/DotLoadingscreen'
import { Link } from 'react-router-dom'


export default function Amission() {
  let {id}:any = useParams();
  let {data:tasks}:any = getOneMission(id)
  let {upDate:TaskFav , isPending:FavLoading} = useEditTaskFav()
  let {upDate:TaskComplete , isPending:CompletedLoading}:any  = useEditTaskcomplete()
  let {upDate:TaskDelete}:any  = useTaskDelete()
  const [loaderId, setLoaderId] = useState(null)
  let {UpdateLoader}:any = useContext(Loader)



  

  
  const [showEditPriority, setShowEditPriority] = useState(false)
  const [showEditName, setShowEditName] = useState(false)
  const [deleteTasksPop, setDeleteTasksPop] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)

  


  









interface PriorityIds {
  id: string;
  id2?: string;
}

const [priorityIds, setPriorityIds] = useState<PriorityIds | null>(null);
    
  return <>

  <div className='text-center '>
   <Link to={`/home`}>

    <div className='flex items-center m-5 text-white font-bold text-3xl cursor-pointer'>
      <i className="fa-solid fa-angles-left inline align-middle"></i>
      <span className=' inline align-middle'>Back</span>
    </div>
   
   </Link>
    <h1 className='text-white font-bold my-4 text-4xl'>Tasks</h1>
  </div>

  {
    UpdateLoader || !tasks  ? <DotLoadingscreen  ></DotLoadingscreen>:

    <div className=' flex flex-col  items-center mt-5 '>
    <div className='bg-blue-700 flex flex-col w-[94%] rounded-lg'>

      <div className='flex flex-col '>
        
        {
          tasks?.data?.data?.map((T:any)=>{return<>
          <div>
             <h1 className='text-center font-bold capitalize text-white p-2 '>Mission Name : {T.missionName}</h1>
             <div className='flex items-center justify-between bg-blue-900 py-3 px-2'>
              <i className="fa-solid fa-trash-can text-3xl text-red-600 cursor-pointer" onClick={()=>{setDeleteTasksPop(true);  setPriorityIds({
                id:id,
              })}}></i>


      <div className={`bg-yellow-400 p-2   rounded-lg cursor-pointer `} onClick={()=>{setShowAddTask(true); setPriorityIds({
                id:id,

              })  }}>
        <i className="fa-solid fa-circle-plus text-3xl text-gray-100"></i>
      </div>
             </div>
          </div>
          <div className='bg-red-900 p-5  flex flex-col'>
            {
              T?.tasks?.map((T:any )=>{return<>
              <div key={T._id } className={`${T.priority ==null ?null :T.priority==1 ? "low-gradient" :T.priority==2?"med-gradient":T.priority==3?"heigh-gradient":"bg-red-950"} bg-red-950 p-5 mt-3 flex justify-between text-white rounded-lg `}>
                <div className='md:text-xl text-sm md:font-bold capitalize'>
                  {T.name}
                  <span><i className="fa-regular fa-pen-to-square cursor-pointer" onClick={()=>{setShowEditName(true)  ; setPriorityIds({
                      id:id,
                      id2:T._id
                    })}}></i></span>
                </div>

                <div className='flex items-center gap-5'>
                  <i className="fa-regular fa-trash-can text-2xl text-blue-700 cursor-pointer" onClick={()=>{
                    TaskDelete({
                      id:id,
                    id2:T._id
                    })
                  }}></i>
                 {
                  CompletedLoading && T._id==loaderId ?<div className='text-white text-sm font-bold'>loading...</div>:
                   <i className={`fa-solid fa-circle-check text-2xl cursor-pointer ${T.completed ? "text-green-500" : null}`} onClick={()=>{
                    TaskComplete({
                    id:id,
                    id2:T._id
                  });
                  setLoaderId(T._id)
                   }}></i>
                 }
                  {
                    FavLoading &&T._id==loaderId ?<div className='text-white text-sm font-bold'>loading...</div>:
                    <i className={`fa-solid fa-heart text-2xl cursor-pointer ${T.fav ? "text-red-800" : null}`} onClick={()=>{ 
                        TaskFav({
                      id:id,
                      id2:T._id
                    });

                    setLoaderId(T._id)

                    }}></i>
                  }
                  <span className='flex gap-1 items-center md:font-semibold text-sm md:w-[150px] w-[114px]'>Priority : {T.priority === null ?"non" :T.priority == 1 ? "Low" :T.priority ==2 ? "Medium" :T.priority == 3 ? "Heigh" :null }
                    <i className="fa-regular fa-pen-to-square cursor-pointer" onClick={()=>{setShowEditPriority(true) ; setPriorityIds({
                      id:id,
                      id2:T._id
                    })}}></i>
                  </span>
                </div>

                

              </div>
              
              </>})
            }
          </div>
          </>})
        }

      </div>



    </div>
    
  </div>

  }




  

  <AddTaskPop showPop={{showAddTask, setShowAddTask , priorityIds }}>
  </AddTaskPop>

<DeleteAllTasksPop showPop={{deleteTasksPop, setDeleteTasksPop , priorityIds}}>
</DeleteAllTasksPop>

<EditTaskNamePop showPop={{showEditName, setShowEditName , priorityIds}}>
</EditTaskNamePop>

  <EditPriorityPop showPop={{showEditPriority, setShowEditPriority ,priorityIds}}>
  </EditPriorityPop>



  </>
}
