import { useMutation , useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";
import { useContext } from "react";
import { Loader } from "../LoadingContext/LoadingContext";
import { toast } from "react-toastify";




export default function upDateHook (url:any){
    
    return function useUpdateMutation (){
        
        const { setUpdateLoader }: any = useContext(Loader);
        const queryClient = useQueryClient();

        let mutation =  useMutation({
            mutationKey : ["ToDo" , url.url ],
            mutationFn: (data?:any)=>{
                
                if(url.method==="put") return axiosInstance[url.method](`${url.url}${data.id}/${data.id2?data.id2:""}`,data)
                else if(url.method==="post") return axiosInstance[url.method](`${url.url}${data.id?data.id:""}/${data.id2?data.id2:""}`,data)
                else if(url.method==="delete"){

                    if(!data.id && !data.Ids){
                      return axiosInstance[url.method](`${url.url}`,{data:{}})
                    }
                    else{
                    return axiosInstance[url.method](`${url.url}${  data.id ?? ""}/${data.id2?data.id2:""}`,{data:{Ids:data.Ids}}??{})
                    }
            
                } 
            },
            onMutate :()=>{
                if(url.method === "post") return setUpdateLoader(true)

            },
            onSettled:()=>{
                setUpdateLoader(false)
            },
             onSuccess :()=>{
        queryClient.invalidateQueries({ queryKey: ["ToDo"] });  
        toast.success(`success action ! ✔ ${url.method=="delete" ? "deleted" : ""} ${url.method=="post" ? "added" : ""} ${url.method=="put" ? "updated" : ""}`)    
     }

        })
        
        return {data:mutation.data , upDate:mutation.mutate , isPending:mutation.isPending}
  
    }
}



