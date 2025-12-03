import axios from 'axios';
import {  useMutation ,useQueryClient  } from '@tanstack/react-query'

export default function useDeleteTask() {
 const queryClient = useQueryClient();


    async function deleteTask(ids:any) {
        return axios.delete(`https://to-do-list-nu-beryl-37.vercel.app/api/deletetask/${ids.id}/${ids.id2}`,{
            headers:{
                       token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU5ZTc3MmNjYzYyNzEwNzQ5NTc5NyIsInVzZXJOYW1lIjoiYWJkcHBwdTc3IiwiZW1haWwiOiJhYmRhbHJhZ2dtNzduQGdtYWlsLmNvbSIsImlhdCI6MTc2NDA3Mzg4NSwiZXhwIjoxNzY2NjY1ODg1fQ.jA27EUT0hOrw7_WFfKUOcXd4vky-l5men2pLwi72o7Y"
            }
        })
        
    }


    let mutation = useMutation({
        mutationFn :deleteTask,
         onSuccess :()=>{
        queryClient.invalidateQueries({ queryKey: ["Tasks"] });      
    }

    })







  return  {deleteTask:mutation.mutate , data:mutation.data }
}
