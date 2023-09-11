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