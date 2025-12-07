import './App.css';
import LayOut from "./comp/layOut/layOut";
import Home from "./comp/TodoMain/TodoMain";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Amission from './comp/Amission/Amission';
import FavMissions from './comp/FavMissions/FavMissions';
import LoadingContext from "./LoadingContext/LoadingContext";
  import { ToastContainer } from 'react-toastify';


function App() {


  let router:any = createBrowserRouter([

     {
      path: "", element: <LayOut />, children: [
        { index : true , element: <Navigate to="home" replace />},
        { path : "home" , element: <Home/> },
        { path : "amission/:id" , element: <Amission/> },
        { path : "favmissions" , element: <FavMissions/> },
        
       
      
    ],
    }
  ])




 const queryClient = new QueryClient()

  return <>

    <LoadingContext>
     <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
    </QueryClientProvider>
     <ToastContainer/>
    </LoadingContext>

  </>
}

export default App
