import {  useMutation ,useQueryClient  } from '@tanstack/react-query'
import axios from 'axios'


export default function useMissionsDeleteAll() {

const queryClient = useQueryClient();

async function missionAllDelete() {
    return axios.delete(`https://to-do-list-nu-beryl-37.vercel.app/api/missions`,{
      headers:{
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU5ZTc3MmNjYzYyNzEwNzQ5NTc5NyIsInVzZXJOYW1lIjoiYWJkcHBwdTc3IiwiZW1haWwiOiJhYmRhbHJhZ2dtNzduQGdtYWlsLmNvbSIsImlhdCI6MTc2NDA3Mzg4NSwiZXhwIjoxNzY2NjY1ODg1fQ.jA27EUT0hOrw7_WFfKUOcXd4vky-l5men2pLwi72o7Y"
      }
    })
    
}


let mutation:any = useMutation({
    mutationFn:missionAllDelete ,
    onSuccess :()=>{
        queryClient.invalidateQueries({ queryKey: ["ToDo"] });      
    }
})


return {data:mutation.data , deleteAllMission:mutation.mutate ,deleteAllLodaing:mutation.isPending}





  
}
