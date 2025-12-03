import {  useMutation ,useQueryClient  } from '@tanstack/react-query'
import axios from 'axios'

export default function useMissionCreate() {

const queryClient = useQueryClient();

      async function CreatMissions(missionName:any) {
      return axios.post(`https://to-do-list-nu-beryl-37.vercel.app/api/createmission`,{missionName:missionName},{
      headers:{
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU5ZTc3MmNjYzYyNzEwNzQ5NTc5NyIsInVzZXJOYW1lIjoiYWJkcHBwdTc3IiwiZW1haWwiOiJhYmRhbHJhZ2dtNzduQGdtYWlsLmNvbSIsImlhdCI6MTc2NDA3Mzg4NSwiZXhwIjoxNzY2NjY1ODg1fQ.jA27EUT0hOrw7_WFfKUOcXd4vky-l5men2pLwi72o7Y"
      }
    }) 
  }


  let mutation:any = useMutation({
    mutationFn: CreatMissions,
    onSuccess :()=>{
        queryClient.invalidateQueries({ queryKey: ["ToDo"] });      
    }
  })



return {data:mutation.data , createMission:mutation.mutate ,createLodaing:mutation.isPending}

 


}
