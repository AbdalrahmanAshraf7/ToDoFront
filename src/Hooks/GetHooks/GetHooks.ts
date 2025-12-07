import creatApiHook from "../../CreateApiHooks/CreateApiHooks"

export let gettMissions = creatApiHook("/api/missions")
export let getFavMissions = creatApiHook("/api/favmissions")
export let getOneMission = (id:string)=> creatApiHook(`/api/missions/${id}`)()







