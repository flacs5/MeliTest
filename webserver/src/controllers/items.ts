import { Request, Response, NextFunction } from "express";
import {
  Item,
  ItemDetailContainer,
  ItemsContainer,
} from "../dtos/response/types";
import itemsService from "../services/itemsService";
import { getDecimalPart } from "../misc/utils";
import { MLAvailableFilter, MLFilterValue } from "../dtos/response/mlTypes";

const getItems = async (req: Request, res: Response) => {
  const query = req.query.q;

  if (!query) {
    const error = new Error("Debe ingresar un filtro");
    return res.status(400).json({
      message: error.message,
    });
  }

  const data = await itemsService.getItems(query as string);

  const filterCategories = data.filters.find((x) => x.id === "category");
  let categories = [] as string[];

  if (!filterCategories) {
    const av_categories = data.available_filters.find(
      (x) => x.id === "category"
    ) as MLAvailableFilter;
    const orderedCategories = av_categories.values.sort(
      (a: MLFilterValue, b: MLFilterValue) => b.results - a.results
    );
    const categoryId = orderedCategories[0].id as string;
    const dataCategory = await itemsService.getCategory(categoryId);
    categories = dataCategory.path_from_root.map((x) => x.name);
  } else {
    categories = filterCategories.values[0].path_from_root.map((x) => x.name);
  }

  const returnData: ItemsContainer = {
    author: {
      name: process.env.SERVER_APP_AUTHOR_NAME || "",
      lastname: process.env.SERVER_APP_AUTHOR_LASTNAME || "",
    },
    categories: categories,
    items: data.results
      .filter((x, i) => i < 4)
      .map((x) => {
        const amount = Math.floor(x.price);
        const decimals = getDecimalPart(x.price);
        return {
          id: x.id,
          title: x.title,
          price: {
            currency: x.currency_id,
            amount: amount,
            decimals: decimals * 100,
          },
          picture: x.thumbnail,
          free_shipping: x.shipping.free_shipping,
          state: x.address.state_name,
        } as Item;
      }),
  };

  return res.status(200).json(returnData);
};

const getItem = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;

  //TODO: para mejorar performance, hacer las siguientes consultas en paralelo
  const dataItem = await itemsService.getItem(id);
  const dataItemDescription = await itemsService.getItemDescription(id);

  const dataCategory = await itemsService.getCategory(dataItem.category_id);

  const amount = Math.floor(dataItem.price);
  const decimals = Math.round((dataItem.price - amount) * 100) / 100;

  const data: ItemDetailContainer = {
    author: {
      name: process.env.SERVER_APP_AUTHOR_NAME || "",
      lastname: process.env.SERVER_APP_AUTHOR_LASTNAME || "",
    },
    item: {
      id: dataItem.id,
      title: dataItem.title,
      price: {
        currency: dataItem.currency_id,
        amount: amount,
        decimals: decimals * 100,
      },
      picture: dataItem.thumbnail,
      condition: dataItem.condition,
      free_shipping: dataItem.shipping.free_shipping,
      sold_quantity: dataItem.sold_quantity,
      description: dataItemDescription.plain_text,
      categories: dataCategory.path_from_root.map((x) => x.name),
    },
  };

  return res.status(200).json(data);
};

export default { getItems, getItem };
