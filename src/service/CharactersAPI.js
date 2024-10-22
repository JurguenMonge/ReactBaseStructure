import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getCharacter() {
  try {
    const { data } = await api.get("/character");
    return data.results;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response);
    }
  }
}
