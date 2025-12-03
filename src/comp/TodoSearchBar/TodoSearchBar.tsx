

export default function TodoSearchBar({searchValue}:any) {
  


    

   


   


  return <>
  
  
  <div className='mt-7 flex justify-center'>
    <select onChange={(e)=>{searchValue.setDropValue(e.target.value)}} className='font-bold bg-gray-950 text-white md:px-10 px-3 rounded-lg cursor-pointer '>
      
      <option className='hidden' value="">By Date</option>
      <option className='cursor-pointer font-bold' value="-1">Latest</option>
      <option className='cursor-pointer font-bold' value="1">Oldest</option>
    </select>
    <div className='flex w-[70%]  items-center justify-center '>
        <input placeholder='Missions Search by name'  onChange={(e:any)=>searchValue.setSearchValue(e.target.value)} className=' bg-gray-300 md:w-[50%] w-[90%]  p-2 font-bold focus:outline-0 border-2 border-white ' type="text" />
        <span className='bg-blue-700 flex h-full justify-center items-center md:w-[5%] w-[10%] hidden'>
            <i className="fa-solid fa-magnifying-glass text-white font-bold cursor-pointer"></i>
        </span>
    </div>
    
  </div>
  </>
  
}
