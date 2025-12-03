import { QueryClient, useMutation, useQuery ,useQueryClient  } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useAddTask() {

    const queryClient = useQueryClient();


    async function addTask(data:any) {
        return axios.put(`https://to-do-list-nu-beryl-37.vercel.app/api/addtask/${data.id}`,{name:data.name},{
            headers:{
                       token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU5ZTc3MmNjYzYyNzEwNzQ5NTc5NyIsInVzZXJOYW1lIjoiYWJkcHBwdTc3IiwiZW1haWwiOiJhYmRhbHJhZ2dtNzduQGdtYWlsLmNvbSIsImlhdCI6MTc2NDA3Mzg4NSwiZXhwIjoxNzY2NjY1ODg1fQ.jA27EUT0hOrw7_WFfKUOcXd4vky-l5men2pLwi72o7Y"
            }
        })
        
    }


    let mutation = useMutation({
        mutationFn :addTask,
         onSuccess :()=>{
        queryClient.invalidateQueries({ queryKey: ["Tasks"] });      
    }

    })







  return  {addAtask:mutation.mutate , data:mutation.data }
}
