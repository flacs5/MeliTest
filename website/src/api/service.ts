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

  // async getItemDescription(id: string): Promise<MLItemDescription> {
  //   return this.get<MLItemDescription>(
  //     `https://api.mercadolibre.com/items/${id}/description`
  //   );
  // }
}

export default new Service();
