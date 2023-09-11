'use client'
import { companyBody } from '@/interfaces/Icompany';
import { getCompanies } from '@/utils/createCompany';
import { useEffect, useState } from "react";


export default function Home() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [sector, setSector] = useState<string>('');
  const [logo, setLogo] = useState<string>('');
  const [body, setBody] = useState<companyBody>({
    name: '',
    description: '',
    email: '',
    url: '',
    sector: '',
    logo: '',
    stamps: []
  });

  useEffect(() => {
    async function get() {
      const data = await getCompanies();
      console.log(data);
    }
    get();
  }, [])

  async function handleClick() {

    setBody({
      name, 
      description,
      email,
      url,
      sector,
      logo,
      stamps: [],
    })

    setName('')
    setDescription('')
    setEmail('')
    setUrl('')
    setSector('')
    setLogo('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
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
     </div>
    </main>
  )
}