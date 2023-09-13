/* eslint-disable @next/next/no-img-element */
'use client'
import { ResponseAPI } from '@/api/client';
import { PageContext } from '@/utils/PageContext';
import { getCompanies } from '@/utils/companyRequests';
import { useEffect, useState } from "react";
import Card from './components/card';
import Modal from './components/modal';


export default function Home() {
  const [data, setData] = useState<ResponseAPI[] | []>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  
  useEffect(() => {
    async function get() {
      const datas = await getCompanies();
      setData(datas);
    }
    get();
  }, [refresh])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageContext.Provider value={{ setRefresh, refresh }}>
        <Modal />
     <div className='flex-col items-center justify-center'>
      <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        { data.map((proper: ResponseAPI) => (
          <Card props={proper} key={proper._id} />
          )) }
      </div>
     </div>
        </PageContext.Provider>
    </main>
  )
}