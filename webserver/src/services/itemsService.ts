import {
  MLCategory,
  MLItemDescription,
  MLItemDetail,
  MLItemsContainer,
} from "../dtos/response/mlTypes";
import ServiceBase from "./serviceBase";

class ItemsService extends ServiceBase {
  async getItems(query: string): Promise<MLItemsContainer> {
    return this.get<MLItemsContainer>(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
    );
  }

  async getItem(id: string): Promise<MLItemDetail> {
    return this.get<MLItemDetail>(`https://api.mercadolibre.com/items/${id}`);
  }

  async getItemDescription(id: string): Promise<MLItemDescription> {
    return this.get<MLItemDescription>(
      `https://api.mercadolibre.com/items/${id}/description`
    );
  }

  async getCategory(categoryId: string): Promise<MLCategory> {
    return this.get<MLCategory>(
      `https://api.mercadolibre.com/categories/${categoryId}`
    );
  }
}

export default new ItemsService();
