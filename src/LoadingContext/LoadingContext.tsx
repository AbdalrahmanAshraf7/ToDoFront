import  { createContext, useState } from 'react'

export const Loader:any = createContext("")

export default function LoadingContext({children}:any) {

    const [UpdateLoader, setUpdateLoader] = useState(false)





  return <>
  <Loader.Provider value={{setUpdateLoader , UpdateLoader}}>
    {children}
  </Loader.Provider>
  </>
}
