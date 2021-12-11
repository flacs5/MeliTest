export interface MLItemsContainer {
  results: MLItem[];
  filters: MLFilter[];
  available_filters: MLAvailableFilter[];
}

export interface MLAvailableFilter {
  id: string;
  values: MLFilterValue[];
}

export interface MLFilter {
  id: string;
  values: MLCategory[];
}

export interface MLFilterValue {
  id: string;
  results: number;
}

export interface MLItem {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  shipping: MLShipping;
  category_id: string;
  thumbnail: string;
  address: MLAddress;
}

export interface MLItemDetail extends MLItem {
  sold_quantity: number;
}

export interface MLShipping {
  free_shipping: boolean;
}

export interface MLItemDescription {
  plain_text: string;
}

export interface MLCategory {
  path_from_root: MLCategoryPath[];
}

export interface MLCategoryPath {
  name: string;
}

export interface MLAddress {
  state_name: string;
}
