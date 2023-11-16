import { api } from "./constant";

export const GET_API = async (path, data) => {
  const url = path;
  try {
    const response = await api.get(url, data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
