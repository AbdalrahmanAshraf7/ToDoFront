import {  useMutation ,useQueryClient  } from '@tanstack/react-query'
import axios from 'axios'


export default function useDeleteBySelectM() {

const queryClient = useQueryClient();

async function deleteBySelect(ids:any) {
    return axios.delete(`https://to-do-list-nu-beryl-37.vercel.app/api/deletebyselect/`,{
        data:{
            Ids:ids
        },
      headers:{
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU5ZTc3MmNjYzYyNzEwNzQ5NTc5NyIsInVzZXJOYW1lIjoiYWJkcHBwdTc3IiwiZW1haWwiOiJhYmRhbHJhZ2dtNzduQGdtYWlsLmNvbSIsImlhdCI6MTc2NDA3Mzg4NSwiZXhwIjoxNzY2NjY1ODg1fQ.jA27EUT0hOrw7_WFfKUOcXd4vky-l5men2pLwi72o7Y"
      }
    })
    
}


let mutation:any = useMutation({
    mutationFn:deleteBySelect ,
    onSuccess :()=>{
        queryClient.invalidateQueries({ queryKey: ["ToDo"] });      
    }
})


return {data:mutation.data , selectAndDelete:mutation.mutate ,deleteLodaing:mutation.isPending}





  
}
