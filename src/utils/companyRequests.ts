import { client, ResponseAPI } from "@/api/client";
import { companyBody } from "@/interfaces/Icompany";

export const createCompany = async (body: companyBody): Promise<ResponseAPI | any> =>  {
  try {
    const { data } = await client.post('/company', body);
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }

}

export const getCompanies = async (): Promise<ResponseAPI[] | any> => {
  try {
    const { data } = await client.get('/companies');
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const deleteCompany = async (id: string) => {
  try {
    await client.delete(`/company/${id}`);
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const editCompany = async (id: string, editable: Partial<companyBody>): Promise<ResponseAPI | any> => {
  try {
    const { data } = await client.post(`/company/${id}`, editable);
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
}