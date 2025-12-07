import { useContext, useState } from "react";
import TodoBody from "../TodoBody/TodoBody";
import TodoSearchBar from "../TodoSearchBar/TodoSearchBar";
import DotLoadingscreen from "../LoadingScreens/DotLoadingscreen";
import {gettMissions} from "../../Hooks/GetHooks/GetHooks"
import { Loader ,  } from "../../LoadingContext/LoadingContext";


export default function TodoMain() {

  const [searchValue, setSearchValue] = useState({})
  const [dropValue, setDropValue] = useState({})
  let {isLoading}:any = gettMissions()
  let {UpdateLoader}:any =  useContext(Loader)




  
   
   

  
   

 









  return <>

    <div className="relative">
        <TodoSearchBar searchValue={{searchValue , setSearchValue , setDropValue}}  />
   
      {
        isLoading || UpdateLoader ? <DotLoadingscreen></DotLoadingscreen> :
        <TodoBody searchValue={{searchValue , setSearchValue ,dropValue}}  />
      }
      
    </div>


  </>
}
