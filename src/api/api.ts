import { BASE_URL } from "@/constants/constants";
import axios, { AxiosInstance } from "axios";
import { PokemonsAPI } from "./api.pokemons";

const client = axios.create({
  baseURL: BASE_URL,
});

class API {
  private client: AxiosInstance;
  public pokemons;
  constructor() {
    this.client = client;
    this.pokemons = new PokemonsAPI(this.client);
  }
}

export const api = new API();
