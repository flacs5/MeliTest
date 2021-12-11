import ServiceBase from "./serviceBase";
import { ItemDetailContainer, ItemsContainer } from "./types";

class Service extends ServiceBase {
  async getItems(query?: string): Promise<ItemsContainer> {
    console.log(query);
    return this.get<ItemsContainer>(`items?q=${query || ""}`);
  }

  async getItem(id?: string): Promise<ItemDetailContainer> {
    return this.get<ItemDetailContainer>(`items/${id}`);
  }
}

export default new Service();
