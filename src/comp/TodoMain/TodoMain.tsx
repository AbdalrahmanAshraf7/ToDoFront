import { useState } from "react";
import useToDo from "../../Hooks/MissionHooks/useToDoGet";
import TodoBody from "../TodoBody/TodoBody";
import TodoSearchBar from "../TodoSearchBar/TodoSearchBar";
import DotLoadingscreen from "../LoadingScreens/DotLoadingscreen";

export default function TodoMain() {

  const [searchValue, setSearchValue] = useState("")
  const [dropValue, setDropValue] = useState("")
  let {isLoading} = useToDo();

   
   

  
   

 









  return <>

    <div className="relative">
        <TodoSearchBar searchValue={{searchValue , setSearchValue , setDropValue}}  />
     {
      isLoading ? <DotLoadingscreen></DotLoadingscreen> :
      <TodoBody searchValue={{searchValue , setSearchValue ,dropValue}}  />
     } 
    </div>

  </>
}
