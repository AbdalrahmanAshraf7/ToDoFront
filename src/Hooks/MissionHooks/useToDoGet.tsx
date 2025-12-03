import { QueryClient, useMutation, useQuery ,useQueryClient  } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useToDo(params:any) {
  


      async function getMissions() {
      return axios.get(`https://to-do-list-nu-beryl-37.vercel.app/api/missions`,{
        params,
      headers:{
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU5ZTc3MmNjYzYyNzEwNzQ5NTc5NyIsInVzZXJOYW1lIjoiYWJkcHBwdTc3IiwiZW1haWwiOiJhYmRhbHJhZ2dtNzduQGdtYWlsLmNvbSIsImlhdCI6MTc2NDA3Mzg4NSwiZXhwIjoxNzY2NjY1ODg1fQ.jA27EUT0hOrw7_WFfKUOcXd4vky-l5men2pLwi72o7Y"
      }
    })
  }


  let {data , isLoading} = useQuery({
    queryKey: ['ToDo',params],
    queryFn: getMissions,
  })

  let missions:any = data?.data?.data

  return {missions , isLoading}

 


}
