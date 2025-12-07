import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";

export default function creatApiHook  (url:string){

    return function useApiHook(params?:any){
        

        let{data , isLoading}:any = useQuery({
            queryKey:["ToDo",url , params],
            queryFn:()=>{ return axiosInstance.get(url,{params: params})},
            


        })
        
        return {data , isLoading}

    }
}