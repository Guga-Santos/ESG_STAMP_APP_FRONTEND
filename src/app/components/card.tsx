/* eslint-disable @next/next/no-img-element */
import { ResponseAPI } from "@/api/client";
import { PageContext } from "@/utils/PageContext";
import { deleteCompany } from "@/utils/companyRequests";
import { useContext, useState } from "react";

export default function Card({props}: {props: ResponseAPI}) {
  const [hidded, setHidded] = useState<boolean>(false);
  const { setRefresh, refresh } = useContext(PageContext);
  
  function handleClick() {
    window.open(props.data, '_blank');
  }

  async function handleDrop(id: string) {

    if (id === 'delete') {
      console.log("Delete!")
      await deleteCompany(props._id);
    } else {
      console.log('Edit!')
    }

    setHidded(!hidded);
    setRefresh(!refresh);
  }

  return (
    <div>
      <div key={props._id} 
      className='w-64 m-2 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="flex-column">
        <button 
        id="dropdownButton" 
        data-dropdown-toggle="dropdown" 
        className={"ml-2 inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"} 
        type="button"
        onClick={() => setHidded(!hidded)}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" className={!hidded ? "hidden" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a 
              href="#"
              id="delete"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={(e) => handleDrop((e.target as HTMLAnchorElement).id)}
              >Delete</a>
            </li>
            <li>
              <a href="#" 
              id="edit"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={(e) => handleDrop((e.target as HTMLAnchorElement).id)}
              >Edit</a>
            </li>
          </ul>
        </div>
        </div>
        <figure className='h-58'>
          <img src={props.logo} alt="logo" className='rounded-t-lg rounded-b-lg w-64' />
        </figure>
        <h2 className='text-xl mt-8 text-center'>{props.name}</h2>
        <h3 className='text-center'>{props.description}</h3>
        <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center 
        inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800 mt-4 w-full"
        onClick={() => handleClick()}>
        Acesse o relatório:
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>  
    </div>
  )
}