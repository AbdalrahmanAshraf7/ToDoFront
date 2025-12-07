import upDateHook from "../../CreateApiHooks/UpDateApiHooks";

export  let useMissionsFav =  upDateHook ({method:"put" , url:`/api/editmissionfav/`}) 
export  let useMissionsRename =  upDateHook ({method:"put" , url:`/api/renamemission/`})  
export  let useAddTask =  upDateHook ({method:"post" , url:`/api/addtask/`})  
export  let useEditTaskName =  upDateHook ({method:"put" , url:`/api/edittaskname/`})
export  let useEditTaskcomplete =  upDateHook ({method:"put" , url:`/api/edittaskcompletion/`})
export  let useEditTaskFav=  upDateHook ({method:"put" , url:`/api/edittaskfav/`})
export  let useEditTaskPriority=  upDateHook ({method:"put" , url:`/api/edittaskpriority/`})
export  let useMissionsCreate =  upDateHook ({method:"post" , url:`/api/createmission`}) 
export  let useMissionsDelete =  upDateHook ({method:"delete" , url:`/api/deletemission/`}) 
export  let useTaskDelete =  upDateHook ({method:"delete" , url:`/api/deletetask/`}) 
export  let useTaskDeleteAll =  upDateHook ({method:"delete" , url:`/api/deletetasks/`}) 
export  let useMissionsDeleteAll =  upDateHook ({method:"delete" , url:`/api/missions/`}) 
export  let useMissionsDeleteBySelection =  upDateHook ({method:"delete" , url:`/api/deletebyselect`}) 

