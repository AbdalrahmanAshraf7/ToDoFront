import React, { useState } from 'react'
import useGetTasks from '../../Hooks/TasksHooks/useGetTasks'
import { useParams } from 'react-router-dom'
import useCompletedTask from '../../Hooks/TasksHooks/useCompletedTask'
import useFavTasks from '../../Hooks/TasksHooks/useFavTasks'
import EditPriorityPop from "../EditPriorityPop/editPriorityPop"
import EditTaskNamePop from '../EditTaskNamePop/EditTaskNamePop'
import useDeleteTask from '../../Hooks/TasksHooks/useDeleteTask'
import DeleteAllTasksPop from '../DeleteAllTasksPop/DeleteAllTasksPop'
import AddTaskPop from '../AddTaskPop/AddTaskPop'

export default function Amission() {

  let {id}:any = useParams();
  let {tasks}:any = useGetTasks(id);
  let {Completed }:any = useCompletedTask();
  let {favTask }:any = useFavTasks()
  const [showEditPriority, setShowEditPriority] = useState(false)
  const [showEditName, setShowEditName] = useState(false)
  const [priorityIds, setPriorityIds] = useState(null)
  let {deleteTask}:any = useDeleteTask()
  const [deleteTasksPop, setDeleteTasksPop] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)

  


  










    
  return <>

  <div className=' flex flex-col  items-center mt-5 '>
    <div className='bg-blue-700 flex flex-col w-[94%] rounded-lg'>

      <div className='flex flex-col '>
        
        {
          tasks?.data?.map((T:any)=>{return<>
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
              T?.tasks?.map((T:any)=>{return<>
              <div className={`${T.priority ==null ?null :T.priority==1 ? "low-gradient" :T.priority==2?"med-gradient":T.priority==3?"heigh-gradient":"bg-red-950"} bg-red-950 p-5 mt-3 flex justify-between text-white rounded-lg `}>
                <div className='md:text-xl text-sm md:font-bold capitalize'>
                  {T.name}
                  <span><i className="fa-regular fa-pen-to-square cursor-pointer" onClick={()=>{setShowEditName(true)  ; setPriorityIds({
                      id:id,
                      id2:T._id
                    })}}></i></span>
                </div>

                <div className='flex items-center gap-5'>
                  <i className="fa-regular fa-trash-can text-2xl text-red-100 cursor-pointer" onClick={()=>{
                    deleteTask({
                      id:id,
                    id2:T._id
                    })
                  }}></i>
                  <i className={`fa-solid fa-circle-check text-2xl cursor-pointer ${T.completed ? "text-green-500" : null}`} onClick={()=>Completed({
                    id:id,
                    id2:T._id
                  })}></i>
                  <i className={`fa-solid fa-heart text-2xl cursor-pointer ${T.fav ? "text-red-800" : null}`} onClick={()=>{
                    favTask({
                      id:id,
                      id2:T._id
                    })
                  }}></i>
                  <span className='flex gap-1 items-center md:font-semibold text-sm md:w-[150px] w-[140px]'>Priority : {T.priority === null ?"non" :T.priority == 1 ? "Low" :T.priority ==2 ? "Medium" :T.priority == 3 ? "Heigh" :null }
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
