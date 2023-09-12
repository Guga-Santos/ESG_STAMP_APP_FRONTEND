import { createCompany } from "@/utils/createCompany";
import { useContext, useState } from "react";
import { PageContext } from "../../utils/PageContext";


const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [sector, setSector] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [logo, setLogo] = useState<string>('');

  const { setRefresh } = useContext(PageContext)

  async function handleClick() {
    const newCompany = await createCompany({
      name, 
      description,
      email,
      url: url.startsWith('www') ? `https://${url}` : url,
      sector,
      logo,
      data,
      stamps: [],
    });

    console.log(newCompany);
    
    setName('');
    setDescription('');
    setEmail('');
    setUrl('');
    setSector('');
    setLogo('');
    setData('');
    setRefresh(true);

    setShowModal(false);
  }
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Adicionar Empresa
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font=semibold">Informações</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >X</button>
                </div>
                <div className="relative p-6 flex-auto">
                <form>
        <h4 className="text-black">
          Nome da Empresa:
        </h4>
        <input 
        type="text" 
        name="name" 
        value={name}
        id="name"
        className="shadow appearance-none border rounded w-80 py-1 px-1 text-black"
        onChange={(e) => setName(e.target.value)} />
        <h4 className="text-black">

          Descrição:
        </h4>
        <input 
        type="text" 
        name="Descrição"
        value={description}
        id="description"
        className="shadow appearance-none border rounded w-full py-1 px-1 text-black"
        onChange={(e) => setDescription(e.target.value)} />
        <h4 className="text-black">

        Email:
        </h4>
        <input 
        type="email" 
        name="email" 
        value={email}
        id="email"
        className="shadow appearance-none border rounded w-full py-1 px-1 text-black"
        onChange={(e) => setEmail(e.target.value)} />
        <h4 className="text-black">

        URL:
        </h4>
        <input 
        type="url" 
        name="url"
        value={url}
        id="urlEmpresa"
        className="shadow appearance-none border rounded w-full py-1 px-1 text-black"
        onChange={(e) => setUrl(e.target.value)} />
        <h4 className="text-black">
        
        Relatório:
        </h4>
        <input 
        type="url" 
        name="data"
        value={data}
        id="dataEmpresa"
        className="shadow appearance-none border rounded w-full py-1 px-1 text-black"
        onChange={(e) => setData(e.target.value)} />
        <h4 className="text-black">

        Categoria:
        </h4>
        <input 
        type="text" 
        name="sector"
        value={sector}
        id="sector"
        className="shadow appearance-none border rounded w-full py-1 px-1 text-black"
        onChange={(e) => setSector(e.target.value)} />
        <h4 className="text-black">

          Logo:
        </h4>
        <input 
        type="logo" 
        name="logo" 
        value={logo}
        id="logo"
        className="shadow appearance-none border rounded w-full py-1 px-1 text-black"
        onChange={(e) => setLogo(e.target.value)} />
        <br/>
      </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => handleClick()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
