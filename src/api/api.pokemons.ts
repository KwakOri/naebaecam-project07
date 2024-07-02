import { AxiosInstance } from "axios";

export class PokemonsAPI {
  private client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }
  async getPokemons() {
    const response = await this.client.get("/api/pokemons");
    const data = response.data;
    return data;
  }
  async getPokemon(id: number) {
    const response = await this.client.get(`/api/pokemons/${id}`);
    const data = response.data;
    return data;
  }
}
