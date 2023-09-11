/* eslint-disable @next/next/no-img-element */
'use client'
import { ResponseAPI } from '@/api/client';
import { createCompany, getCompanies } from '@/utils/createCompany';
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<ResponseAPI[] | []>([]);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [sector, setSector] = useState<string>('');
  const [logo, setLogo] = useState<string>('');
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    async function get() {
      const datas = await getCompanies();
      setData(datas);
    }
    get();
  }, [refresh])

  async function handleClick() {
    const newCompany = await createCompany({
      name, 
      description,
      email,
      url: url.startsWith('www') ? `https://${url}` : url,
      sector,
      logo,
      stamps: [],
    });

    console.log(newCompany);

    setRefresh(!refresh);
    setName('')
    setDescription('')
    setEmail('')
    setUrl('')
    setSector('')
    setLogo('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className='flex-col items-center justify-center'>
      <form>
        <h4>
          Nome da Empresa:
        </h4>
        <input 
        type="text" 
        name="name" 
        value={name}
        id="name"
        onChange={(e) => setName(e.target.value)} />
        <h4>

          Descrição:
        </h4>
        <input 
        type="text" 
        name="Descrição"
        value={description}
        id="description"
        onChange={(e) => setDescription(e.target.value)} />
        <h4>

        Email:
        </h4>
        <input 
        type="email" 
        name="email" 
        value={email}
        id="email"
        onChange={(e) => setEmail(e.target.value)} />
        <h4>

          URL:
        </h4>
        <input 
        type="url" 
        name="url"
        value={url}
        id="urlEmpresa"
        onChange={(e) => setUrl(e.target.value)} />
        <h4>

        Categoria:
        </h4>
        <input 
        type="text" 
        name="sector"
        value={sector}
        id="sector"
        onChange={(e) => setSector(e.target.value)} />
        <h4>

          Logo:
        </h4>
        <input 
        type="logo" 
        name="logo" 
        value={logo}
        id="logo"
        onChange={(e) => setLogo(e.target.value)} />
        <br/>

        <button 
        type="button" 
        onClick={() => handleClick()}
        className="mt-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        
      </form>
     <div className='flex'>
      { data.map((proper: ResponseAPI, index: number) => (
      <div key={index} className='m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <figure className='h-80'>
          <img src={proper.logo} alt="logo" className='rounded-t-lg w-64' />
        </figure>
        <h2 className='text-xl mt-8'>{proper.name}</h2>
        <h3>{proper.description}</h3>
        <p>Contato: {proper.email}</p>
      </div>  
      )) }
     </div>
     </div>
    </main>
  )
}