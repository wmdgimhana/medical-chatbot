import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_URL;

export const sendMessage = async ({ question }) => {
  try {
    const res = await axios.post(`${BASE_API_URL}/medi`, {
      question: question,
    });

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
