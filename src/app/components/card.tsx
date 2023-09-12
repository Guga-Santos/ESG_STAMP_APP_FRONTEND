/* eslint-disable @next/next/no-img-element */
import { ResponseAPI } from "@/api/client";

export default function Card({props}: {props: ResponseAPI}) {
  function handleClick() {
    window.open(props.data, '_blank');

  }

  return (
    <div>
      <div key={props._id} className='m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
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
        dark:focus:ring-blue-800 mt-4"
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